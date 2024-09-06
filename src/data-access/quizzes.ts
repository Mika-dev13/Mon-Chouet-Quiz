'use server';

import prisma from '@/lib/db';
import { quizSchema } from '@/lib/zodSchema';
import { verifySession } from './verifySession';
import { notFound } from 'next/navigation';
import { stringToSlug } from '@/utils/stringFormating';

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
export const getQuizzesByAuthor = async () => {
  const session = await verifySession();
  const quizzes = await prisma.quiz.findMany({
    where: {
      authorId: session.userId,
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

// Create a Theme-Related Quiz
export const createQuiz = async (prevState: any, formData: FormData) => {
  const session = await verifySession();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log(formData);
  const validatedData = quizSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    level: formData.get('level'),
    theme: formData.get('theme'),
    levelId: formData.get('levelId'),
    themeId: formData.get('themeId'),
  });

  if (!validatedData.success) {
    console.log(validatedData.error.flatten().fieldErrors);
    return { errors: validatedData.error.flatten().fieldErrors };
  }

  const slugQuiz = stringToSlug(validatedData.data.title);

  const slugTheme = stringToSlug(validatedData.data.theme);

  const quiz = await prisma.quiz.create({
    data: {
      title: validatedData.data.title,
      description: validatedData.data.description,
      slug: slugQuiz,
      levelId: validatedData.data.levelId,
      themeId: validatedData.data.themeId,
      authorId: session.userId,
    },
  });

  return quiz;
};
