
import { Card, CardContent } from '@/components/ui/card';
import { Player } from '@/types/game';
import { Crown } from 'lucide-react';

interface PlayerDisplayProps {
  players: Player[];
  currentPlayerIndex: number;
}

const PlayerDisplay = ({ players, currentPlayerIndex }: PlayerDisplayProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {players.map((player, index) => (
        <Card 
          key={player.id}
          className={`transition-all duration-300 ${
            index === currentPlayerIndex 
              ? 'bg-yellow-400/20 border-yellow-400/50 scale-105' 
              : 'bg-white/10 border-white/20'
          } backdrop-blur-md`}
        >
          <CardContent className="p-4 text-center">
            <div className="relative">
              <div className="text-4xl mb-2">{player.avatar}</div>
              {index === currentPlayerIndex && (
                <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400" />
              )}
            </div>
            <h3 className={`font-semibold mb-1 ${
              index === currentPlayerIndex ? 'text-yellow-100' : 'text-white'
            }`}>
              {player.name}
            </h3>
            <p className={`text-sm ${
              index === currentPlayerIndex ? 'text-yellow-200' : 'text-white/70'
            }`}>
              Score: {player.score}
            </p>
            {index === currentPlayerIndex && (
              <div className="mt-2 text-xs text-yellow-200 animate-pulse">
                Current Turn
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PlayerDisplay;
