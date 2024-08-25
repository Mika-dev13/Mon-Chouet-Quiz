import { Prisma } from '@prisma/client';

export type QuizWithAll = Prisma.QuizGetPayload<{
  include: {
    theme: true;
    level: true;
    questions: {
      include: {
        answers: true;
      };
    };
  };
}>;

//generic type for the questions
export type Question = {
  id: number;
  title: string;
  answers: Answer[];
};

//generic type for the answers
export type Answer = {
  id: number;
  response: string;
  status: boolean;
};
