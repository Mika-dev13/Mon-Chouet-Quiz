import DashboardThemesSection from '@/components/dashboard-components/DashboardThemesSection';
import { getThemeTitleByUserId } from '@/data-access/themes';

const DashboardThemePage = async () => {
  // const themes = await getThemesByAuthor('user-id-1');
  // const themes = await getThemesByUserId();
  const themes = await getThemeTitleByUserId();

  return <DashboardThemesSection themes={themes} />;
};

export default DashboardThemePage;
