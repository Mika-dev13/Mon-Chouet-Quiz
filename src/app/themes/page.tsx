import Header from '@/components/Header';
import ThemesSection from '@/components/quiz/ThemesSection';
import { getThemes } from '@/data-access/themes';

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
