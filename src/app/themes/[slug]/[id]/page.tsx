import Header from '@/components/Header';
import QuizSection from '@/components/QuizSection';
import SelectItems from '@/components/SelectItems';
import { getQuiz, getQuizzesAndSlugTheme } from '@/lib/data-service';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

type QuizPageProps = {
  params: {
    slug: string;
    id: string;
  };
};

const QuizPage = async ({ params }: QuizPageProps) => {
  const { slug, id: quizSlug } = params;

  const quizzes = await getQuizzesAndSlugTheme();
  const quiz = await getQuiz(slug, quizSlug);

  if (!quiz) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main className='lg:w-[1080px] mx-auto mt-16'>
        <section className='flex justify-between'>
          <div>
            <h1 className='text-xl font-semibold'>
              {quiz.theme.title} : {quiz?.title}
            </h1>
            <div className='flex flex-col'>
              <p>
                Niveau :{' '}
                <span
                  className={`${
                    quiz.level.level === 'Moyen'
                      ? 'text-orange-500'
                      : quiz.level.level === 'Difficile'
                      ? 'text-red-500'
                      : 'text-green-500'
                  } font-semibold`}
                >
                  {quiz.level.level}
                </span>{' '}
              </p>
              <p>
                Nombre de questions :{' '}
                <span className='font-cursive'>{quiz.questions.length}</span>{' '}
              </p>
            </div>
          </div>
          <SelectItems items={quizzes} />
        </section>
        <QuizSection quiz={quiz} />
        {/* <Button className='bg-yellow-300 hover:bg-yellow-200 text-stone-800 w-full'>
              Sauvegarder
            </Button> */}
      </main>
    </>
  );
};

export default QuizPage;
