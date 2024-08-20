import Header from '@/components/Header';
import prisma from '@/lib/db';

type ThemePageProps = {
  params: {
    slug: string;
  };
};

const ThemePage = async ({ params }: ThemePageProps) => {
  const theme = await prisma.theme.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      quizzes: true,
    },
  });

  console.log(theme);
  return (
    <>
      <Header />
      <main className='lg:w-[1080px] mx-auto mt-16'>
        <h1 className='text-2xl font-semibold'>Theme Page</h1>
        <p>{theme?.title}</p>
        <p>{theme?.description}</p>
        <ul>
          {theme?.quizzes.map((quiz) => (
            <li key={quiz.id}>{quiz.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default ThemePage;
