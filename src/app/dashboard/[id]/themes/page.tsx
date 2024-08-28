import DashboardItemCard from '@/components/DashboardItemCard';
import prisma from '@/lib/db';

const DashboardThemePage = async () => {
  const themes = await prisma.theme.findMany({
    where: {
      authorId: 'user-id-1',
    },
  });

  return (
    <div>
      <div>
        <h1 className='font-semibold text-lg'>Thèmes</h1>
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
