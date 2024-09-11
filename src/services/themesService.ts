'use server';
import { createTheme, isThemeExist } from '@/data-access/themes';
import { verifySession } from '@/data-access/verifySession';
import { ThemeSchema } from '@/lib/zodSchema';

export const createThemeService = async (
  prevState: any,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

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

  const themeExist = await isThemeExist(validatedData.data.title);

  if (themeExist) {
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
