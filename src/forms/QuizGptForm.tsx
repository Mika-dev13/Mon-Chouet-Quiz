'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  answer: z.string(),
});

const QuizForm = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer: '', // Réponse par défaut
    },
  });

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const onSubmit = (data) => {
    console.log('Réponse soumise :', data.answer);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      form.reset(); // Réinitialise la réponse pour la question suivante
    } else {
      console.log('Quiz terminé !');
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='answer'
            render={({ field }) => (
              <FormItem>
                <Label>{currentQuestion.title}</Label>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className='space-y-4'
                >
                  {currentQuestion.answers.map((answer) => (
                    <div
                      key={answer.id}
                      className='flex items-center space-x-2'
                    >
                      <RadioGroupItem value={answer.id} id={answer.id} />
                      <Label htmlFor={answer.id}>{answer.response}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='mt-8'>
            {currentQuestionIndex < quiz.questions.length - 1
              ? 'Valider'
              : 'Terminer le quiz'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuizForm;
