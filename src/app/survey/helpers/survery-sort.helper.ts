import { Survey } from '../models';

export const sortQuestions = (
  questions: Survey.Question[]
): Survey.Question[] => {
  return questions.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });
};

export const sortChoices = (choices: Survey.Choice[]): Survey.Choice[] => {
  return choices.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });
};

export const sortSurvey = (questions: Survey.Question[]): Survey.Question[] => {
  const _sortedAnswers = questions.map((question) => {
    question.choices = sortChoices(question.choices);
    return question;
  });

  return sortQuestions(_sortedAnswers);
};
