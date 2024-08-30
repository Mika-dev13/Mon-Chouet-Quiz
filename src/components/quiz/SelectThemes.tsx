import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Theme } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type SelectThemesProps = {
  themes: Theme[];
};

const SelectThemes = ({ themes }: SelectThemesProps) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const router = useRouter();

  const handleChange = (value: string) => {
    if (!value) return;

    setSelectedTheme(value);

    const selectedThemeObj = themes.find((theme) => theme.title === value);

    if (selectedThemeObj) {
      router.push(`/themes/${selectedThemeObj.slug}`);
    }
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Choisis un thème' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Thèmes</SelectLabel>
          {themes.map((theme) => (
            <SelectItem key={theme.id} value={theme.title}>
              {theme.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectThemes;
