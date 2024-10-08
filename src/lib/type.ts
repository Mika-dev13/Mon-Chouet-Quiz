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

export type QuizWithThemeAndLevel = Prisma.QuizGetPayload<{
  include: {
    theme: true;
    level: true;
  };
}>;

export type ThemeWithAll = Prisma.ThemeGetPayload<{
  include: {
    quizzes: {
      include: {
        level: true;
      };
    };
  };
}>;

export type Theme = {
  id: string;
  title: string;
  description: string;
  slug: string;
  image?: string;
  bgColor?: string;
};

export type Question = {
  id: number;
  title: string;
  answers: Answer[];
};

export type Answer = {
  id: number;
  response: string;
  status: boolean;
};
