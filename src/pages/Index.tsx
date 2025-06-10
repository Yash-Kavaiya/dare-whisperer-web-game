
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Users, Heart, Baby, Zap, Settings } from 'lucide-react';
import GameModeSelector from '@/components/GameModeSelector';
import GameBoard from '@/components/GameBoard';
import PlayerSetup from '@/components/PlayerSetup';
import { GameMode, Player } from '@/types/game';

const Index = () => {
  const [gameState, setGameState] = useState<'menu' | 'setup' | 'playing'>('menu');
  const [selectedMode, setSelectedMode] = useState<GameMode | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);

  const handleModeSelect = (mode: GameMode) => {
    setSelectedMode(mode);
    setGameState('setup');
  };

  const handlePlayersReady = (playerList: Player[]) => {
    setPlayers(playerList);
    setGameState('playing');
  };

  const handleBackToMenu = () => {
    setGameState('menu');
    setSelectedMode(null);
    setPlayers([]);
  };

  if (gameState === 'playing' && selectedMode) {
    return (
      <GameBoard 
        mode={selectedMode} 
        players={players} 
        onBackToMenu={handleBackToMenu}
      />
    );
  }

  if (gameState === 'setup' && selectedMode) {
    return (
      <PlayerSetup 
        mode={selectedMode}
        onPlayersReady={handlePlayersReady}
        onBack={() => setGameState('menu')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Truth or Dare
          </h1>
          <p className="text-xl text-white/90 mb-8">
            The ultimate party game for friends, couples, and family!
          </p>
        </div>

        <GameModeSelector onModeSelect={handleModeSelect} />

        <div className="text-center mt-8">
          <Card className="inline-block bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <p className="text-white/80 text-sm">
                🎮 Spin the wheel • 🎤 Voice output • 🎯 Multiple modes • 🔥 Epic dares
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
