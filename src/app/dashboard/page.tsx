import DashboardCard from '@/components/dashboard/DashboardCard';
import { getNumberOfThemesByAuthor } from '@/data-access/themes';
import { getNumberOfQuizzesByAuthor } from '@/data-access/quizzes';

const UserDashboardPage = async () => {
  const numberOfQuizzes = await getNumberOfQuizzesByAuthor('user-id-1');
  const numberOfThemes = await getNumberOfThemesByAuthor();

  return (
    <section>
      <h2 className='text-lg font-medium mb-4 visually-hidden'>
        Ce que tu as crée
      </h2>
      <div className='grid grid-cols-3 gap-4'>
        <DashboardCard
          title='Thème'
          number={numberOfThemes}
          href={`/dashboard/themes`}
        />
        <DashboardCard
          title='Quiz'
          number={numberOfQuizzes}
          href={`/dashboard/quizzes`}
        />
        <DashboardCard title='Space' number={0} href='/dashboard' />
      </div>
    </section>
  );
};

export default UserDashboardPage;
