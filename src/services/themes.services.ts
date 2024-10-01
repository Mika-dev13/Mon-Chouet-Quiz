'use server';
import {
  createTheme,
  deleteThemeById,
  getThemeById,
  isThemeExist,
  updateThemeById,
} from '@/data-access/themes.dal';
import { verifySession } from '@/data-access/verifySession';
import { ThemeSchema } from '@/lib/zodSchema';
import { z } from 'zod';

// create theme service
export const createThemeService = async (
  prevState: any,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const validatedData = ThemeSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
  });

  if (!validatedData.success) {
    return {
      message: validatedData.error.flatten().fieldErrors,
      success: false,
    };
  }

  const isthemeExist = await isThemeExist(validatedData.data.title);

  if (isthemeExist) {
    return {
      message: 'Ce thème existe déjà. Veuillez changez de nom.',
      success: false,
    };
  }

  try {
    const theme = await createTheme(validatedData, await verifySession());

    return { theme, message: 'Le thème a bien été créer.', success: true };
  } catch (error) {
    console.error('Error creating theme:', error);
    return { message: "Une erreur s'est produite.", success: false };
  }
};

// update theme service
export const updateThemeService = async (
  prevState: any,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const ThemeSchema = z.object({
    title: z.string().min(3).max(50),
    description: z.string().max(250),
    id: z.string().min(3).max(50),
  });

  const validatedData = ThemeSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    id: formData.get('id'),
  });
  console.log('validatedData', validatedData);

  if (!validatedData.success) {
    return {
      message: validatedData.error.flatten().fieldErrors,
      success: false,
    };
  }
  console.log('formData', formData);
  const theme = await getThemeById(validatedData.data.id);

  if (!theme) {
    return {
      message: "Le thème n'existe pas",
      success: false,
    };
  }

  try {
    await updateThemeById(validatedData.data.id, {
      title: validatedData.data.title,
      description: validatedData.data.description,
    });

    return {
      message: 'Le thème a bien été mis à jour.',
      success: true,
    };
  } catch (error) {
    console.error('Error updating theme:', error);
    return {
      message: "Une erreur s'est produite",
      success: false,
    };
  }
};

// delete theme service
export const deleteThemeService = async (id: string) => {
  const session = await verifySession();

  const theme = await getThemeById(id);

  if (!theme) {
    return {
      message: "Le thème n'existe pas",
      success: false,
    };
  }

  if (theme.authorId !== session.userId) {
    return {
      message: "Vous n'êtes pas autorisé à supprimer ce thème",
      success: false,
    };
  }

  try {
    await deleteThemeById(id);
    return {
      message: 'Le thème a bien été supprimé',
      success: true,
    };
  } catch (error) {
    console.error('Error deleting theme:', error);
    return {
      message: "Une erreur s'est produite",
      success: false,
    };
  }
};
