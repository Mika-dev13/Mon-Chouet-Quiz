import Header from '@/components/Header';
import { getThemeBySlug } from '@/data-access/themes';
import Link from 'next/link';

type ThemePageProps = {
  params: {
    slug: string;
  };
};

const ThemePage = async ({ params }: ThemePageProps) => {
  const theme = await getThemeBySlug(params.slug);

  return (
    <>
      <Header />
      <main className='lg:w-[1080px] mx-auto mt-16'>
        <h1 className='text-2xl font-semibold mb-8'>Theme : {theme?.title}</h1>
        <div className='grid grid-cols-3 gap-4'>
          {theme?.quizzes.map((quiz) => (
            <Link
              href={`/themes/${theme.slug}/${quiz.slug}`}
              key={quiz.id}
              className='border-2 rounded-md grid place-items-center h-52'
            >
              <p>{quiz.title}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default ThemePage;
