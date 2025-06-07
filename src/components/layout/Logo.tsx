import { Camera } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center h-8 w-8 bg-primary text-primary-foreground rounded-md">
      <Camera className="h-5 w-5" />
    </div>
  );
}
