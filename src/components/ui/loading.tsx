import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Loader2
        size={20}
        className="animate-spin"
      />
    </div>
  );
};

export default Loading;
