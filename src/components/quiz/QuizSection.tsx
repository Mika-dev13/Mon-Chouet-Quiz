'use client';

import QuizForm from '@/forms/QuizForm';
import TimerBox from './TimerBox';
import { useState } from 'react';

type QuizFormProps = {
  quiz: {
    title: string;
    level: {
      level: string;
    };
    questions: {
      id: string;
      title: string;
      answers: {
        id: string;
        response: string;
        status: boolean;
      }[];
    }[];
  };
};

type QuizResult = {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
};

const QuizSection = ({ quiz }: QuizFormProps) => {
  const [isActive, setIsActive] = useState(false);
  const [hideQuiz, setHideQuiz] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState<QuizResult>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  return (
    <section className='flex justify-between gap-4 mt-16'>
      <QuizForm
        quiz={quiz}
        isActive={isActive}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        result={result}
        setResult={setResult}
        hideQuiz={hideQuiz}
      />
      <TimerBox
        quiz={quiz}
        isActive={isActive}
        setIsActive={setIsActive}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        setResult={setResult}
        hideQuiz={hideQuiz}
        setHideQuiz={setHideQuiz}
      />
    </section>
  );
};

export default QuizSection;
