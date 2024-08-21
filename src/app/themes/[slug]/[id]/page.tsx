import Header from '@/components/Header';
import { Form } from '@/components/ui/form';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type QuizPageProps = {
  params: {
    slug: string;
    id: string;
  };
};

const QuizPage = async ({ params }: QuizPageProps) => {
  const { slug, id: quizSlug } = params;

  const quiz = await prisma.quiz.findUnique({
    where: {
      slug: quizSlug,
      theme: {
        slug: slug,
      },
    },
    include: {
      theme: true,
      level: true,
      questions: {
        include: {
          answers: true,
        },
      },
    },
  });

  if (!quiz) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main className='lg:w-[1080px] mx-auto mt-16'>
        <h1>{quiz?.title}</h1>
        <p>{quiz?.description}</p>
        <span>Niveau : {quiz.level.level}</span>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}></form>
          </Form>
        </div>
      </main>
    </>
  );
};

export default QuizPage;
