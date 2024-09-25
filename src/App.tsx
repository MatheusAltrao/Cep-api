import { BuildingIcon, House, MapIcon, MapPinIcon, Search } from 'lucide-react';
import { FormEvent, useState } from 'react';
import Header from './components/header';
import InfoChips from './components/info-chips';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

interface CepData {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  const [cep, setCep] = useState('');
  const [cepData, setCepData] = useState<CepData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchCep = async (e: FormEvent) => {
    e.preventDefault();
    if (cep.length !== 8) {
      setError('CEP deve conter 8 dígitos');
      return;
    }

    setError(null);
    setCepData(null);

    try {
      await delay(2000);

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError('Erro ao buscar CEP');
        setCepData(null);
      } else {
        setCepData({
          cep: data.cep,
          state: data.uf,
          city: data.localidade,
          neighborhood: data.bairro,
          street: data.logradouro,
        });
        setError(null);
      }
    } catch (err) {
      setError('Erro ao buscar CEP');
      setCepData(null);
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6 rounded-lg border space-y-4">
        <Header />

        <div className="space-y-8">
          <form
            onSubmit={fetchCep}
            className="space-y-2"
          >
            <Label htmlFor="cep">Digite o CEP</Label>
            <div className="flex flex-col gap-2 md:flex-row">
              <Input
                id="cep"
                type="text"
                placeholder="Ex: 12345678"
                value={cep}
                onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
              />
              <Button>
                <span className=" flex items-center gap-2">
                  Buscar <Search size={20} />
                </span>
              </Button>
            </div>
          </form>

          <div>
            {error && (
              <Card className="border-red-500">
                <CardContent className="pt-6">
                  <p className="text-red-500">{error}</p>
                </CardContent>
              </Card>
            )}

            {cepData && !error && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resultados da Busca</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoChips
                      icon={
                        <MapPinIcon
                          size={20}
                          className="text-blue-500"
                        />
                      }
                      title="CEP"
                      description={cepData.cep}
                    />

                    <InfoChips
                      icon={
                        <MapIcon
                          size={20}
                          className="text-green-500"
                        />
                      }
                      title="Estado"
                      description={cepData.state}
                    />

                    <InfoChips
                      icon={
                        <BuildingIcon
                          size={20}
                          className="text-yellow-500"
                        />
                      }
                      title="Cidade"
                      description={cepData.city}
                    />

                    <InfoChips
                      icon={
                        <BuildingIcon
                          size={20}
                          className="text-purple-500"
                        />
                      }
                      title="Bairro"
                      description={cepData.neighborhood}
                    />

                    <InfoChips
                      icon={
                        <House
                          size={20}
                          className="text-red-500"
                        />
                      }
                      title="Rua"
                      description={cepData.street}
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
