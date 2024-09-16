import { getLevels } from '@/data-access/level';
import { getThemeTitleByUserId } from '@/data-access/themes.dal';
import CreateQuizForm from '@/forms/CreateQuizForm';

const CreateQuizPage = async () => {
  const themes = await getThemeTitleByUserId();
  const levels = await getLevels();
  return (
    <main>
      <h2 className='font-medium text-lg mb-4'>Créez votre quiz</h2>
      <div className='w-3/5'>
        <CreateQuizForm themes={themes} levels={levels} />
      </div>
    </main>
  );
};

export default CreateQuizPage;
