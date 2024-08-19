import prisma from '@/lib/db';

type QuizPageProps = {
  params: {
    slug: string;
  };
};

const QuizPage = async ({ params }: QuizPageProps) => {
  const quiz = await prisma.quiz.findUnique({
    where: { slug: params.slug },
  });
  console.log(params.slug);
  return (
    <main className='lg:w-[1080px] mx-auto mt-16'>
      <h1>{quiz?.title}</h1>
      <p>{quiz?.description}</p>
    </main>
  );
};

export default QuizPage;
