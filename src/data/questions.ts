
import { Question } from '@/types/game';

export const gameQuestions: Question[] = [
  // Classic Mode Questions
  {
    id: '1',
    type: 'truth',
    text: 'What is the most embarrassing thing that has ever happened to you?',
    category: 'Personal',
    difficulty: 'medium',
    ageRating: '13+',
    mode: ['classic', 'friends']
  },
  {
    id: '2',
    type: 'dare',
    text: 'Do your best impression of another player for 30 seconds.',
    category: 'Performance',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '3',
    type: 'truth',
    text: 'What is your biggest fear?',
    category: 'Personal',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },

  // Couples Mode Questions
  {
    id: '4',
    type: 'truth',
    text: 'What was your first impression of me?',
    category: 'Romantic',
    difficulty: 'easy',
    ageRating: '13+',
    mode: ['couples']
  },
  {
    id: '5',
    type: 'dare',
    text: 'Give your partner a 30-second massage.',
    category: 'Romantic',
    difficulty: 'easy',
    ageRating: '13+',
    mode: ['couples']
  },
  {
    id: '6',
    type: 'truth',
    text: 'What is your favorite memory of us together?',
    category: 'Romantic',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['couples']
  },

  // Friends Mode Questions
  {
    id: '7',
    type: 'dare',
    text: 'Call a random contact and sing "Happy Birthday" to them.',
    category: 'Social',
    difficulty: 'hard',
    ageRating: '13+',
    mode: ['friends']
  },
  {
    id: '8',
    type: 'truth',
    text: 'Who in this group would you want to be stuck on a desert island with?',
    category: 'Social',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['friends', 'classic']
  },
  {
    id: '9',
    type: 'dare',
    text: 'Post an embarrassing photo of yourself on social media.',
    category: 'Social',
    difficulty: 'hard',
    ageRating: '13+',
    mode: ['friends', 'extreme']
  },

  // Family Mode Questions
  {
    id: '10',
    type: 'truth',
    text: 'What is your favorite family tradition?',
    category: 'Family',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['family']
  },
  {
    id: '11',
    type: 'dare',
    text: 'Act out your favorite animal for everyone to guess.',
    category: 'Performance',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['family', 'classic']
  },
  {
    id: '12',
    type: 'truth',
    text: 'What superpower would you choose and why?',
    category: 'Imagination',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['family', 'friends']
  },

  // Extreme Mode Questions
  {
    id: '13',
    type: 'dare',
    text: 'Share your most recent text message with everyone.',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme']
  },
  {
    id: '14',
    type: 'truth',
    text: 'What is the most trouble you have ever gotten into?',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme']
  },
  {
    id: '15',
    type: 'dare',
    text: 'Let someone else go through your phone for 2 minutes.',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme']
  },

  // More questions for variety
  {
    id: '16',
    type: 'truth',
    text: 'If you could change one thing about yourself, what would it be?',
    category: 'Personal',
    difficulty: 'medium',
    ageRating: '13+',
    mode: ['classic', 'friends']
  },
  {
    id: '17',
    type: 'dare',
    text: 'Dance to a song of the group\'s choice for 1 minute.',
    category: 'Performance',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '18',
    type: 'truth',
    text: 'What is the weirdest dream you have ever had?',
    category: 'Personal',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '19',
    type: 'dare',
    text: 'Speak in an accent of your choice for the next 3 rounds.',
    category: 'Performance',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '20',
    type: 'truth',
    text: 'What is something you have never told anyone?',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme', 'couples']
  }
];
