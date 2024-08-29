'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useRouter } from 'next/navigation';
import { QuizWithAll } from '@/utils/type';

type Props = {
  items: QuizWithAll[];
};

const SelectItems = ({ items }: Props) => {
  const [selectedItems, setSelectedItem] = useState<string>('');

  const router = useRouter();

  const handleChange = (value: string) => {
    if (!value) return;

    setSelectedItem(value);

    // find the theme slug
    const themeSlug = items.find((item) => item.title === value)?.theme.slug;

    const selectedThemeObj = items.find((item) => item.title === value);
    console.log(selectedThemeObj);

    if (selectedThemeObj) {
      router.push(`/themes/${themeSlug}/${selectedThemeObj.slug}`); // Redirection vers l'URL correspondante
    }
  };
  return (
    <div>
      <Select onValueChange={handleChange}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Choisis un quiz' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Quiz</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.id} value={item.title}>
                {item.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectItems;
