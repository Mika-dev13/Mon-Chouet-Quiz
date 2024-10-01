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

type Props = {
  items: {
    id: string;
    title: string;
    slug: string;
    theme: {
      slug: string;
    };
  }[];
};

const SelectItems = ({ items }: Props) => {
  const [selectedItems, setSelectedItem] = useState<string>('');

  const router = useRouter();

  const handleChange = (value: string) => {
    if (!value) return;

    setSelectedItem(value);

    const themeSlug = items.find((item) => item.title === value)?.theme.slug;
    const selectedItemObj = items.find((item) => item.title === value);

    if (selectedItemObj) {
      router.push(`/themes/${themeSlug}/${selectedItemObj.slug}`);
    }
  };

  return (
    <div className='lg:mt-0 mt-4'>
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
