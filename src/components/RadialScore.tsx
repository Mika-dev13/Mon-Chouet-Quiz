import { useEffect, useState } from 'react';

type Props = {
  score: string;
};

const RadialScore = ({ score }: Props) => {
  const [displayedScore, setDisplayedScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedScore((prevScore) => {
        const nextScore = prevScore + 1;
        if (nextScore > Number(score)) {
          clearInterval(interval);
        }
        return nextScore;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [score]);

  return (
    <div className=' z-0'>
      <div className='relative size-40'>
        <svg
          className='size-full -rotate-90'
          viewBox='0 0 36 36'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='18'
            cy='18'
            r='16'
            fill='none'
            className='stroke-current text-pink-200'
            stroke-width='2'
          ></circle>

          <circle
            cx='18'
            cy='18'
            r='16'
            fill='none'
            className='stroke-current text-pink-600'
            stroke-width='2'
            stroke-dasharray='100'
            stroke-dashoffset={100 - (displayedScore - 1)}
            stroke-linecap='round'
          ></circle>
        </svg>

        <div className='grid place-content-center absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2'>
          <span className='font-cursive text-center text-2xl font-bold tracking-wider text-pink-600 '>
            {displayedScore - 1}%
          </span>
          <span className='text-xs font-semibold text-center'>
            de bonnes réponses
          </span>
        </div>
      </div>
    </div>
  );
};

export default RadialScore;
