import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

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
