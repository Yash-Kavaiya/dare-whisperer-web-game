import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Volume2, VolumeX, RotateCcw, Home, Sparkles, PartyPopper, Trophy } from 'lucide-react';
import { GameMode, Player, Question, QuestionType } from '@/types/game';
import PlayerDisplay from '@/components/PlayerDisplay';
import QuestionCard from '@/components/QuestionCard';
import SpinnerWheel from '@/components/SpinnerWheel';
import TruthDareSelector from '@/components/TruthDareSelector';
import { gameQuestions, getRandomQuestion } from '@/data/questions';

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
  const [gameState, setGameState] = useState<'spinning' | 'selecting' | 'question' | 'waiting' | 'celebrating'>('waiting');
  const [usedPlayerIndices, setUsedPlayerIndices] = useState<number[]>([]);
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);

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

  // Get a random player that hasn't been selected recently
  const getRandomPlayerIndex = (): number => {
    // If all players have been selected, reset the used indices
    if (usedPlayerIndices.length >= players.length) {
      setUsedPlayerIndices([currentPlayerIndex]); // Keep current player in the list
      // Get random player excluding the current one
      const availableIndices = players
        .map((_, index) => index)
        .filter(index => index !== currentPlayerIndex);
      
      if (availableIndices.length === 0) return 0; // Fallback for single player
      
      const randomIndex = Math.floor(Math.random() * availableIndices.length);
      return availableIndices[randomIndex];
    }

    // Get available player indices
    const availableIndices = players
      .map((_, index) => index)
      .filter(index => !usedPlayerIndices.includes(index));
    
    if (availableIndices.length === 0) return 0; // Fallback
    
    // Select random player from available ones
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    return availableIndices[randomIndex];
  };

  const spinWheel = () => {
    setIsSpinning(true);
    setGameState('spinning');
    setShowCelebration(false);
    
    // Get random next player
    const nextPlayerIndex = getRandomPlayerIndex();
    
    // Simulate spinning delay
    setTimeout(() => {
      setIsSpinning(false);
      setCurrentPlayerIndex(nextPlayerIndex);
      setUsedPlayerIndices([...usedPlayerIndices, nextPlayerIndex]);
      setGameState('celebrating');
      setShowCelebration(true);
      
      // Play celebration sound if voice is enabled
      if (voiceEnabled) {
        const celebrationText = `Congratulations ${players[nextPlayerIndex].name}! You have been chosen!`;
        speakText(celebrationText);
      }
      
      // After celebration, move to selection
      setTimeout(() => {
        setShowCelebration(false);
        setGameState('selecting');
        const selectionText = `Now ${players[nextPlayerIndex].name}, make your choice: Truth or Dare?`;
        speakText(selectionText);
      }, 3000);
    }, 3000);
  };

  const handleTruthDareSelection = (selectedType: QuestionType) => {
    // Get random question that hasn't been used recently
    const filteredQuestions = modeQuestions.filter(q => 
      q.type === selectedType && !usedQuestions.includes(q.id)
    );
    
    let selectedQuestion: Question;
    
    if (filteredQuestions.length === 0) {
      // If all questions of this type have been used, reset and get any question
      setUsedQuestions([]);
      const allTypeQuestions = modeQuestions.filter(q => q.type === selectedType);
      if (allTypeQuestions.length === 0) {
        // Fallback to any question
        selectedQuestion = modeQuestions[Math.floor(Math.random() * modeQuestions.length)];
      } else {
        selectedQuestion = allTypeQuestions[Math.floor(Math.random() * allTypeQuestions.length)];
      }
    } else {
      // Select random question from available ones
      selectedQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
    }
    
    setCurrentQuestion(selectedQuestion);
    setUsedQuestions([...usedQuestions, selectedQuestion.id]);
    setGameState('question');
    
    // Speak the question after a short delay
    setTimeout(() => {
      const questionText = `${currentPlayer.name}, ${selectedType}. ${selectedQuestion.text}`;
      speakText(questionText);
    }, 500);
  };

  const nextTurn = () => {
    setCurrentQuestion(null);
    setGameState('waiting');
  };

  const handleComplete = () => {
    // Award points
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].score += 10;
    
    // Announce score
    speakText(`Well done! ${currentPlayer.name} gains 10 points!`);
    
    nextTurn();
  };

  const handleSkip = () => {
    // Deduct points for skipping
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].score = Math.max(0, updatedPlayers[currentPlayerIndex].score - 5);
    
    // Announce penalty
    speakText(`${currentPlayer.name} skips and loses 5 points!`);
    
    nextTurn();
  };

  // Initialize with random player on mount
  useEffect(() => {
    const randomStartIndex = Math.floor(Math.random() * players.length);
    setCurrentPlayerIndex(randomStartIndex);
    setUsedPlayerIndices([randomStartIndex]);
  }, []);

  // Confetti component
  const Confetti = () => (
    <>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: `${2 + Math.random() * 1}s`,
          }}
        >
          <div 
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#98FB98', '#DDA0DD'][Math.floor(Math.random() * 6)]
            }}
          />
        </div>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes bounce-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-confetti {
          animation: confetti linear;
        }
        
        .animate-bounce-scale {
          animation: bounce-scale 0.6s ease-in-out;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
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
          <div className="space-y-6 relative">
            {/* Confetti overlay */}
            {showCelebration && (
              <div className="fixed inset-0 pointer-events-none z-50">
                <Confetti />
              </div>
            )}

            {gameState === 'waiting' && (
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-center">
                    Ready for Next Round!
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 mb-4">
                    Click the spinner to randomly select the next player!
                  </p>
                  <div className="text-4xl">🎲</div>
                  <p className="text-white/60 text-sm mt-4">
                    The wheel will randomly choose who goes next
                  </p>
                </CardContent>
              </Card>
            )}

            {gameState === 'spinning' && (
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="text-center p-8">
                  <div className="animate-pulse text-white text-xl">
                    Spinning the wheel of fate...
                  </div>
                  <div className="text-6xl mt-4 animate-bounce">🎰</div>
                  <p className="text-white/70 mt-4">
                    Who will be chosen next?
                  </p>
                </CardContent>
              </Card>
            )}

            {gameState === 'celebrating' && (
              <Card className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 border-2 border-white animate-bounce-scale animate-glow">
                <CardHeader className="text-center">
                  <div className="flex justify-center space-x-2 mb-4">
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                    <Trophy className="w-10 h-10 text-yellow-300 animate-float" />
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                  </div>
                  <CardTitle className="text-white text-4xl font-bold animate-pulse">
                    🎉 WINNER! 🎉
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-8xl mb-4 animate-bounce">
                    {currentPlayer.avatar}
                  </div>
                  <h2 className="text-5xl font-bold text-white mb-2 animate-pulse">
                    {currentPlayer.name}
                  </h2>
                  <p className="text-2xl text-yellow-200 animate-bounce">
                    You've been chosen!
                  </p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <PartyPopper className="w-6 h-6 text-yellow-300 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <PartyPopper className="w-6 h-6 text-pink-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <PartyPopper className="w-6 h-6 text-purple-300 animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </CardContent>
              </Card>
            )}

            {gameState === 'selecting' && (
              <TruthDareSelector 
                player={currentPlayer}
                onSelection={handleTruthDareSelection}
              />
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

        {/* Stats Footer */}
        <div className="mt-8 text-center">
          <Card className="inline-block bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-4">
              <p className="text-white/80 text-sm">
                Round #{usedPlayerIndices.length} • Questions Asked: {usedQuestions.length} • Players: {players.length}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
