import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const initialQuizData: Prisma.QuizCreateInput[] = [
  {
    title: 'La révolution française',
    description: 'Découvrez la révolution française',
    slug: 'la-revolution-francaise',
    theme: {
      connectOrCreate: {
        where: {
          title: 'Histoire',
          slug: 'histoire',
          description: 'Description 1',
          image: '/histoire.svg',
          bgColor: 'bg-red-100',
        },
        create: {
          title: 'Histoire',
          slug: 'histoire',
          description: 'Description 1',
          image: '/histoire.svg',
          bgColor: 'bg-red-100',
        },
      },
    },
  },
  {
    title: "Les capitales d'europes",
    description: "Découvrez les capitales d'europes",
    slug: 'les-capitales',
    theme: {
      connectOrCreate: {
        where: {
          title: 'Géographie',
          slug: 'geographie',
          description: 'Description 1',
          image: 'geo.svg',
          bgColor: 'bg-blue-100',
        },
        create: {
          title: 'Géographie',
          slug: 'geographie',
          description: 'Description 2',
          image: '/geo.svg',
          bgColor: 'bg-blue-100',
        },
      },
    },
  },
  {
    title: 'La faune et la flore',
    description: 'Découvrez la faune et la flore',
    slug: 'la-faune-et-la-flore',
    theme: {
      connectOrCreate: {
        where: {
          title: 'Science et vie',
          slug: 'science-et-vie',
          description: 'Description 1',
          image: '/vie.svg',
          bgColor: 'bg-green-100',
        },
        create: {
          title: 'Science et vie',
          slug: 'science-et-vie',
          description: 'Description 2',
          image: '/vie.svg',
          bgColor: 'bg-green-100',
        },
      },
    },
  },
  {
    title: 'Les atomes',
    description: 'Découvrez les atomes',
    slug: 'les-atomes',
    theme: {
      connectOrCreate: {
        where: {
          title: 'Physique',
          slug: 'physique',
          description: 'Description 1',
          image: '/physique.svg',
          bgColor: 'bg-yellow-100',
        },
        create: {
          title: 'Physique',
          slug: 'physique',
          description: 'Description 2',
          image: '/physique.svg',
          bgColor: 'bg-yellow-100',
        },
      },
    },
  },
  {
    title: 'Les étoiles',
    description: 'Découvrez les étoiles',
    slug: 'les-etoiles',
    theme: {
      connectOrCreate: {
        where: {
          title: 'Astronomie',
          slug: 'astronomie',
          description: 'Description 1',
          image: '/astro.svg',
          bgColor: 'bg-purple-100',
        },
        create: {
          title: 'Astronomie',
          slug: 'astronomie',
          description: 'Description 2',
          image: '/astro.svg',
          bgColor: 'bg-purple-100',
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
