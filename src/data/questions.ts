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
  {
    id: '4',
    type: 'truth',
    text: 'What was your first impression of everyone in this room?',
    category: 'Social',
    difficulty: 'medium',
    ageRating: '13+',
    mode: ['classic', 'friends']
  },
  {
    id: '5',
    type: 'dare',
    text: 'Sing the chorus of your favorite song as dramatically as possible.',
    category: 'Performance',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '6',
    type: 'truth',
    text: 'What is the biggest lie you have ever told?',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '13+',
    mode: ['classic', 'friends']
  },
  {
    id: '7',
    type: 'dare',
    text: 'Talk in a funny voice for the next 3 rounds.',
    category: 'Performance',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },

  // Couples Mode Questions
  {
    id: '8',
    type: 'truth',
    text: 'What was your first impression of me?',
    category: 'Romantic',
    difficulty: 'easy',
    ageRating: '13+',
    mode: ['couples']
  },
  {
    id: '9',
    type: 'dare',
    text: 'Give your partner a 30-second massage.',
    category: 'Romantic',
    difficulty: 'easy',
    ageRating: '13+',
    mode: ['couples']
  },
  {
    id: '10',
    type: 'truth',
    text: 'What is your favorite memory of us together?',
    category: 'Romantic',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['couples']
  },
  {
    id: '11',
    type: 'truth',
    text: 'What habit of mine annoys you the most?',
    category: 'Romantic',
    difficulty: 'medium',
    ageRating: '13+',
    mode: ['couples']
  },
  {
    id: '12',
    type: 'dare',
    text: 'Look into your partner\'s eyes for 60 seconds without talking.',
    category: 'Romantic',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['couples']
  },
  {
    id: '13',
    type: 'truth',
    text: 'What is something you\'ve always wanted to tell me but haven\'t?',
    category: 'Romantic',
    difficulty: 'hard',
    ageRating: '13+',
    mode: ['couples']
  },
  {
    id: '14',
    type: 'dare',
    text: 'Recreate your first kiss together.',
    category: 'Romantic',
    difficulty: 'medium',
    ageRating: '13+',
    mode: ['couples']
  },

  // Friends Mode Questions
  {
    id: '15',
    type: 'dare',
    text: 'Call a random contact and sing "Happy Birthday" to them.',
    category: 'Social',
    difficulty: 'hard',
    ageRating: '13+',
    mode: ['friends']
  },
  {
    id: '16',
    type: 'truth',
    text: 'Who in this group would you want to be stuck on a desert island with?',
    category: 'Social',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['friends', 'classic']
  },
  {
    id: '17',
    type: 'dare',
    text: 'Post an embarrassing photo of yourself on social media.',
    category: 'Social',
    difficulty: 'hard',
    ageRating: '13+',
    mode: ['friends', 'extreme']
  },
  {
    id: '18',
    type: 'truth',
    text: 'What is the most childish thing you still do?',
    category: 'Personal',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['friends', 'classic']
  },
  {
    id: '19',
    type: 'dare',
    text: 'Let the group go through your phone for 30 seconds.',
    category: 'Social',
    difficulty: 'hard',
    ageRating: '13+',
    mode: ['friends', 'extreme']
  },
  {
    id: '20',
    type: 'truth',
    text: 'What is your most embarrassing drunk story?',
    category: 'Social',
    difficulty: 'medium',
    ageRating: '18+',
    mode: ['friends', 'extreme']
  },
  {
    id: '21',
    type: 'dare',
    text: 'Do 20 pushups or take a shot (of water).',
    category: 'Physical',
    difficulty: 'medium',
    ageRating: '13+',
    mode: ['friends', 'classic']
  },

  // Family Mode Questions
  {
    id: '22',
    type: 'truth',
    text: 'What is your favorite family tradition?',
    category: 'Family',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['family']
  },
  {
    id: '23',
    type: 'dare',
    text: 'Act out your favorite animal for everyone to guess.',
    category: 'Performance',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['family', 'classic']
  },
  {
    id: '24',
    type: 'truth',
    text: 'What superpower would you choose and why?',
    category: 'Imagination',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['family', 'friends']
  },
  {
    id: '25',
    type: 'dare',
    text: 'Tell a joke and make everyone laugh.',
    category: 'Performance',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['family', 'classic']
  },
  {
    id: '26',
    type: 'truth',
    text: 'What do you want to be when you grow up?',
    category: 'Imagination',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['family']
  },
  {
    id: '27',
    type: 'dare',
    text: 'Do your best robot dance for 30 seconds.',
    category: 'Performance',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['family', 'classic']
  },
  {
    id: '28',
    type: 'truth',
    text: 'What is your favorite family vacation memory?',
    category: 'Family',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['family']
  },

  // Extreme Mode Questions
  {
    id: '29',
    type: 'dare',
    text: 'Share your most recent text message with everyone.',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme']
  },
  {
    id: '30',
    type: 'truth',
    text: 'What is the most trouble you have ever gotten into?',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme']
  },
  {
    id: '31',
    type: 'dare',
    text: 'Let someone else go through your phone for 2 minutes.',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme']
  },
  {
    id: '32',
    type: 'truth',
    text: 'What is your biggest regret in life?',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme', 'classic']
  },
  {
    id: '33',
    type: 'dare',
    text: 'Call your ex and have a 1-minute conversation.',
    category: 'Social',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme']
  },
  {
    id: '34',
    type: 'truth',
    text: 'What is the worst thing you\'ve done that no one knows about?',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme']
  },
  {
    id: '35',
    type: 'dare',
    text: 'Delete one app from your phone that the group chooses.',
    category: 'Social',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme']
  },

  // More Classic/General Questions
  {
    id: '36',
    type: 'truth',
    text: 'If you could change one thing about yourself, what would it be?',
    category: 'Personal',
    difficulty: 'medium',
    ageRating: '13+',
    mode: ['classic', 'friends']
  },
  {
    id: '37',
    type: 'dare',
    text: 'Dance to a song of the group\'s choice for 1 minute.',
    category: 'Performance',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '38',
    type: 'truth',
    text: 'What is the weirdest dream you have ever had?',
    category: 'Personal',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '39',
    type: 'dare',
    text: 'Speak in an accent of your choice for the next 3 rounds.',
    category: 'Performance',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '40',
    type: 'truth',
    text: 'What is something you have never told anyone?',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '18+',
    mode: ['extreme', 'couples']
  },
  {
    id: '41',
    type: 'dare',
    text: 'Eat a spoonful of hot sauce or mustard.',
    category: 'Physical',
    difficulty: 'hard',
    ageRating: '13+',
    mode: ['classic', 'friends', 'extreme']
  },
  {
    id: '42',
    type: 'truth',
    text: 'What is your most irrational fear?',
    category: 'Personal',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends']
  },
  {
    id: '43',
    type: 'dare',
    text: 'Let someone draw on your face with a marker.',
    category: 'Physical',
    difficulty: 'hard',
    ageRating: '13+',
    mode: ['friends', 'extreme']
  },
  {
    id: '44',
    type: 'truth',
    text: 'What is the most expensive thing you\'ve broken?',
    category: 'Personal',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends']
  },
  {
    id: '45',
    type: 'dare',
    text: 'Do your best celebrity impression.',
    category: 'Performance',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '46',
    type: 'truth',
    text: 'What\'s the worst gift you\'ve ever received?',
    category: 'Personal',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '47',
    type: 'dare',
    text: 'Balance a spoon on your nose for 30 seconds.',
    category: 'Physical',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '48',
    type: 'truth',
    text: 'What\'s your most embarrassing nickname?',
    category: 'Personal',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends']
  },
  {
    id: '49',
    type: 'dare',
    text: 'Do 10 jumping jacks while singing the alphabet.',
    category: 'Physical',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '50',
    type: 'truth',
    text: 'What\'s the most useless talent you have?',
    category: 'Personal',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '51',
    type: 'dare',
    text: 'Pretend to be a news anchor and report on something happening in the room.',
    category: 'Performance',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '52',
    type: 'truth',
    text: 'What\'s the strangest thing you\'ve ever eaten?',
    category: 'Personal',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '53',
    type: 'dare',
    text: 'Wear socks on your hands for the next round.',
    category: 'Physical',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '54',
    type: 'truth',
    text: 'What\'s your guilty pleasure TV show or movie?',
    category: 'Personal',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends']
  },
  {
    id: '55',
    type: 'dare',
    text: 'Try to lick your elbow.',
    category: 'Physical',
    difficulty: 'easy',
    ageRating: 'PG',
    mode: ['classic', 'friends', 'family']
  },
  {
    id: '56',
    type: 'truth',
    text: 'What\'s the most embarrassing thing your parents have caught you doing?',
    category: 'Personal',
    difficulty: 'hard',
    ageRating: '13+',
    mode: ['classic', 'friends']
  },
  {
    id: '57',
    type: 'dare',
    text: 'Rap about the person to your right for 30 seconds.',
    category: 'Performance',
    difficulty: 'medium',
    ageRating: 'PG',
    mode: ['classic', 'friends']
  },
  {
    id: '58',
    type: 'truth',
    text: 'What\'s the longest you\'ve gone without showering?',
    category: 'Personal',
    difficulty: 'medium',
    ageRating: '13+',
    mode: ['classic', 'friends']
  },
  {
    id: '59',
    type: 'dare',
    text: 'Do the worm dance move (or try to).',
    category: 'Physical',
    difficulty: 'hard',
    ageRating: 'PG',
    mode: ['classic', 'friends']
  },
  {
    id: '60',
    type: 'truth',
    text: 'What\'s the most awkward date you\'ve been on?',
    category: 'Social',
    difficulty: 'medium',
    ageRating: '13+',
    mode: ['classic', 'friends', 'couples']
  }
];

// Helper function to get random questions
export const getRandomQuestion = (mode: string, type?: 'truth' | 'dare'): Question | null => {
  const filteredQuestions = gameQuestions.filter(q => {
    const modeMatch = q.mode.includes(mode as any);
    const typeMatch = type ? q.type === type : true;
    return modeMatch && typeMatch;
  });
  
  if (filteredQuestions.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  return filteredQuestions[randomIndex];
};

// Helper function to shuffle an array
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
