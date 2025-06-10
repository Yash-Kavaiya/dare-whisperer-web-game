
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Player, QuestionType } from '@/types/game';

interface TruthDareSelectorProps {
  player: Player;
  onSelection: (type: QuestionType) => void;
}

const TruthDareSelector = ({ player, onSelection }: TruthDareSelectorProps) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
      <CardHeader>
        <CardTitle className="text-white text-center text-2xl">
          {player.avatar} {player.name}
        </CardTitle>
        <p className="text-white/80 text-center text-lg">
          The wheel has stopped! Make your choice:
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            onClick={() => onSelection('truth')}
            className="h-20 text-xl bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-400 shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-2xl mb-1">🤔</div>
              <div>TRUTH</div>
              <div className="text-sm opacity-80">Answer honestly</div>
            </div>
          </Button>
          
          <Button
            onClick={() => onSelection('dare')}
            className="h-20 text-xl bg-red-500 hover:bg-red-600 text-white border-2 border-red-400 shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-2xl mb-1">🔥</div>
              <div>DARE</div>
              <div className="text-sm opacity-80">Take the challenge</div>
            </div>
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-white/60 text-sm">
            Choose wisely - your fate awaits!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TruthDareSelector;
