import DashboardThemesSection from '@/components/dashboard-components/DashboardThemesSection';
import { getThemeTitleByUserId } from '@/data-access/themes.dal';

const DashboardThemePage = async () => {
  const themes = await getThemeTitleByUserId();

  return <DashboardThemesSection themes={themes} />;
};

export default DashboardThemePage;
