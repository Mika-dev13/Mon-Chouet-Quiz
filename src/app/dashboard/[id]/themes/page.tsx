import DashboardThemesSection from '@/components/DashboardThemesSection';
import { getThemesByUserId } from '@/lib/data-service';

const DashboardThemePage = async () => {
  const themes = await getThemesByUserId('user-id-1');

  return <DashboardThemesSection themes={themes} />;
};

export default DashboardThemePage;
