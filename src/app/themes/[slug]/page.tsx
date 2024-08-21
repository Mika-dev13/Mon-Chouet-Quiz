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
        <h1 className='text-2xl font-semibold mb-8'>Theme : {theme?.title}</h1>
        <ul className='grid grid-cols-3'>
          {theme?.quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className='border-2 rounded-md grid place-items-center h-52'
            >
              <li>{quiz.title}</li>
            </div>
          ))}
        </ul>
      </main>
    </>
  );
};

export default ThemePage;
