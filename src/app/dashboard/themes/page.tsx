import DashboardThemesSection from '@/components/dashboard-components/DashboardThemesSection';
import { getThemeTitleByUserId } from '@/data-access/themes.dal';

const DashboardThemePage = async () => {
  const themes = await getThemeTitleByUserId();

  return (
    <main>
      <DashboardThemesSection themes={themes} />
    </main>
  );
};

export default DashboardThemePage;
