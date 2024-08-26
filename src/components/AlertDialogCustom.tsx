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
import { StopCircle } from 'lucide-react';

type AlertDialogCustomProps = {
  resetTimer: () => void;
};

const AlertDialogCustom = ({ resetTimer }: AlertDialogCustomProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className='bg-lime-100 p-1 rounded-md'>
          <StopCircle size='36' color='#65a30d' strokeWidth={1} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Es-tu sûr de vouloir arrêter ?</AlertDialogTitle>
          <AlertDialogDescription>
            Si tu arrêtes le quiz maintenant, il sera remis à zéro.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={resetTimer}>Continuer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogCustom;
