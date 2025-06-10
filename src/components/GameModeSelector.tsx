
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, Baby, Zap, Crown } from 'lucide-react';
import { GameMode } from '@/types/game';

interface GameModeSelectorProps {
  onModeSelect: (mode: GameMode) => void;
}

const GameModeSelector = ({ onModeSelect }: GameModeSelectorProps) => {
  const modes = [
    {
      id: 'classic' as GameMode,
      title: 'Classic Mode',
      description: 'The original truth or dare experience',
      icon: Crown,
      color: 'from-blue-500 to-blue-600',
      players: '3+ players'
    },
    {
      id: 'couples' as GameMode,
      title: 'Couples Mode',
      description: 'Romantic questions and intimate dares',
      icon: Heart,
      color: 'from-pink-500 to-red-500',
      players: '2 players'
    },
    {
      id: 'friends' as GameMode,
      title: 'Friends Mode',
      description: 'Party-focused fun for your squad',
      icon: Users,
      color: 'from-green-500 to-green-600',
      players: '3+ players'
    },
    {
      id: 'family' as GameMode,
      title: 'Family Mode',
      description: 'Kid-friendly questions for all ages',
      icon: Baby,
      color: 'from-yellow-500 to-orange-500',
      players: '2+ players'
    },
    {
      id: 'extreme' as GameMode,
      title: 'Extreme Mode',
      description: 'Bold dares for the fearless (18+)',
      icon: Zap,
      color: 'from-red-600 to-red-700',
      players: '3+ players'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modes.map((mode, index) => {
        const Icon = mode.icon;
        return (
          <Card 
            key={mode.id}
            className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onModeSelect(mode.id)}
          >
            <CardHeader className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${mode.color} flex items-center justify-center`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">{mode.title}</CardTitle>
              <CardDescription className="text-white/70">
                {mode.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/60 text-sm mb-4">{mode.players}</p>
              <Button 
                className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                onClick={(e) => {
                  e.stopPropagation();
                  onModeSelect(mode.id);
                }}
              >
                Select Mode
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default GameModeSelector;
