'use client';

import { Input } from '@/components/ui/input';
import ThemeCard from './ThemeCard';
import { stringToSlug, isMatch } from '@/lib/stringFormating';
import { useState } from 'react';
import SelectThemes from './SelectThemes';

type ThemesSectionProps = {
  themes: {
    id: string;
    title: string;
    image: string | null;
    bgColor: string | null;
    slug: string;
  }[];
};

const ThemesSection = ({ themes }: ThemesSectionProps) => {
  const [filteredThemes, setFilteredThemes] = useState(themes);
  const [searchValue, setSearchValue] = useState('');

  const searchTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);

    const results = themes.filter((theme) => isMatch(theme.title, value));
    setFilteredThemes(results);

    setFilteredThemes(results);
  };
  return (
    <>
      <div className='mb-8 flex gap-2'>
        <SelectThemes themes={themes} />
        <Input
          type='text'
          placeholder='Rechercher un thème'
          className='w-60'
          onChange={(e) => searchTheme(e)}
          value={searchValue}
        />
      </div>

      <div className='lg:grid grid-cols-4 gap-4 mb-32'>
        {filteredThemes.length > 0 ? (
          filteredThemes.map((theme) => (
            <ThemeCard
              key={theme.id}
              title={theme.title}
              image={theme.image ?? ''}
              href={`/themes/${stringToSlug(theme.title)}`}
              bgColor={theme.bgColor ?? '#fafaf9'}
            />
          ))
        ) : (
          <p>Aucun thème trouvé</p>
        )}
      </div>
    </>
  );
};

export default ThemesSection;
