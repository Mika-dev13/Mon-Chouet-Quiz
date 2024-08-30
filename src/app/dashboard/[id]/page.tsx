import { auth } from '../../../../auth';
import DashboardCard from '@/components/dashboard/DashboardCard';
import {
  getNumberOfQuizzesByAuthor,
  getNumberOfThemesByAuthor,
} from '@/lib/data-service';

const UserDashboardPage = async () => {
  const session = await auth();

  const numberOfQuizzes = await getNumberOfQuizzesByAuthor('user-id-1');

  const numberOfThemes = await getNumberOfThemesByAuthor('user-id-1');

  if (!session?.user) return null;

  return (
    <section>
      <h2 className='text-lg font-medium mb-4 visually-hidden'>
        Ce que tu as crée
      </h2>
      <div className='grid grid-cols-3 gap-4'>
        <DashboardCard
          title='Thème'
          number={numberOfThemes}
          href={`/dashboard/${session.user.id}/themes`}
        />
        <DashboardCard
          title='Quiz'
          number={numberOfQuizzes}
          href={`/dashboard/${session.user.id}/quizzes`}
        />
        <DashboardCard title='Space' number={0} href='/dashboard' />
      </div>
    </section>
  );
};

export default UserDashboardPage;
