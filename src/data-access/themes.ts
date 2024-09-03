import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

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
export const getThemesByAuthor = async (authorId: string) => {
  const theme = await prisma.theme.findMany({
    where: {
      authorId: authorId,
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
