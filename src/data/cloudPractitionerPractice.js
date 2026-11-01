import { cloudPractitionerQuestions } from './cloudPractitionerQuestions';
import { cloudPractitionerQuestions2 } from './cloudPractitionerQuestions2';

// A prática reúne os dois bancos; os simulados continuam independentes.
export const getCloudPractitionerPracticeQuestions = () => [
  ...cloudPractitionerQuestions,
  ...cloudPractitionerQuestions2
];

export const getCloudPractitionerDomainQuestions = domainId =>
  getCloudPractitionerPracticeQuestions().filter(question => question.domain === domainId);
