import { getUserStatistics } from './userService';
import { getUserResults } from './apiService';

jest.mock('./apiService', () => ({ getUserResults: jest.fn() }));

test('estatísticas contam como erro só as questões respondidas incorretamente', async () => {
  getUserResults.mockResolvedValue([
    { examType: 'cloud-practitioner', correct: 1, total: 65, percentage: 1.5, wrongQuestions: [7], topics: [], timestamp: '2026-10-27T10:00:00Z' },
    { examType: 'cloud-practitioner', correct: 10, total: 20, percentage: 50, wrongQuestions: [1, 2], topics: [], timestamp: '2026-10-27T11:00:00Z' },
    { examType: 'developer-associate', correct: 15, total: 20, percentage: 75, topics: [], timestamp: '2026-10-27T12:00:00Z' }
  ]);

  const stats = await getUserStatistics('student');

  expect(stats.totalWrong).toBe(8);
  expect(stats.byExamType['cloud-practitioner']).toMatchObject({ exams: 2, correct: 11, wrong: 3 });
  expect(stats.byExamType['developer-associate'].wrong).toBe(5);
});

test('estatísticas mantêm os dois simulados de Practitioner separados', async () => {
  getUserResults.mockResolvedValue([
    { examType: 'cloud-practitioner', correct: 60, total: 65, percentage: 92.3, wrongQuestions: [1], topics: [], timestamp: '2026-10-31T10:00:00Z' },
    { examType: 'cloud-practitioner-2', correct: 69, total: 69, percentage: 100, wrongQuestions: [], topics: [], timestamp: '2026-10-31T11:00:00Z' }
  ]);
  const stats = await getUserStatistics('student');
  expect(stats.totalExams).toBe(2);
  expect(stats.totalQuestions).toBe(134);
  expect(stats.byExamType['cloud-practitioner']).toEqual({ exams: 1, correct: 60, wrong: 1 });
  expect(stats.byExamType['cloud-practitioner-2']).toEqual({ exams: 1, correct: 69, wrong: 0 });
});
