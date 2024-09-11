'use server';

import prisma from '@/lib/db';
import { notFound, redirect } from 'next/navigation';
import { verifySession } from './verifySession';
import { cache } from 'react';
import { stringToSlug } from '@/lib/stringFormating';

import { themeDto } from '@/dto/theme.dto';

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
  session: { isAuth?: boolean; userId: string }
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

// update theme by id
export const updateThemeById = async (
  id: string,
  data: { title: string; description: string },
  session: { userId: string }
) => {
  const updatedTheme = await prisma.theme.update({
    where: {
      id: id,
    },
    data: {
      title: data.title,
      description: data.description,
      slug: stringToSlug(data.title),
      updatedAt: new Date(),
    },
  });

  return updatedTheme;
};

// get theme by id
export const getThemeById = async (id: string) => {
  return await prisma.theme.findUnique({
    where: {
      id: id,
    },
    select: {
      authorId: true,
      title: true,
    },
  });
};

//delete theme by id
export const deleteThemeById = async (id: string) => {
  await prisma.theme.delete({
    where: {
      id: id,
    },
  });
};

// check if theme exist
export const isThemeExist = async (title: string): Promise<boolean> => {
  const theme = await prisma.theme.findFirst({
    where: { title },
  });

  return theme !== null;
};
