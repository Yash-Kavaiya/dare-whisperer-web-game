
export interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
}

export type GameMode = 'classic' | 'couples' | 'friends' | 'family' | 'extreme';

export type QuestionType = 'truth' | 'dare';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  ageRating: 'PG' | '13+' | '18+';
  mode: GameMode[];
}

export interface GameSettings {
  voiceEnabled: boolean;
  timerEnabled: boolean;
  timerDuration: number;
  passesAllowed: number;
  scoringEnabled: boolean;
}
