import DashboardItemCard from '@/components/DashboardItemCard';
import prisma from '@/lib/db';
import { QuizWithAll, QuizWithThemeAndLevel, ThemeWithAll } from '@/utils/type';

const DashboardThemePage = async () => {
  const themes = await prisma.theme.findMany({
    where: {
      authorId: 'user-id-1',
    },
  });

  return (
    <div>
      <div>
        <h1 className='font-medium text-lg'>Thèmes</h1>
      </div>
      <div className='mt-4 space-y-2'>
        {themes.map((theme) => (
          <DashboardItemCard key={theme.id} data={theme} />
        ))}
      </div>
    </div>
  );
};

export default DashboardThemePage;
