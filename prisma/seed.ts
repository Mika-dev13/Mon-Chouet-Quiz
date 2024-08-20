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
          bgColor: '#ffedd5',
        },
        create: {
          title: 'Histoire',
          slug: 'histoire',
          description: 'Description 1',
          image: '/histoire.svg',
          bgColor: '#ffedd5',
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
          bgColor: '#dcfce7',
        },
        create: {
          title: 'Géographie',
          slug: 'geographie',
          description: 'Description 2',
          image: '/geo.svg',
          bgColor: '#dcfce7',
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
          bgColor: '#cffafe',
        },
        create: {
          title: 'Science et vie',
          slug: 'science-et-vie',
          description: 'Description 2',
          image: '/vie.svg',
          bgColor: '#cffafe',
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
          bgColor: '#fce7f3',
        },
        create: {
          title: 'Physique',
          slug: 'physique',
          description: 'Description 2',
          image: '/physique.svg',
          bgColor: '#fce7f3',
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
          bgColor: '#fae8ff',
        },
        create: {
          title: 'Astronomie',
          slug: 'astronomie',
          description: 'Description 2',
          image: '/astro.svg',
          bgColor: '#fae8ff',
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
