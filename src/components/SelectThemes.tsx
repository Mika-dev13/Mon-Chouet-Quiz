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

type SelectThemesProps = {
  themes: Theme[];
};

const SelectThemes = ({ themes }: SelectThemesProps) => {
  return (
    <Select>
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
