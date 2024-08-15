import prisma from '@/lib/db';
import Link from 'next/link';

const QuizzesPage = async () => {
  const quizzes = await prisma.quiz.findMany();
  return (
    <div className='lg:w-[1080px] mx-auto mt-16'>
      <h1>Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link href={`/quizzes/${quiz.id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizzesPage;
