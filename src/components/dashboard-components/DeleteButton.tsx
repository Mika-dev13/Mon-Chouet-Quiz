'use client';

import { deleteTheme } from '@/data-access/themes';
import { Trash2 } from 'lucide-react';

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <button
      onClick={async () => await deleteTheme(id)}
      className='hover:bg-violet-200 transition-colors p-2 rounded-md'
      aria-label='Supprimer'
    >
      <Trash2 strokeWidth={1} color='#6d28d9' />
    </button>
  );
};

export default DeleteButton;
