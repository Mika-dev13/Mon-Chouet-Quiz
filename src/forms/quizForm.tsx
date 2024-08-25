'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { useState } from 'react';
import { QuizWithAll } from '@/utils/type';
import Image from 'next/image';
import chouet from '../../public/win-chouette.webp';
import ShowQuizResult from '@/components/ShowQuizResult';
import TypeWriter from '@/components/TypeWriter';

type QuizFormProps = {
  quiz: QuizWithAll;
  isActive: boolean;
};
type QuizResult = {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
};

const formSchema = z.object({
  answers: z.string(),
});

const QuizForm = ({ quiz, isActive }: QuizFormProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setselectedAnswer] = useState<string>('');
  const [result, setResult] = useState<QuizResult>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { questions } = quiz;

  const currentQuestion = questions[currentQuestionIndex];

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const checkAnswer = (answer: string) => {
    const correctAnswer = currentQuestion.answers.find(
      (answer) => answer.status
    );

    console.log('correctAnswer', correctAnswer);

    if (answer === correctAnswer?.response) {
      const newCorrectResult = {
        ...result,
        score: result.score + 1,
        correctAnswers: result.correctAnswers + 1,
      };
      setResult(newCorrectResult);

      return newCorrectResult;
    }

    const newWrongResult = {
      ...result,
      wrongAnswers: result.wrongAnswers + 1,
    };
    setResult(newWrongResult);

    return newWrongResult;
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const resultAnswer = checkAnswer(data.answers);
    // console.log(selectedAnswer);
    // console.log('result', resultAnswer);
    nextQuestion();
  };

  return (
    <div className='relative flex-1 bg-cyan-200 px-4 pb-8 mb-16 rounded-md'>
      {!isActive && (
        <div className='absolute z-10 flex items-center  bg-cyan-500 inset-0 w-full rounded-md px-16'>
          <Image
            src={chouet}
            alt='Chouette'
            className='object-cover'
            width={200}
            height={200}
            loading='lazy'
          />

          <div className='relative flex items-center justify-center flex-1 bg-cyan-600 text-white text-xl rounded-md p-4 h-[120px]'>
            <TypeWriter text='Hey ! Clique sur le bouton à droite pour commencer le quiz.' />
            <div className='absolute bottom-1/2 left-0 transform -translate-x-2/3 translate-y-full rotate-90 w-0 h-0 border-t-8 border-t-cyan-600 border-x-8 border-x-transparent'></div>
          </div>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {currentQuestion ? (
            <>
              <div className='flex justify-between items-center mb-4'>
                <Label className='text-lg'>{currentQuestion.title}</Label>
                <span className='font-semibold'>
                  {currentQuestionIndex + 1} / {questions.length}
                </span>
              </div>
              <FormField
                control={form.control}
                name='answers'
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={(value) => {
                      setselectedAnswer(value); // Met à jour la réponse sélectionnée
                      field.onChange(value);
                    }}
                    defaultValue={selectedAnswer || ''}
                  >
                    {currentQuestion.answers.map((answer) => (
                      <FormItem
                        key={answer.id}
                        className='flex items-center gap-2'
                      >
                        <FormControl>
                          <RadioGroupItem
                            value={answer.response}
                            id={answer.id}
                          />
                        </FormControl>
                        <FormLabel className='!m-0' htmlFor={answer.id}>
                          {answer.response}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                )}
              />
              <Button type='submit' className='mt-8'>
                Valider
              </Button>{' '}
            </>
          ) : (
            <ShowQuizResult quiz={quiz} result={result} />
          )}
        </form>
      </Form>
    </div>
  );
};

export default QuizForm;
