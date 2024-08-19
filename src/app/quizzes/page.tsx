import Header from '@/components/Header';
import prisma from '@/lib/db';
import stringToSlug from '@/utils/slugStringFormating';
import Link from 'next/link';

const QuizzesPage = async () => {
  const quizzes = await prisma.quiz.findMany();

  return (
    <>
      <Header />
      <main className='lg:w-[1080px] mx-auto mt-16'>
        <h1>Quizzes</h1>
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <Link href={`/quizzes/${stringToSlug(quiz.slug)}`}>
                {quiz.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default QuizzesPage;
