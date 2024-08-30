import Header from '@/components/Header';
import ThemesSection from '@/components/ThemesSection';
import { getThemes } from '@/lib/data-service';

const ThemesPage = async () => {
  const themes = await getThemes();

  return (
    <>
      <Header />
      <main className='lg:w-[1080px] mx-auto mt-16'>
        <h1 className='text-2xl font-semibold mb-8'>Themes</h1>
        <ThemesSection themes={themes} />
      </main>
    </>
  );
};

export default ThemesPage;
