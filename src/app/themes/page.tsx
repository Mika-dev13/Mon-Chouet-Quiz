import Header from '@/components/Header';
import SearchTheme from '@/components/SearchTheme';
import SelectThemes from '@/components/SelectThemes';
import ThemeCard from '@/components/ThemeCard';

import prisma from '@/lib/db';

import stringToSlug from '@/utils/slugStringFormating';

const ThemesPage = async () => {
  const themes = await prisma.theme.findMany();

  return (
    <>
      <Header />
      <main className='lg:w-[1080px] mx-auto mt-16'>
        <h1 className='text-2xl font-semibold mb-8'>Themes</h1>
        <SearchTheme themes={themes} />
      </main>
    </>
  );
};

export default ThemesPage;
