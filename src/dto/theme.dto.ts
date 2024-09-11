import { Theme } from '@prisma/client';

export const themeDto = (themes: Theme[]) => {
  return themes.map((theme) => ({
    id: theme.id,
    title: theme.title,
    description: theme.description,
    slug: theme.slug,
    image: theme.image,
    bgColor: theme.bgColor,
  }));
};
