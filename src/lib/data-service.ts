import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import { auth } from '../../auth';

// get all themes
export const getThemes = async () => {
  const themes = await prisma.theme.findMany({
    orderBy: {
      title: 'asc',
    },
  });

  return themes;
};

// get themes by user id
export const getThemesByUserId = async (userId: string) => {
  const themes = await prisma.theme.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      title: 'asc',
    },
  });

  return themes;
};

// get theme by author id
export const getThemesByAuthor = async (userId: string) => {
  const theme = await prisma.theme.findMany({
    where: {
      authorId: userId,
    },
    select: {
      id: true,
      title: true,
    },
  });

  return theme;
};

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

// get number of themes by author id
export const getNumberOfThemesByAuthor = async (userId: string) => {
  const numberOfThemes = await prisma.theme.count({
    where: {
      authorId: userId,
    },
  });

  if (!numberOfThemes) return notFound();
  return numberOfThemes;
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

// get all quizzes by user id
export const getQuizzesByAuthor = async (userId: string) => {
  const quizzes = await prisma.quiz.findMany({
    where: {
      authorId: userId,
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

// get number of quizzes by author id
export const getNumberOfQuizzesByAuthor = async (userId: string) => {
  const numberOfQuizzes = await prisma.quiz.count({
    where: {
      authorId: userId,
    },
  });

  return numberOfQuizzes;
};
