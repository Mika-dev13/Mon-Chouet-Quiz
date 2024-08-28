import prisma from '@/lib/db';
import { auth } from '../../../../auth';
import DashboardCard from '@/components/DashboardCard';

const UserDashboardPage = async () => {
  const session = await auth();

  const quizzes = await prisma.quiz.findMany({
    where: {
      authorId: 'user-id-1',
    },
  });

  const themes = await prisma.theme.findMany();

  if (!session?.user) return null;

  return (
    <section>
      <h2 className='text-lg font-semibold mb-4'>Ce que tu as crée</h2>
      <div className='grid grid-cols-3 gap-4'>
        <DashboardCard
          title='Thème'
          number={themes.length}
          href={`/dashboard/${session.user.id}/themes`}
        />
        <DashboardCard
          title='Quiz'
          number={quizzes.length}
          href={`/dashboard/${session.user.id}/quizzes`}
        />
        <DashboardCard title='Space' number={0} href='/dashboard' />
      </div>
    </section>
  );
};

export default UserDashboardPage;
