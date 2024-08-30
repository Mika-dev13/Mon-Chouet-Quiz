'use client';

import { isMatch } from '@/utils/stringFormating';
import { useState } from 'react';
import DashboardItemCard from './DashboardItemCard';
import { Input } from '../ui/input';

type Props = {
  themes: {
    id: string;
    title: string;
  }[];
};

const DashboardThemesSection = ({ themes }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredThemes, setFilteredThemes] = useState(themes);

  const searchQuiz = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);

    const results = themes.filter((theme) => isMatch(theme.title, value));

    setFilteredThemes(results);
  };
  return (
    <section>
      <div className='flex justify-between items-center'>
        <h1 className='font-medium text-lg'>Thèmes</h1>
        <div>
          <Input
            id='quiz'
            type='text'
            placeholder='Rechercher un thème'
            className='w-60'
            onChange={(e) => searchQuiz(e)}
            value={searchValue}
            aria-label='rechercher un thème'
          />
        </div>
      </div>
      <div className='mt-4 space-y-2'>
        {filteredThemes.map((theme) => (
          <DashboardItemCard key={theme.id} data={theme} />
        ))}
      </div>
    </section>
  );
};

export default DashboardThemesSection;
