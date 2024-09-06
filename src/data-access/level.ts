import prisma from '@/lib/db';

// get level
export const getLevels = async () => {
  const levels = await prisma.level.findMany({
    select: {
      level: true,
      id: true,
    },
    orderBy: {
      level: 'asc',
    },
  });

  return levels;
};
