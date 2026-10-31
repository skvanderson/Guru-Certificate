import { createCloudPractitionerExam } from './cloudPractitionerExam';
import { cloudPractitionerQuestions } from './cloudPractitionerQuestions';
import { cloudPractitionerQuestions2 } from './cloudPractitionerQuestions2';

test('keeps 65 original and 69 additional questions without overlap', () => {
  expect(cloudPractitionerQuestions).toHaveLength(65);
  expect(cloudPractitionerQuestions2).toHaveLength(69);
  const originalIds = new Set(cloudPractitionerQuestions.map(question => question.id));
  expect(cloudPractitionerQuestions2.every(question => !originalIds.has(question.id))).toBe(true);
  expect(new Set(cloudPractitionerQuestions2.map(question => question.id)).size).toBe(69);
});

test.each([
  ['original', cloudPractitionerQuestions],
  ['additional', cloudPractitionerQuestions2]
])('shuffles the complete %s bank without mixing or modifying questions', (_name, bank) => {
  const before = bank.map(question => question.id);
  const exam = createCloudPractitionerExam(bank, () => 0);
  expect(exam.map(question => question.id)).not.toEqual(before);
  expect(new Set(exam.map(question => question.id))).toEqual(new Set(before));
  expect(bank.map(question => question.id)).toEqual(before);
});

test('additional questions have bilingual text and consistent answer keys', () => {
  cloudPractitionerQuestions2.forEach(question => {
    ['pt-BR', 'en'].forEach(language => {
      expect(question.title[language]).toBeTruthy();
      expect(question.description[language]).toBeTruthy();
      question.alternatives.forEach(alternative => {
        expect(alternative.title[language]).toBeTruthy();
        expect(alternative.explanation[language]).toBeTruthy();
      });
    });
    const correct = question.alternatives.filter(alternative => alternative.correct).length;
    expect(correct).toBeGreaterThanOrEqual(question.multiple ? 2 : 1);
    if (!question.multiple) expect(correct).toBe(1);
  });
});
