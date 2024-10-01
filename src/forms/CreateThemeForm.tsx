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
import { toast } from 'sonner';
import { useActionState, useEffect } from 'react';
import { createThemeService } from '@/services/themes.services';
import { ThemeSchema } from '@/lib/zodSchema';
import { useRouter } from 'next/navigation';

const CreateThemeForm = () => {
  const form = useForm<z.infer<typeof ThemeSchema>>({
    resolver: zodResolver(ThemeSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });
  const router = useRouter();
  const [status, action, isPending] = useActionState(createThemeService, null);

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
    const setTime = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      router.push('/dashboard/themes');
    };
    if (!status) return;

    if (!status?.success) {
      toast.error(
        status.message
          ? status.message.toString()
          : "Une erreur s'est produite",
        {
          action: {
            label: 'Fermer',
            onClick: () => console.log('Undo'),
          },
        }
      );

      return;
    }

    toast.success(status?.message.toString(), {
      description: `Le ${formattedDate}`,
      action: {
        label: 'Fermer',
        onClick: () => console.log('Undo'),
      },
    });
    setTime();
  }, [status, formattedDate, router]);

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
                <Input {...field} minLength={3} required />
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
