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

type QuizFormProps = {
  quiz: QuizWithAll;
};
type QuizResult = {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
};

const formSchema = z.object({
  answers: z.string(),
});

const QuizForm = ({ quiz }: QuizFormProps) => {
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
    const correctAnswer = currentQuestion.answers.find((a) => a.status);

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
    console.log(selectedAnswer);
    console.log('result', resultAnswer);
    nextQuestion();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {currentQuestion ? (
            <>
              <div className='mb-4'>
                <Label className='text-lg'>{currentQuestion.title}</Label>
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
            <p>Fin du quiz</p>
          )}
        </form>
      </Form>
    </div>
  );
};

export default QuizForm;
