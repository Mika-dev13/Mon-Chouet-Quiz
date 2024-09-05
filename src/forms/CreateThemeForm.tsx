'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { createTheme } from '@/data-access/themes';
import { toast } from 'sonner';
import { useActionState, useEffect } from 'react';

const formSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(3).max(100),
  color: z.string().min(3).max(6),
});

const CreateThemeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      color: '',
    },
  });

  const [error, action, isPending] = useActionState(createTheme, null);

  const date = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  } as Intl.DateTimeFormatOptions;
  const formattedDate = date.toLocaleDateString('fr-FR', options);

  useEffect(() => {
    if (error?.errors.title === "Une erreur s'est produite.") {
      toast.error("Une erreur s'est produite. Veuillez réessayer", {
        action: {
          label: 'Fermer',
          onClick: () => console.log('Undo'),
        },
      });
    } else if (error?.errors.title === 'Le thème a bien été créer.') {
      toast.success('Le thème a bien été créer.', {
        description: `Le ${formattedDate}`,
        action: {
          label: 'Fermer',
          onClick: () => console.log('Undo'),
        },
      });
    }
  }, [error, formattedDate]);

  return (
    <Form {...form}>
      <form
        action={(formData) => {
          form.reset();
          action(formData);
        }}
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du thème</FormLabel>
              <FormControl>
                <Input {...field} type='text' minLength={3} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='mt-4'>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Entrez une petite description de votre thème'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='mt-8 disabled:bg-stone-400 disabled:cursor-not-allowed disabled:text-stone-800'
          disabled={isPending}
        >
          {isPending ? 'Création en cours...' : 'Créer le thème'}
        </Button>
      </form>
    </Form>
  );
};

export default CreateThemeForm;
