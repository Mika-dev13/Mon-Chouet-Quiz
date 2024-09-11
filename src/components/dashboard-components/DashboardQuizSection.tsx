'use client';

import { useState } from 'react';
import { isMatch } from '@/lib/stringFormating';
import DashboardItemCard from './DashboardItemCard';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {
  quizzes: {
    id: string;
    title: string;
    level: { level: string };
    theme: { title: string };
  }[];
};

const DashboardQuizSection = ({ quizzes }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);

  const searchQuiz = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);

    const results = quizzes.filter((quiz) => isMatch(quiz.title, value));

    setFilteredQuizzes(results);
  };
  return (
    <section>
      <div className='flex justify-between items-center'>
        <h1 className='font-medium text-lg'>Quiz</h1>
        <div className='flex gap-4'>
          <Button asChild>
            <Link href='/dashboard/create-quiz'>Créer un quiz</Link>
          </Button>

          <Input
            id='quiz'
            type='text'
            placeholder='Rechercher un quiz'
            className='w-60'
            onChange={(e) => searchQuiz(e)}
            value={searchValue}
            aria-label='rechercher-quiz'
          />
        </div>
      </div>
      <div className='mt-4 space-y-2'>
        {filteredQuizzes.map((quiz) => (
          <DashboardItemCard key={quiz.id} data={quiz} />
        ))}
      </div>
    </section>
  );
};

export default DashboardQuizSection;
