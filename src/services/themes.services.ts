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
// export const updateThemeService = async (id: string, formData: FormData) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   const validatedData = ThemeSchema.safeParse({
//     title: formData.get('title'),
//     description: formData.get('description'),
//   });

//   if (!validatedData.success) {
//     return {
//       message: validatedData.error.flatten().fieldErrors,
//       success: false,
//     };
//   }

//   const theme = await getThemeById(id);

//   if (!theme) {
//     return {
//       message: "Le thème n'existe pas",
//       success: false,
//     };
//   }

//   if (theme.title !== validatedData.data.title) {
//     const themeExist = await isThemeExist(validatedData.data.title);

//     if (themeExist) {
//       return {
//         message: 'Ce thème existe déjà. Veuillez changez de nom.',
//         success: false,
//       };
//     }
//   }

//   try {
//     const updatedTheme = await updateThemeById(
//       id,
//       validatedData.data,
//       await verifySession()
//     );
//     return {
//       theme: updatedTheme,
//       message: 'Le thème a bien été mis à jour.',
//       success: true,
//     };
//   } catch (error) {
//     console.error('Error updating theme:', error);
//     return { message: "Une erreur s'est produite.", success: false };
//   }
// };

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
