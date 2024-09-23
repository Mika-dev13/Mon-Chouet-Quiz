import { Pencil } from 'lucide-react';
import DeleteButton from './DeleteButton';

type Props = {
  data: {
    title: string;
    id: string;
    level?: { level: string };
    theme?: { title: string };
  };
};

const DashboardItemCard = ({ data }: Props) => {
  return (
    <div className='flex justify-between items-center bg-violet-100 py-2 px-4 rounded-md'>
      <div>
        <h2 className='font-medium'>{data.title}</h2>
        {data.theme && (
          <span className='text-xs'>Thème : {data.theme.title} | </span>
        )}
        {data.level && (
          <span className='text-xs'>Niveau : {data.level.level}</span>
        )}
      </div>
      <div className='flex gap-4'>
        <button
          className='hover:bg-violet-200 transition-colors p-2 rounded-md'
          aria-label='Modifier'
        >
          <Pencil strokeWidth={1} />
        </button>
        <DeleteButton id={data.id} />
      </div>
    </div>
  );
};

export default DashboardItemCard;
