import { ReactNode } from 'react';

interface InfoChipsProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const InfoChips = ({ icon, title, description }: InfoChipsProps) => {
  return (
    <div className="flex items-center gap-2">
      {icon}

      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm">{description || 'Não encontrado'}</p>
      </div>
    </div>
  );
};

export default InfoChips;
