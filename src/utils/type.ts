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
