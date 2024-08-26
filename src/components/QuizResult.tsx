import { QuizWithAll } from '@/utils/type';
import RadialScore from './RadialScore';

type QuizFormProps = {
  quiz: QuizWithAll;
  result: QuizResult;
};
type QuizResult = {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
};

const QuizResult = ({ quiz, result }: QuizFormProps) => {
  const { questions } = quiz;

  const resultInPourcentage = (
    (result.correctAnswers / questions.length) *
    100
  ).toFixed();

  return (
    <div className='grid place-content-center text-lg mt-8 animate-fade animate-duration-300'>
      <div className='grid grid-cols-2 gap-8'>
        <div className='grid place-content-center'>
          <p className='font-cursive text-2xl text-pink-600 font-semibold'>
            Le Quiz est terminé !
          </p>
          <p>
            Nombres de réponses correctes : {result.correctAnswers} /{' '}
            {questions.length}
          </p>
        </div>
        <div className='flex justify-center bg-cyan-100 p-4 rounded-md'>
          <RadialScore score={resultInPourcentage} />
        </div>
      </div>
      <div className='bg-cyan-100 p-4 rounded-md mt-4'>
        <h2 className='text-lg font-semibold'>Voici les bonnes réponses:</h2>
        <ul className='mt-2'>
          {questions.map((question, index) => (
            <li key={index} className='flex flex-col'>
              <span className='font-medium'>{question.title}: </span>
              <span className='text-sm'>
                {question.answers.find((answer) => answer.status)?.response}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizResult;
