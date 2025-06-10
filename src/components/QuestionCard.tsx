
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Volume2 } from 'lucide-react';
import { Question, Player } from '@/types/game';

interface QuestionCardProps {
  question: Question;
  player: Player;
  onComplete: () => void;
  onSkip: () => void;
}

const QuestionCard = ({ question, player, onComplete, onSkip }: QuestionCardProps) => {
  const speakQuestion = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(question.text);
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'truth' ? 'bg-blue-500' : 'bg-red-500';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white text-xl">
            {player.avatar} {player.name}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={speakQuestion}
            className="text-white hover:bg-white/20"
          >
            <Volume2 className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Badge className={`${getTypeColor(question.type)} text-white`}>
            {question.type.toUpperCase()}
          </Badge>
          <Badge className={`${getDifficultyColor(question.difficulty)} text-white`}>
            {question.difficulty}
          </Badge>
          <Badge variant="outline" className="text-white border-white/30">
            {question.ageRating}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-white/10 p-6 rounded-lg">
          <p className="text-white text-lg leading-relaxed">
            {question.text}
          </p>
        </div>
        
        <div className="flex gap-4">
          <Button
            onClick={onComplete}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Completed (+10 points)
          </Button>
          <Button
            onClick={onSkip}
            variant="outline"
            className="flex-1 border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
          >
            <XCircle className="w-4 h-4 mr-2" />
            Skip (-5 points)
          </Button>
        </div>
        
        <p className="text-white/60 text-sm text-center">
          Category: {question.category}
        </p>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
