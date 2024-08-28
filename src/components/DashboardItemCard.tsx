import { Pencil, Trash2 } from 'lucide-react';

type Props = {
  data: {
    id: string;
    title: string;
  };
};

const DashboardItemCard = ({ data }: Props) => {
  return (
    <div
      key={data.id}
      className='flex justify-between bg-violet-100 py-2 px-4 rounded-md'
    >
      <div>
        <h2>{data.title}</h2>
      </div>
      <div className='flex gap-4'>
        <button className='hover:bg-violet-200 transition-colors p-2 rounded-md'>
          <Pencil strokeWidth={1} />
        </button>
        <button className='hover:bg-violet-200 transition-colors p-2 rounded-md'>
          <Trash2 strokeWidth={1} color='red' />
        </button>
      </div>
    </div>
  );
};

export default DashboardItemCard;
