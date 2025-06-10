
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Play, ArrowLeft } from 'lucide-react';
import { GameMode, Player } from '@/types/game';

interface PlayerSetupProps {
  mode: GameMode;
  onPlayersReady: (players: Player[]) => void;
  onBack: () => void;
}

const PlayerSetup = ({ mode, onPlayersReady, onBack }: PlayerSetupProps) => {
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: '', avatar: '🧑', score: 0 },
    { id: '2', name: '', avatar: '👩', score: 0 }
  ]);

  const avatars = ['🧑', '👩', '👨', '👩‍🦰', '👨‍🦱', '👩‍🦱', '👨‍🦲', '👩‍🦲', '🧒', '👧'];

  const addPlayer = () => {
    if (players.length < 8) {
      const newPlayer: Player = {
        id: Date.now().toString(),
        name: '',
        avatar: avatars[players.length % avatars.length],
        score: 0
      };
      setPlayers([...players, newPlayer]);
    }
  };

  const removePlayer = (id: string) => {
    if (players.length > 2) {
      setPlayers(players.filter(p => p.id !== id));
    }
  };

  const updatePlayer = (id: string, updates: Partial<Player>) => {
    setPlayers(players.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const handleStart = () => {
    const validPlayers = players.filter(p => p.name.trim());
    if (validPlayers.length >= 2) {
      onPlayersReady(validPlayers);
    }
  };

  const isValidToStart = players.filter(p => p.name.trim()).length >= 2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:bg-white/20 mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-white">
            Setup Players - {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode
          </h1>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-center">Add Players</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {players.map((player, index) => (
                <div key={player.id} className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <div className="text-3xl cursor-pointer" onClick={() => {
                    const nextAvatarIndex = (avatars.indexOf(player.avatar) + 1) % avatars.length;
                    updatePlayer(player.id, { avatar: avatars[nextAvatarIndex] });
                  }}>
                    {player.avatar}
                  </div>
                  <Input
                    placeholder={`Player ${index + 1} name`}
                    value={player.name}
                    onChange={(e) => updatePlayer(player.id, { name: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder-white/60"
                  />
                  {players.length > 2 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removePlayer(player.id)}
                      className="text-red-300 hover:text-red-100 hover:bg-red-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <Button
                onClick={addPlayer}
                disabled={players.length >= 8}
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Player {players.length < 8 ? `(${players.length}/8)` : '(Max)'}
              </Button>

              <Button
                onClick={handleStart}
                disabled={!isValidToStart}
                className="bg-green-500 hover:bg-green-600 text-white px-8"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Game
              </Button>
            </div>

            {!isValidToStart && (
              <p className="text-white/70 text-sm mt-4 text-center">
                Please add at least 2 players with names to start the game
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlayerSetup;
