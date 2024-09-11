'use client';

import { deleteThemeService } from '@/services/themes.services';
import { Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className='hover:bg-violet-200 transition-colors p-2 rounded-md'
          aria-label='Supprimer'
        >
          <Trash2 strokeWidth={1} color='#6d28d9' />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Es-tu sûr de vouloir supprimer ?</AlertDialogTitle>
          <AlertDialogDescription>
            Cette action est irréversible. Es-tu certain de vouloir continuer ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              await deleteThemeService(id);
              window.location.reload();
            }}
          >
            Supprimer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
