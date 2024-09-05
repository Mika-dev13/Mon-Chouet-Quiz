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
import { useActionState } from 'react';

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

  const [state, action, isPending] = useActionState(createTheme, null);

  return (
    <Form {...form}>
      <form action={action}>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du thème</FormLabel>
              <FormControl>
                <Input {...field} />
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
        <Button type='submit' className='mt-8'>
          Créer le thème
        </Button>
      </form>
      {/* {error && <FormMessage type='error'>{error}</FormMessage>} */}
      {isPending && <FormMessage>Création en cours...</FormMessage>}
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Toast
      </Button>
    </Form>
  );
};

export default CreateThemeForm;
