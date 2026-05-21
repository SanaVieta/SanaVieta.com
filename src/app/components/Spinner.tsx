import '@/styles/spinner.css';
import { LoaderCircle } from 'lucide-react';

interface SpinnerProps{
    theme: 'light' | 'dark';
}


export default function Spinner({ theme }: SpinnerProps) {
  const colors = {
    'dark': 'text-[#1B5E20]',
    'light': 'text-[#FFFFFF]'
  }
  return (
    <div className="loader-spin">
      <LoaderCircle className={colors[theme]} />
    </div>
  );
}
