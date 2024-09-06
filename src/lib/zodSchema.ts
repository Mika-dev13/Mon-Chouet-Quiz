import { z } from 'zod';

export const ThemeSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().max(250),
});

export const quizSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().max(100),
  level: z.string().min(3).max(50),
  theme: z.string().min(3).max(50),
  levelId: z.string().min(3).max(50),
  themeId: z.string().min(3).max(50),
});
