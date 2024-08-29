import DashboardItemCard from '@/components/DashboardItemCard';
import DashboardQuizSection from '@/components/DashboardQuizSection';
import SelectThemes from '@/components/SelectThemes';
import prisma from '@/lib/db';

const DashboardQuizPage = async () => {
  const quizzes = await prisma.quiz.findMany({
    where: {
      authorId: 'user-id-1',
    },
    include: {
      level: true,
      theme: true,
    },
  });

  return (
    <div>
      <DashboardQuizSection quizzes={quizzes} />
    </div>
  );
};

export default DashboardQuizPage;
