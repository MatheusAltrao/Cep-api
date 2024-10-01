<h1>Buscar CEP </h1>
<p>Este projeto é uma aplicação web desenvolvida com React.js, Tailwind CSS e Shadcn UI, que permite a consulta de endereços no Brasil a partir de um CEP. A aplicação faz a integração com a API ViaCEP para obter os dados de endereço completos, como rua, bairro, cidade e estado.</p>

<h3>Tecnologias Utilizadas:</h3>
<ul>
<li> <strong>React.js:</strong> A biblioteca principal para a criação da interface de usuário reativa e dinâmica.
 </li>

 <li> <strong>Tailwind CSS:</strong> Utilizado para o design e estilização de componentes de forma rápida, utilizando classes utilitárias.
 </li>

 <li> <strong>Shadcn UI</strong> Framework de design para adicionar componentes pré-construídos com alta acessibilidade e personalização.
 </li>

 <li> <strong>ViaCEP API:</strong> Serviço público que retorna dados de endereços brasileiros a partir de um CEP.
 </li>

</ul>

<h3>Funcionalidades:</h3>
<ul>
<li> <strong>Busca por CEP:</strong> O usuário pode inserir um CEP válido e, ao enviar, a aplicação faz uma chamada à API do ViaCEP para buscar os dados correspondentes.

 </li>

 <li> <strong>Exibição de Resultados:</strong> Após a consulta, o endereço completo é exibido de maneira organizada na tela, utilizando componentes estilizados com Tailwind CSS.
 </li>

 <li> <strong>Validação de Formulário:</strong>  O campo de CEP é validado para garantir que o usuário insira um valor adequado antes de realizar a requisição.
 </li>

 <li> <strong>Design Responsivo:</strong> A aplicação foi desenvolvida com foco em responsividade, adaptando-se bem tanto para dispositivos móveis quanto para telas maiores.
 </li>

 <li> <strong>Feedback ao Usuário:</strong> Em caso de erro, como CEP inválido ou não encontrado, uma mensagem de alerta estilizada é exibida para o usuário.
 </li>

</ul>

<h3>Estrutura do Código:</h3>
<ul>
<li> <strong>Componentização:</strong>  A aplicação foi construída de forma modular, com componentes separados para a entrada do CEP, a exibição dos dados de endereço e o gerenciamento de erros.

 </li>

 <li> <strong>Hooks React:</strong>  Utilizamos hooks como useState e useEffect para gerenciar o estado da aplicação e realizar as requisições à API.
 </li>

 <li> <strong>Validação de Formulário:</strong>  O campo de CEP é validado para garantir que o usuário insira um valor adequado antes de realizar a requisição.
 </li>

 <li> <strong>Chamada à API:</strong> A API do ViaCEP é consumida usando o método fetch, e os resultados são processados para exibir os dados de maneira intuitiva.
 </li>

</ul>

<h3>Link da API:</h3>
<p>Aqui estão a documentação e um exemplo do retorno da API</p>

🌐 [API](https://viacep.com.br/ws/01001000/json/)
📜 [Documentação](https://viacep.com.br/)

<h2>Retorno</h2>

```javascript
{
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "unidade": "",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "estado": "São Paulo",
      "regiao": "Sudeste",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
}
```

<h1>Contato</h1>

<ul>
<li> <strong>Owner:</strong> Matheus Altrão </li>
<li> <strong>Email:</strong> matheusaltrao2@gmail.com </li>
<li> <strong>linkedin:</strong><a href='https://www.linkedin.com/in/matheus-altrao/'>linkedin.com/matheus-altrao</a></li>
<li> <strong>Portfólio:</strong>  <a href='https://www.matheusaltrao.dev/'>www.matheusaltrao.dev</a>
 </li>
</ul>
