import DashboardThemesSection from '@/components/dashboard/DashboardThemesSection';
import { getThemesByAuthor } from '@/data-access/themes';

const DashboardThemePage = async () => {
  const themes = await getThemesByAuthor('user-id-1');

  return <DashboardThemesSection themes={themes} />;
};

export default DashboardThemePage;
