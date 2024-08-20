'use client';

import { Input } from '@/components/ui/input';
import { Theme } from '@prisma/client';
import ThemeCard from './ThemeCard';
import stringToSlug from '@/utils/slugStringFormating';
import { useState } from 'react';
import SelectThemes from './SelectThemes';

type SearchThemeProps = {
  themes: Theme[];
};

const SearchTheme = ({ themes }: SearchThemeProps) => {
  const [filteredThemes, setFilteredThemes] = useState(themes);
  const [searchValue, setSearchValue] = useState('');

  const removeAccents = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const isMatch = (title: string, searchTerm: string) => {
    const normalizedTitle = removeAccents(title.toLowerCase());
    const normalizedSearchTerm = removeAccents(searchTerm.toLowerCase());

    let searchIndex = 0;

    for (let i = 0; i < normalizedTitle.length; i++) {
      if (normalizedTitle[i] === normalizedSearchTerm[searchIndex]) {
        searchIndex++;
      }
      if (searchIndex === normalizedSearchTerm.length) {
        return true;
      }
    }

    return searchIndex === normalizedSearchTerm.length;
  };

  const searchTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);

    const results = themes.filter((theme) => isMatch(theme.title, value));
    setFilteredThemes(results);

    setFilteredThemes(results);
  };
  return (
    <>
      <div className='mb-8 flex gap-4'>
        <SelectThemes themes={themes} />
        <Input
          type='text'
          placeholder='Rechercher un thème'
          className='w-60'
          onChange={(e) => searchTheme(e)}
          value={searchValue}
        />
      </div>

      <div className='grid grid-cols-4 gap-4'>
        {filteredThemes.length > 0 ? (
          filteredThemes.map((theme) => (
            <ThemeCard
              key={theme.id}
              title={theme.title}
              image={theme.image}
              href={`/themes/${stringToSlug(theme.title)}`}
              bgColor={theme.bgColor ?? ''}
            />
          ))
        ) : (
          <p>Aucun thème trouvé</p>
        )}
      </div>
    </>
  );
};

export default SearchTheme;
