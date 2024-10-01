import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { Theme } from '@/lib/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { useActionState } from 'react';
import { updateThemeService } from '@/services/themes.services';

export const ThemeSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().max(250),
  id: z.string().min(3).max(50),
});

type Props = {
  theme: Theme;
};

const UpdateModal = () => {
  const [status, action, isPending] = useActionState(updateThemeService, null);

  const form = useForm<z.infer<typeof ThemeSchema>>({
    resolver: zodResolver(ThemeSchema),
    defaultValues: {
      title: '',
      description: '',
      id: '',
    },
  });

  return (
    <div className='absolute inset-0 bg-slate-50 rounded-md p-4 backdrop-blur-sm'>
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
            {isPending ? 'Mise à jour en cours...' : 'Mettre à jour le thème'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateModal;
