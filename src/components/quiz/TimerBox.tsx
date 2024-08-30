'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PauseCircle, PlayCircle, Timer as TimerIcon } from 'lucide-react';
import AlertDialogTimer from './AlertDialogTimer';

type QuizResult = {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
};

type TimerBoxProps = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  setCurrentQuestionIndex: (index: number) => void;
  currentQuestionIndex: number;
  setResult: React.Dispatch<React.SetStateAction<QuizResult>>;
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
  hideQuiz: boolean;
  setHideQuiz: (hideQuiz: boolean) => void;
};

const TimerBox = ({
  quiz,
  isActive,
  setIsActive,
  setCurrentQuestionIndex,
  currentQuestionIndex,
  setResult,
  setHideQuiz,
}: TimerBoxProps) => {
  const [time, setTime] = useState(120);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { questions } = quiz;
  // const currentQuestion = questions[currentQuestionIndex];

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      setHideQuiz(false);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current!); // Arrête le timer à zéro
            setIsActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setIsActive(false);
    setHideQuiz(true);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  if (currentQuestionIndex > questions.length - 1) {
    pauseTimer();
    setHideQuiz(false);
  }

  const resetTimer = () => {
    pauseTimer();
    setTime(120);
    setCurrentQuestionIndex(0);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  // Nettoyer l'intervalle lorsque le composant est démonté
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <div className='flex gap-4 rounded-md bg-lime-300 px-4 py-2 mb-4'>
        <button
          onClick={startTimer}
          disabled={isActive}
          className={
            isActive
              ? 'bg-lime-100 p-1 rounded-md'
              : 'bg-lime-100 p-1 rounded-md animate-bounce'
          }
        >
          <PlayCircle size='36' color='#65a30d' strokeWidth={1} />
        </button>

        <button onClick={pauseTimer} className='bg-lime-100 p-1 rounded-md'>
          {' '}
          <PauseCircle size='36' color='#65a30d' strokeWidth={1} />
        </button>
        <AlertDialogTimer resetTimer={resetTimer} />
        <div className='flex gap-4 items-center bg-lime-100 p-1 rounded-md'>
          <div className='w-10 text-right'>
            <p className='font-cursive text-red-500'>{formatTime(time)}</p>
          </div>
          <TimerIcon size='24' color='#ef4444' />
        </div>
      </div>
    </div>
  );
};

export default TimerBox;
