import DashboardQuizSection from '@/components/DashboardQuizSection';
import { getQuizzesByAuthor } from '@/lib/data-service';

const DashboardQuizPage = async () => {
  const quizzes = await getQuizzesByAuthor('user-id-1');

  return <DashboardQuizSection quizzes={quizzes} />;
};

export default DashboardQuizPage;
