import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const initialQuizData: Prisma.QuizCreateInput[] = [
  {
    title: 'Quiz 1',
    description: 'Description 1',
    slug: 'quiz-1',
    theme: {
      connectOrCreate: {
        where: {
          title: 'Theme 1',
          slug: 'theme-1',
          description: 'Description 1',
          image: 'https://via.placeholder.com/150',
        },
        create: {
          title: 'Theme 1',
          slug: 'theme-1',
          description: 'Description 1',
          image: 'https://via.placeholder.com/150',
        },
      },
    },
  },
  {
    title: 'Quiz 2',
    description: 'Description 2',
    slug: 'quiz-2',
    theme: {
      connectOrCreate: {
        where: {
          title: 'Theme 2',
          slug: 'theme-2',
          description: 'Description 1',
          image: 'https://via.placeholder.com/150',
        },
        create: {
          title: 'Theme 2',
          slug: 'theme-2',
          description: 'Description 2',
          image: 'https://via.placeholder.com/150',
        },
      },
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const quiz of initialQuizData) {
    const createdQuiz = await prisma.quiz.create({
      data: quiz,
    });
    console.log(`Created quiz with id: ${createdQuiz.id}`);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
