'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { useState } from 'react';

const formSchema = z.object({
  answers: z.array(z.string()),
});

const QuizForm = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const onSubmit = () => {};
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='answers'
            render={({ field }) => (
              <RadioGroup defaultValue='comfortable'>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='default' id='r1' />
                  <Label htmlFor='r1'>Default</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='comfortable' id='r2' />
                  <Label htmlFor='r2'>Comfortable</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='compact' id='r3' />
                  <Label htmlFor='r3'>Compact</Label>
                </div>
              </RadioGroup>
            )}
          />
          <Button type='submit' className='mt-8'>
            Valider
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuizForm;
