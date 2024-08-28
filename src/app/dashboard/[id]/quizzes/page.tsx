import DashboardItemCard from '@/components/DashboardItemCard';
import prisma from '@/lib/db';

const DashboardQuizPage = async () => {
  const quizzes = await prisma.quiz.findMany({
    where: {
      authorId: 'user-id-1',
    },
    include: {
      theme: true,
    },
  });

  return (
    <div>
      <div>
        <h1 className='font-semibold text-lg'>Quiz</h1>
      </div>
      <div className='mt-4 space-y-2'>
        {quizzes.map((quiz) => (
          <DashboardItemCard key={quiz.id} data={quiz} />
        ))}
      </div>
    </div>
  );
};

export default DashboardQuizPage;
