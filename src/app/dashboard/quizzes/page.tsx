import DashboardQuizSection from '@/components/dashboard-components/DashboardQuizSection';
import { getQuizzesByAuthor } from '@/data-access/quizzes';

const DashboardQuizPage = async () => {
  const quizzes = await getQuizzesByAuthor();

  return <DashboardQuizSection quizzes={quizzes} />;
};

export default DashboardQuizPage;
