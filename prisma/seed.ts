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

  // Créer les quiz, questions et réponses pour chaque thème
  const theme1 = createdThemes[0];
  const theme2 = createdThemes[1];
  const theme3 = createdThemes[2];
  const theme4 = createdThemes[3];
  const theme5 = createdThemes[4];

  // Theme 1 Quizzes
  const quiz1Theme1 = await prisma.quiz.create({
    data: {
      id: cuid(),
      title: `La Révolution française`,
      slug: `la-revolution-francaise`,
      description: `Un quiz pour tester vos connaissances sur la Révolution française.`,
      themeId: theme1.id,
      levelId: simpleLevel.id,
      authorId: user.id,
    },
  });

  const quiz2Theme1 = await prisma.quiz.create({
    data: {
      id: cuid(),
      title: `Les Rois de France`,
      slug: `les-rois-de-france`,
      description: `Un quiz pour tester vos connaissances sur les Rois de France.`,
      themeId: theme1.id,
      levelId: moyenLevel.id,
      authorId: user.id,
    },
  });

  const quiz3Theme1 = await prisma.quiz.create({
    data: {
      id: cuid(),
      title: `La Seconde Guerre mondiale`,
      slug: `la-seconde-guerre-mondiale`,
      description: `Un quiz pour tester vos connaissances sur la Seconde Guerre mondiale.`,
      themeId: theme1.id,
      levelId: difficileLevel.id,
      authorId: user.id,
    },
  });

  // Theme 1 Quiz 1 Questions and Answers
  const question1Quiz1Theme1 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quelle est la date de début de la Révolution française ?`,
      slug: `date-debut-revolution-francaise`,
      quizId: quiz1Theme1.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `1792`,
        status: false,
        questionId: question1Quiz1Theme1.id,
      },
      {
        id: cuid(),
        response: `1789`,
        status: true, // Cette réponse est correcte
        questionId: question1Quiz1Theme1.id,
      },
      {
        id: cuid(),
        response: `1799`,
        status: false,
        questionId: question1Quiz1Theme1.id,
      },
    ],
  });

  const question2Quiz1Theme1 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Qui a été le dernier roi de France ?`,
      slug: `dernier-roi-france`,
      quizId: quiz1Theme1.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Napoléon Bonaparte`,
        status: false,
        questionId: question2Quiz1Theme1.id,
      },
      {
        id: cuid(),
        response: `Louis XVI`,
        status: true, // Cette réponse est correcte
        questionId: question2Quiz1Theme1.id,
      },
      {
        id: cuid(),
        response: `Charles X`,
        status: false,
        questionId: question2Quiz1Theme1.id,
      },
    ],
  });

  const question3Quiz1Theme1 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Qui a écrit le livre "Les Misérables" ?`,
      slug: `auteur-les-miserables`,
      quizId: quiz1Theme1.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Alexandre Dumas`,
        status: false,
        questionId: question3Quiz1Theme1.id,
      },
      {
        id: cuid(),
        response: `Victor Hugo`,
        status: true, // Cette réponse est correcte
        questionId: question3Quiz1Theme1.id,
      },
      {
        id: cuid(),
        response: `Gustave Flaubert`,
        status: false,
        questionId: question3Quiz1Theme1.id,
      },
    ],
  });

  // Theme 2 Quiz 2 Questions and Answers
  const question1Quiz2Theme1 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Qui a été le premier roi de France ?`,
      slug: `premier-roi-france`,
      quizId: quiz2Theme1.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Clovis`,
        status: true, // Cette réponse est correcte
        questionId: question1Quiz2Theme1.id,
      },
      {
        id: cuid(),
        response: `Charlemagne`,
        status: false,
        questionId: question1Quiz2Theme1.id,
      },
      {
        id: cuid(),
        response: `Louis XIV`,
        status: false,
        questionId: question1Quiz2Theme1.id,
      },
    ],
  });

  const question2Quiz2Theme1 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Qui a été le roi de France le plus jeune ?`,
      slug: `roi-france-plus-jeune`,
      quizId: quiz2Theme1.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Louis XIII`,
        status: false,
        questionId: question2Quiz2Theme1.id,
      },
      {
        id: cuid(),
        response: `Louis XIV`,
        status: false,
        questionId: question2Quiz2Theme1.id,
      },
      {
        id: cuid(),
        response: `Louis XV`,
        status: true, // Cette réponse est correcte
        questionId: question2Quiz2Theme1.id,
      },
    ],
  });

  const question3Quiz2Theme1 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Qui a été le roi de France le plus âgé ?`,
      slug: `roi-france-plus-age`,
      quizId: quiz2Theme1.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Louis XIV`,
        status: true, // Cette réponse est correcte
        questionId: question3Quiz2Theme1.id,
      },
      {
        id: cuid(),
        response: `Louis XV`,
        status: false,
        questionId: question3Quiz2Theme1.id,
      },
      {
        id: cuid(),
        response: `Louis XVI`,
        status: false,
        questionId: question3Quiz2Theme1.id,
      },
    ],
  });

  // Theme 3 Quiz 3 Questions and Answers

  const question1Quiz3Theme1 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quelle est la date de début de la Seconde Guerre mondiale ?`,
      slug: `date-debut-seconde-guerre-mondiale`,
      quizId: quiz3Theme1.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `1939`,
        status: true, // Cette réponse est correcte
        questionId: question1Quiz3Theme1.id,
      },
      {
        id: cuid(),
        response: `1945`,
        status: false,
        questionId: question1Quiz3Theme1.id,
      },
      {
        id: cuid(),
        response: `1941`,
        status: false,
        questionId: question1Quiz3Theme1.id,
      },
    ],
  });

  const question2Quiz3Theme1 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Qui était le dirigeant de l'Allemagne nazie pendant la Seconde Guerre mondiale ?`,
      slug: `dirigeant-allemagne-nazie`,
      quizId: quiz3Theme1.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Adolf Hitler`,
        status: true, // Cette réponse est correcte
        questionId: question2Quiz3Theme1.id,
      },
      {
        id: cuid(),
        response: `Benito Mussolini`,
        status: false,
        questionId: question2Quiz3Theme1.id,
      },
      {
        id: cuid(),
        response: `Hirohito`,
        status: false,
        questionId: question2Quiz3Theme1.id,
      },
    ],
  });

  const question3Quiz3Theme1 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quelle est la date de fin de la Seconde Guerre mondiale ?`,
      slug: `date-fin-seconde-guerre-mondiale`,
      quizId: quiz3Theme1.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `1945`,
        status: true, // Cette réponse est correcte
        questionId: question3Quiz3Theme1.id,
      },
      {
        id: cuid(),
        response: `1941`,
        status: false,
        questionId: question3Quiz3Theme1.id,
      },
      {
        id: cuid(),
        response: `1939`,
        status: false,
        questionId: question3Quiz3Theme1.id,
      },
    ],
  });

  // Theme 2 Quizzes
  const quiz1Theme2 = await prisma.quiz.create({
    data: {
      id: cuid(),
      title: `La Terre et l'Univers`,
      slug: `la-terre-et-l-univers`,
      description: `Un quiz pour tester vos connaissances sur la Terre et l'Univers.`,
      themeId: theme2.id,
      levelId: simpleLevel.id,
      authorId: user.id,
    },
  });

  const quiz2Theme2 = await prisma.quiz.create({
    data: {
      id: cuid(),
      title: `Les Animaux`,
      slug: `les-animaux`,
      description: `Un quiz pour tester vos connaissances sur les Animaux.`,
      themeId: theme2.id,
      levelId: moyenLevel.id,
      authorId: user.id,
    },
  });

  const quiz3Theme2 = await prisma.quiz.create({
    data: {
      id: cuid(),
      title: `Les Plantes`,
      slug: `les-plantes`,
      description: `Un quiz pour tester vos connaissances sur les Plantes.`,
      themeId: theme2.id,
      levelId: difficileLevel.id,
      authorId: user.id,
    },
  });

  // Theme 2 Quiz 1 Questions and Answers
  const question1Quiz1Theme2 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quelle est la planète la plus proche du Soleil ?`,
      slug: `planete-plus-proche-soleil`,
      quizId: quiz1Theme2.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Vénus`,
        status: false,
        questionId: question1Quiz1Theme2.id,
      },
      {
        id: cuid(),
        response: `Mercure`,
        status: true, // Cette réponse est correcte
        questionId: question1Quiz1Theme2.id,
      },
      {
        id: cuid(),
        response: `Mars`,
        status: false,
        questionId: question1Quiz1Theme2.id,
      },
    ],
  });

  const question2Quiz1Theme2 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quelle est la planète la plus grande du Système solaire ?`,
      slug: `planete-plus-grande-systeme-solaire`,
      quizId: quiz1Theme2.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Jupiter`,
        status: true, // Cette réponse est correcte
        questionId: question2Quiz1Theme2.id,
      },
      {
        id: cuid(),
        response: `Saturne`,
        status: false,
        questionId: question2Quiz1Theme2.id,
      },
      {
        id: cuid(),
        response: `Neptune`,
        status: false,
        questionId: question2Quiz1Theme2.id,
      },
    ],
  });

  const question3Quiz1Theme2 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quelle est la planète la plus éloignée du Soleil ?`,
      slug: `planete-plus-eloignee-soleil`,
      quizId: quiz1Theme2.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Neptune`,
        status: true, // Cette réponse est correcte
        questionId: question3Quiz1Theme2.id,
      },
      {
        id: cuid(),
        response: `Uranus`,
        status: false,
        questionId: question3Quiz1Theme2.id,
      },
      {
        id: cuid(),
        response: `Pluton`,
        status: false,
        questionId: question3Quiz1Theme2.id,
      },
    ],
  });

  // Theme 2 Quiz 2 Questions and Answers
  const question1Quiz2Theme2 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quel est le plus grand animal terrestre ?`,
      slug: `plus-grand-animal-terrestre`,
      quizId: quiz2Theme2.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Éléphant`,
        status: true, // Cette réponse est correcte
        questionId: question1Quiz2Theme2.id,
      },
      {
        id: cuid(),
        response: `Girafe`,
        status: false,
        questionId: question1Quiz2Theme2.id,
      },
      {
        id: cuid(),
        response: `Rhinocéros`,
        status: false,
        questionId: question1Quiz2Theme2.id,
      },
    ],
  });

  const question2Quiz2Theme2 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quel est le plus grand animal marin ?`,
      slug: `plus-grand-animal-marin`,
      quizId: quiz2Theme2.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Baleine bleue`,
        status: true, // Cette réponse est correcte
        questionId: question2Quiz2Theme2.id,
      },
      {
        id: cuid(),
        response: `Requin blanc`,
        status: false,
        questionId: question2Quiz2Theme2.id,
      },
      {
        id: cuid(),
        response: `Orque`,
        status: false,
        questionId: question2Quiz2Theme2.id,
      },
    ],
  });

  const question3Quiz2Theme2 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quel est le plus grand animal volant ?`,
      slug: `plus-grand-animal-volant`,
      quizId: quiz2Theme2.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Condor des Andes`,
        status: false,
        questionId: question3Quiz2Theme2.id,
      },
      {
        id: cuid(),
        response: `Albatros hurleur`,
        status: true, // Cette réponse est correcte
        questionId: question3Quiz2Theme2.id,
      },
      {
        id: cuid(),
        response: `Aigle royal`,
        status: false,
        questionId: question3Quiz2Theme2.id,
      },
    ],
  });

  // Theme 2 Quiz 3 Questions and Answers
  const question1Quiz3Theme2 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quelle est la plante la plus grande du monde ?`,
      slug: `plante-plus-grande-monde`,
      quizId: quiz3Theme2.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Bambou`,
        status: false,
        questionId: question1Quiz3Theme2.id,
      },
      {
        id: cuid(),
        response: `Séquoia`,
        status: false,
        questionId: question1Quiz3Theme2.id,
      },
      {
        id: cuid(),
        response: `Palmier`,
        status: true, // Cette réponse est correcte
        questionId: question1Quiz3Theme2.id,
      },
    ],
  });

  const question2Quiz3Theme2 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quelle est la plante la plus ancienne du monde ?`,
      slug: `plante-plus-ancienne-monde`,
      quizId: quiz3Theme2.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Ginkgo biloba`,
        status: true, // Cette réponse est correcte
        questionId: question2Quiz3Theme2.id,
      },
      {
        id: cuid(),
        response: `Cycas`,
        status: false,
        questionId: question2Quiz3Theme2.id,
      },
      {
        id: cuid(),
        response: `Pin`,
        status: false,
        questionId: question2Quiz3Theme2.id,
      },
    ],
  });

  const question3Quiz3Theme2 = await prisma.question.create({
    data: {
      id: cuid(),
      title: `Quelle est la plante la plus haute du monde ?`,
      slug: `plante-plus-haute-monde`,
      quizId: quiz3Theme2.id,
    },
  });

  await prisma.answer.createMany({
    data: [
      {
        id: cuid(),
        response: `Bambou`,
        status: false,
        questionId: question3Quiz3Theme2.id,
      },
      {
        id: cuid(),
        response: `Séquoia`,
        status: true, // Cette réponse est correcte
        questionId: question3Quiz3Theme2.id,
      },
      {
        id: cuid(),
        response: `Palmier`,
        status: false,
        questionId: question3Quiz3Theme2.id,
      },
    ],
  });

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
//   await prisma.theme.createMany({
//     data: [
//       {
//         id: cuid(),
//         title: 'Histoire',
//         slug: 'histoire',
//         description: "Thème sur l'histoire.",
//         image: '/histoire.svg',
//         authorId: user.id,
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
//         title: 'Astronomie',
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
//     for (let i = 1; i <= 3; i++) {
//       const quiz = await prisma.quiz.create({
//         data: {
//           id: cuid(),
//           title: `Quiz ${i} sur ${theme.title}`,
//           slug: `quiz-${i}-${theme.slug}`,
//           description: `Quiz ${i} sur le thème ${theme.title}`,
//           themeId: theme.id,
//           levelId:
//             i === 1
//               ? simpleLevel.id
//               : i === 2
//               ? moyenLevel.id
//               : difficileLevel.id,
//           authorId: user.id,
//         },
//       });

//       // Créer 3 questions pour chaque quiz
//       for (let j = 1; j <= 3; j++) {
//         const question = await prisma.question.create({
//           data: {
//             id: cuid(),
//             title: `Question ${j} pour ${quiz.title}`,
//             slug: `question-${j}-${quiz.slug}`,
//             quizId: quiz.id,
//           },
//         });

//         // Créer 3 réponses pour chaque question
//         await prisma.answer.createMany({
//           data: [
//             {
//               id: cuid(),
//               response: `Réponse 1 pour ${question.title}`,
//               status: false,
//               questionId: question.id,
//             },
//             {
//               id: cuid(),
//               response: `Réponse 2 pour ${question.title}`,
//               status: true, // Cette réponse est correcte
//               questionId: question.id,
//             },
//             {
//               id: cuid(),
//               response: `Réponse 3 pour ${question.title}`,
//               status: false,
//               questionId: question.id,
//             },
//           ],
//         });
//       }
//     }
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
