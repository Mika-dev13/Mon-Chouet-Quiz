import Header from '@/components/Header';
import SearchTheme from '@/components/SearchTheme';
import prisma from '@/lib/db';

const ThemesPage = async () => {
  const themes = await prisma.theme.findMany({ orderBy: { title: 'asc' } });

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
