
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

interface SpinnerWheelProps {
  isSpinning: boolean;
  onSpin: () => void;
  disabled: boolean;
}

const SpinnerWheel = ({ isSpinning, onSpin, disabled }: SpinnerWheelProps) => {
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (!disabled) {
      const newRotation = rotation + 1440 + Math.random() * 1440; // 4+ full rotations
      setRotation(newRotation);
      onSpin();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Wheel */}
        <div 
          className={`w-64 h-64 rounded-full border-8 border-white/30 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 transition-transform duration-3000 ease-out ${isSpinning ? 'animate-spin' : ''}`}
          style={{ 
            transform: `rotate(${rotation}deg)`,
            background: 'conic-gradient(from 0deg, #ef4444 0deg 72deg, #eab308 72deg 144deg, #22c55e 144deg 216deg, #3b82f6 216deg 288deg, #a855f7 288deg 360deg)'
          }}
        >
          {/* Truth and Dare sections */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <div className="text-center">
                <div className="text-white font-bold text-2xl mb-2">TRUTH</div>
                <div className="text-white text-lg">OR</div>
                <div className="text-white font-bold text-2xl mt-2">DARE</div>
              </div>
            </div>
          </div>
          
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
          </div>
        </div>
      </div>

      <Button
        onClick={handleSpin}
        disabled={disabled || isSpinning}
        className="mt-8 bg-white/20 hover:bg-white/30 text-white border-white/30 px-8 py-3 text-lg"
      >
        <RotateCcw className={`w-5 h-5 mr-2 ${isSpinning ? 'animate-spin' : ''}`} />
        {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
      </Button>
    </div>
  );
};

export default SpinnerWheel;
