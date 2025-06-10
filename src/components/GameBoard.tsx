
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Volume2, VolumeX, RotateCcw, Home } from 'lucide-react';
import { GameMode, Player, Question } from '@/types/game';
import PlayerDisplay from '@/components/PlayerDisplay';
import QuestionCard from '@/components/QuestionCard';
import SpinnerWheel from '@/components/SpinnerWheel';
import { gameQuestions } from '@/data/questions';

interface GameBoardProps {
  mode: GameMode;
  players: Player[];
  onBackToMenu: () => void;
}

const GameBoard = ({ mode, players, onBackToMenu }: GameBoardProps) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [gameState, setGameState] = useState<'spinning' | 'question' | 'waiting'>('waiting');

  const currentPlayer = players[currentPlayerIndex];
  const modeQuestions = gameQuestions.filter(q => q.mode.includes(mode));

  const speakText = (text: string) => {
    if (voiceEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const spinWheel = () => {
    setIsSpinning(true);
    setGameState('spinning');
    
    // Simulate spinning delay
    setTimeout(() => {
      const randomQuestion = modeQuestions[Math.floor(Math.random() * modeQuestions.length)];
      setCurrentQuestion(randomQuestion);
      setIsSpinning(false);
      setGameState('question');
      
      // Speak the question
      const questionText = `${currentPlayer.name}, ${randomQuestion.type}. ${randomQuestion.text}`;
      speakText(questionText);
    }, 3000);
  };

  const nextPlayer = () => {
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
    setCurrentQuestion(null);
    setGameState('waiting');
  };

  const handleComplete = () => {
    // Award points
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].score += 10;
    nextPlayer();
  };

  const handleSkip = () => {
    // Deduct points for skipping
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].score = Math.max(0, updatedPlayers[currentPlayerIndex].score - 5);
    nextPlayer();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="ghost"
            onClick={onBackToMenu}
            className="text-white hover:bg-white/20"
          >
            <Home className="w-4 h-4 mr-2" />
            Main Menu
          </Button>
          
          <h1 className="text-3xl font-bold text-white">
            {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode
          </h1>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className="text-white hover:bg-white/20"
            >
              {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Players Display */}
        <PlayerDisplay players={players} currentPlayerIndex={currentPlayerIndex} />

        {/* Game Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Spinner */}
          <div className="flex justify-center">
            <SpinnerWheel 
              isSpinning={isSpinning} 
              onSpin={spinWheel} 
              disabled={gameState !== 'waiting'}
            />
          </div>

          {/* Question/Action Area */}
          <div className="space-y-6">
            {gameState === 'waiting' && (
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-center">
                    {currentPlayer.name}'s Turn!
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 mb-4">
                    Click the spinner to get your truth or dare!
                  </p>
                  <div className="text-6xl">{currentPlayer.avatar}</div>
                </CardContent>
              </Card>
            )}

            {gameState === 'spinning' && (
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="text-center p-8">
                  <div className="animate-pulse text-white text-xl">
                    Spinning the wheel of fate...
                  </div>
                </CardContent>
              </Card>
            )}

            {gameState === 'question' && currentQuestion && (
              <QuestionCard 
                question={currentQuestion}
                player={currentPlayer}
                onComplete={handleComplete}
                onSkip={handleSkip}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
