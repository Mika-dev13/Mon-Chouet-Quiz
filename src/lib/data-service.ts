import prisma from '@/lib/db';
import { auth } from '../../auth';
import { notFound } from 'next/navigation';

// get themes unique
export const getThemeBySlug = async (slug: string) => {
  const theme = await prisma.theme.findUnique({
    where: {
      slug: slug,
    },
    select: {
      title: true,
      slug: true,
      quizzes: {
        select: {
          title: true,
          slug: true,
          id: true,
        },
      },
    },
  });

  if (!theme) notFound();

  return theme;
};

// get all quizzes and slug theme
export const getQuizzesAndSlugTheme = async () => {
  const quizzes = await prisma.quiz.findMany({
    select: {
      title: true,
      slug: true,
      id: true,
      theme: {
        select: {
          slug: true,
        },
      },
    },
  });

  return quizzes;
};

// get quiz unique
export const getQuiz = async (slug: string, quizSlug: string) => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      slug: quizSlug,
      theme: {
        slug: slug,
      },
    },
    select: {
      id: true,
      title: true,
      level: {
        select: {
          level: true,
        },
      },
      theme: {
        select: {
          title: true,
          slug: true,
        },
      },
      questions: {
        select: {
          id: true,
          title: true,
          answers: {
            select: {
              id: true,
              response: true,
              status: true,
            },
          },
        },
      },
    },
  });

  if (!quiz) notFound();

  return quiz;
};
