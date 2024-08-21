// import { PrismaClient } from '@prisma/client';
// import cuid from 'cuid';

// const prisma = new PrismaClient();

// async function main() {
//   // Créer les niveaux
//   const levels = await prisma.level.createMany({
//     data: [
//       { id: cuid(), level: 'Simple' },
//       { id: cuid(), level: 'Moyen' },
//       { id: cuid(), level: 'Difficile' },
//     ],
//   });

//   // Obtenir les IDs des niveaux pour les utiliser dans les quiz
//   const [simpleLevel, moyenLevel, difficileLevel] =
//     await prisma.level.findMany();

//   // Créer un utilisateur
//   const user = await prisma.user.create({
//     data: {
//       id: 'user-id-1', // Ou utilise cuid() pour générer un nouvel ID
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       // Ajoute les autres champs nécessaires ici
//     },
//   });

//   // Créer 5 thèmes
//   const themes = await prisma.theme.createMany({
//     data: [
//       {
//         id: cuid(),
//         title: 'Histoire',
//         slug: 'histoire',
//         description: "Thème sur l'histoire.",
//         image: '/histoire.svg',
//         authorId: user.id, // Assurez-vous d'avoir un utilisateur avec cet ID dans la DB
//         bgColor: '#fae8ff',
//       },
//       {
//         id: cuid(),
//         title: 'Science et vie',
//         slug: 'science-et-vie',
//         description: 'Thème sur la science.',
//         image: '/vie.svg',
//         authorId: user.id,
//         bgColor: '#fce7f3',
//       },
//       {
//         id: cuid(),
//         title: 'Géographie',
//         slug: 'geographie',
//         description: 'Thème sur la géographie.',
//         image: '/geo.svg',
//         authorId: user.id,
//         bgColor: '#cffafe',
//       },
//       {
//         id: cuid(),
//         title: 'Astonomie',
//         slug: 'astronomie',
//         description: "Thème sur l'astronomie.",
//         image: '/astro.svg',
//         authorId: user.id,
//         bgColor: '#dcfce7',
//       },
//       {
//         id: cuid(),
//         title: 'Physique',
//         slug: 'physique',
//         description: 'Thème sur la physique.',
//         image: '/physique.svg',
//         authorId: user.id,
//         bgColor: '#ffedd5',
//       },
//     ],
//   });

//   // Obtenir les thèmes pour les utiliser dans les quiz
//   const createdThemes = await prisma.theme.findMany();

//   // Créer 3 quiz pour chaque thème
//   for (const theme of createdThemes) {
//     await prisma.quiz.createMany({
//       data: [
//         {
//           id: cuid(),
//           title: `Quiz 1 sur ${theme.title}`,
//           slug: `quiz-1-${theme.slug}`,
//           description: `Premier quiz sur le thème ${theme.title}`,
//           themeId: theme.id,
//           levelId: simpleLevel.id, // Assignation d'un niveau (ici simple)
//         },
//         {
//           id: cuid(),
//           title: `Quiz 2 sur ${theme.title}`,
//           slug: `quiz-2-${theme.slug}`,
//           description: `Deuxième quiz sur le thème ${theme.title}`,
//           themeId: theme.id,
//           levelId: moyenLevel.id, // Assignation d'un niveau (ici moyen)
//         },
//         {
//           id: cuid(),
//           title: `Quiz 3 sur ${theme.title}`,
//           slug: `quiz-3-${theme.slug}`,
//           description: `Troisième quiz sur le thème ${theme.title}`,
//           themeId: theme.id,
//           levelId: difficileLevel.id, // Assignation d'un niveau (ici difficile)
//         },
//       ],
//     });
//   }

//   console.log('Seeding terminé.');
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
import { PrismaClient } from '@prisma/client';
import cuid from 'cuid';

const prisma = new PrismaClient();

async function main() {
  // Créer les niveaux
  const levels = await prisma.level.createMany({
    data: [
      { id: cuid(), level: 'Simple' },
      { id: cuid(), level: 'Moyen' },
      { id: cuid(), level: 'Difficile' },
    ],
  });

  // Obtenir les IDs des niveaux pour les utiliser dans les quiz
  const [simpleLevel, moyenLevel, difficileLevel] =
    await prisma.level.findMany();

  // Créer un utilisateur
  const user = await prisma.user.create({
    data: {
      id: 'user-id-1', // Ou utilise cuid() pour générer un nouvel ID
      name: 'John Doe',
      email: 'john.doe@example.com',
      // Ajoute les autres champs nécessaires ici
    },
  });

  // Créer 5 thèmes
  await prisma.theme.createMany({
    data: [
      {
        id: cuid(),
        title: 'Histoire',
        slug: 'histoire',
        description: "Thème sur l'histoire.",
        image: '/histoire.svg',
        authorId: user.id,
        bgColor: '#fae8ff',
      },
      {
        id: cuid(),
        title: 'Science et vie',
        slug: 'science-et-vie',
        description: 'Thème sur la science.',
        image: '/vie.svg',
        authorId: user.id,
        bgColor: '#fce7f3',
      },
      {
        id: cuid(),
        title: 'Géographie',
        slug: 'geographie',
        description: 'Thème sur la géographie.',
        image: '/geo.svg',
        authorId: user.id,
        bgColor: '#cffafe',
      },
      {
        id: cuid(),
        title: 'Astronomie',
        slug: 'astronomie',
        description: "Thème sur l'astronomie.",
        image: '/astro.svg',
        authorId: user.id,
        bgColor: '#dcfce7',
      },
      {
        id: cuid(),
        title: 'Physique',
        slug: 'physique',
        description: 'Thème sur la physique.',
        image: '/physique.svg',
        authorId: user.id,
        bgColor: '#ffedd5',
      },
    ],
  });

  // Obtenir les thèmes pour les utiliser dans les quiz
  const createdThemes = await prisma.theme.findMany();

  // Créer 3 quiz pour chaque thème
  for (const theme of createdThemes) {
    for (let i = 1; i <= 3; i++) {
      const quiz = await prisma.quiz.create({
        data: {
          id: cuid(),
          title: `Quiz ${i} sur ${theme.title}`,
          slug: `quiz-${i}-${theme.slug}`,
          description: `Quiz ${i} sur le thème ${theme.title}`,
          themeId: theme.id,
          levelId:
            i === 1
              ? simpleLevel.id
              : i === 2
              ? moyenLevel.id
              : difficileLevel.id,
        },
      });

      // Créer 3 questions pour chaque quiz
      for (let j = 1; j <= 3; j++) {
        const question = await prisma.question.create({
          data: {
            id: cuid(),
            title: `Question ${j} pour ${quiz.title}`,
            slug: `question-${j}-${quiz.slug}`,
            quizId: quiz.id,
          },
        });

        // Créer 3 réponses pour chaque question
        await prisma.answer.createMany({
          data: [
            {
              id: cuid(),
              response: `Réponse 1 pour ${question.title}`,
              status: false,
              questionId: question.id,
            },
            {
              id: cuid(),
              response: `Réponse 2 pour ${question.title}`,
              status: true, // Cette réponse est correcte
              questionId: question.id,
            },
            {
              id: cuid(),
              response: `Réponse 3 pour ${question.title}`,
              status: false,
              questionId: question.id,
            },
          ],
        });
      }
    }
  }

  console.log('Seeding terminé.');
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
