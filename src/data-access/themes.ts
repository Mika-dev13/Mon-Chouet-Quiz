'use server';

import prisma from '@/lib/db';
import { notFound, redirect } from 'next/navigation';
import { verifySession } from './verifySession';
import { cache } from 'react';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { ThemeSchema } from '@/lib/zodSchema';

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

  if (!numberOfThemes) return notFound();
  return numberOfThemes;
};

// create theme
// const ThemeSchema = z.object({
//   title: z.string().min(3).max(50),
//   description: z.string().max(250),
// });

export const createTheme = async (prevState: any, formData: FormData) => {
  const session = await verifySession();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validatedData = ThemeSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
  });

  if (!validatedData.success) {
    console.log(validatedData.error.flatten().fieldErrors);
    return { errors: validatedData.error.flatten().fieldErrors };
  }

  try {
    await prisma.theme.create({
      data: {
        title: validatedData.data.title,
        description: validatedData.data.description,
        author: {
          connect: {
            id: session.userId,
          },
        },
        slug: validatedData.data.title.toLowerCase().replace(/ /g, '-'),
        image: null,
      },
    });

    revalidatePath('/dashboard/themes');
    return { errors: { title: 'Le thème a bien été créer.' } };
  } catch (error) {
    console.error('Error creating theme:', error);
    return { errors: { title: "Une erreur s'est produite." } };
  }
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
