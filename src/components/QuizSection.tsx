'use client';

import QuizForm from '@/forms/QuizForm';
import TimerBox from './TimerBox';
import { QuizWithAll } from '@/utils/type';
import { useState } from 'react';

type QuizFormProps = {
  quiz: QuizWithAll;
};

const QuizSection = ({ quiz }: QuizFormProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className='flex justify-between gap-4 mt-16'>
      <QuizForm quiz={quiz} isActive={isActive} />
      <TimerBox isActive={isActive} setIsActive={setIsActive} />
    </section>
  );
};

export default QuizSection;
