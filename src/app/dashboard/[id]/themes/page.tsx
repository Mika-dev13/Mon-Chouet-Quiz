import DashboardThemesSection from '@/components/dashboard/DashboardThemesSection';
import { getThemesByAuthor, getThemesByUserId } from '@/lib/data-service';

const DashboardThemePage = async () => {
  const themes = await getThemesByAuthor('user-id-1');

  return <DashboardThemesSection themes={themes} />;
};

export default DashboardThemePage;
