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
import { createQuiz } from '@/data-access/quizzes.dal';
import { useActionState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { quizSchema } from '@/lib/zodSchema';

type Props = {
  themes: {
    id: string;
    title: string;
  }[];
  levels: {
    id: string;
    level: string;
  }[];
};

const CreateQuizForm = ({ themes, levels }: Props) => {
  const form = useForm<z.infer<typeof quizSchema>>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: '',
      description: '',
      level: '',
      theme: '',
    },
  });

  const [error, action, isPending] = useActionState(createQuiz, null);

  //   const date = new Date();
  //   const options = {
  //     weekday: 'long',
  //     day: 'numeric',
  //     month: 'long',
  //     year: 'numeric',
  //     hour: 'numeric',
  //     minute: 'numeric',
  //   } as Intl.DateTimeFormatOptions;
  //   const formattedDate = date.toLocaleDateString('fr-FR', options);

  //   useEffect(() => {
  //     if (error?.errors.title === "Une erreur s'est produite.") {
  //       toast.error("Une erreur s'est produite. Veuillez réessayer", {
  //         action: {
  //           label: 'Fermer',
  //           onClick: () => console.log('Undo'),
  //         },
  //       });
  //     } else if (error?.errors.title === 'Le thème a bien été créer.') {
  //       toast.success('Le thème a bien été créer.', {
  //         description: `Le ${formattedDate}`,
  //         action: {
  //           label: 'Fermer',
  //           onClick: () => console.log('Undo'),
  //         },
  //       });
  //     }
  //   }, [error, formattedDate]);

  //   const onSubmit = (values: z.infer<typeof quizSchema>) => {
  //     console.log(values);
  //   };

  return (
    <Form {...form}>
      <form action={action}>
        <div className='space-y-4'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom du quiz</FormLabel>
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
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Entrez une courte description de votre quiz'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='level'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Niveaux</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  name={field.name}
                  required
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Choisis un niveau de difficulté' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level.id} value={level.level}>
                        {level.level}
                        <input type='hidden' value={level.id} name='levelId' />
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='theme'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thèmes</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  name={field.name}
                  required={true}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Choissis un thème' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {themes.map((theme) => (
                      <SelectItem key={theme.id} value={theme.title}>
                        {theme.title}
                        <input type='hidden' value={theme.id} name='themeId' />
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type='submit'
          className='mt-8 disabled:bg-stone-400 disabled:cursor-not-allowed disabled:text-stone-800'
          disabled={isPending}
        >
          {isPending ? 'Création en cours...' : 'Créer le quiz'}
        </Button>
      </form>
    </Form>
  );
};

export default CreateQuizForm;
