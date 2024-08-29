import { QuizWithThemeAndLevel, Theme } from '@/utils/type';
import { Pencil, Trash2 } from 'lucide-react';

type Props = {
  data: QuizWithThemeAndLevel | any;
};

const DashboardItemCard = ({ data }: Props) => {
  return (
    <div
      key={data.id}
      className='flex justify-between items-center bg-violet-100 py-2 px-4 rounded-md'
    >
      <div>
        <h2>{data.title}</h2>
        {data.level && <span className='text-xs'>{data.level.level}</span>}
      </div>
      <div className='flex gap-4'>
        <button
          className='hover:bg-violet-200 transition-colors p-2 rounded-md'
          aria-label='Modifier'
        >
          <Pencil strokeWidth={1} />
        </button>
        <button
          className='hover:bg-violet-200 transition-colors p-2 rounded-md'
          aria-label='Supprimer'
        >
          <Trash2 strokeWidth={1} color='#6d28d9' />
        </button>
      </div>
    </div>
  );
};

export default DashboardItemCard;
