import Header from '@/components/Header';
import TimerBox from '@/components/TimerBox';
import { Button } from '@/components/ui/button';
import QuizForm from '@/forms/quizForm';
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

  const quiz = await prisma.quiz.findUnique({
    where: {
      slug: quizSlug,
      theme: {
        slug: slug,
      },
    },
    include: {
      theme: true,
      level: true,
      questions: {
        include: {
          answers: true,
        },
      },
    },
  });

  if (!quiz) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main className='lg:w-[1080px] mx-auto mt-24'>
        <section className='flex justify-between'>
          <div>
            <h1 className='text-xl font-semibold'>
              {quiz.theme.title} : {quiz?.title}
            </h1>
            <div className='flex flex-col text-sm'>
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
        </section>
        <section className='flex gap-4 mt-16'>
          <div className='bg-teal-100 p-4 rounded-md flex-1'>
            <QuizForm quiz={quiz} />
          </div>
          <div className='px-4'>
            <TimerBox />
            {/* <Button className='bg-yellow-300 hover:bg-yellow-200 text-stone-800 w-full'>
              Sauvegarder
            </Button> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default QuizPage;
