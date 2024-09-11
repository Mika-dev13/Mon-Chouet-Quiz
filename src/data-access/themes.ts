'use server';

import prisma from '@/lib/db';
import { notFound, redirect } from 'next/navigation';
import { verifySession } from './verifySession';
import { cache } from 'react';
import { revalidatePath } from 'next/cache';
import { stringToSlug } from '@/lib/stringFormating';
import { Theme } from '@prisma/client';

const themeDto = (themes: Theme[]) => {
  return themes.map((theme) => ({
    id: theme.id,
    title: theme.title,
    description: theme.description,
    slug: theme.slug,
    image: theme.image,
    bgColor: theme.bgColor,
  }));
};

// get all themes
export const getThemes = async () => {
  const themes = await prisma.theme.findMany({
    orderBy: {
      title: 'asc',
    },
  });

  return themeDto(themes);
};

// get themes by user id
export const getThemesByUserId = cache(async () => {
  const session = await verifySession();
  const themes = await prisma.theme.findMany({
    where: {
      authorId: session.userId,
    },
    orderBy: {
      title: 'asc',
    },
  });

  return themes;
});

// get theme by author id
export const getThemeTitleByUserId = cache(async () => {
  const session = await verifySession();
  const theme = await prisma.theme.findMany({
    where: {
      authorId: session.userId,
    },
    select: {
      id: true,
      title: true,
    },
  });

  return theme;
});

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
export const getNumberOfThemesByAuthor = async () => {
  const session = await verifySession();
  const numberOfThemes = await prisma.theme.count({
    where: {
      authorId: session.userId,
    },
  });

  return numberOfThemes;
};

export const createTheme = async (
  validatedData: { data: { title: string; description: string } },
  session: { isAuth?: boolean; userId: any }
) => {
  const theme = await prisma.theme.create({
    data: {
      title: validatedData.data.title,
      description: validatedData.data.description,
      author: {
        connect: {
          id: session.userId,
        },
      },
      slug: stringToSlug(validatedData.data.title),
      image: null,
    },
  });

  return theme;
};

//delete theme by id
export const deleteTheme = async (id: string) => {
  const session = await verifySession();

  const theme = await prisma.theme.findUnique({
    where: {
      id: id,
    },
    select: {
      authorId: true,
    },
  });

  if (!theme) return notFound();
  if (theme.authorId !== session.userId) return redirect('/dashboard/themes');

  try {
    await prisma.theme.delete({
      where: {
        id: id,
      },
    });

    revalidatePath('/dashboard/themes');
  } catch (error) {
    console.error('Error deleting theme:', error);
  }
};

// check if theme exist
export const isThemeExist = async (title: string): Promise<boolean> => {
  const theme = await prisma.theme.findFirst({
    where: { title },
  });

  return theme !== null;
};
