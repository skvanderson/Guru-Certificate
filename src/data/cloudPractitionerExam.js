import { cloudPractitionerQuestions } from './cloudPractitionerQuestions';

const shuffle = (items, random) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
};

export const createCloudPractitionerExam = (
  questions = cloudPractitionerQuestions,
  random = Math.random
) => shuffle(questions, random);
