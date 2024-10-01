import { getThemeById } from '@/data-access/themes.dal';
import UpdateThemeForm from '@/forms/UpdateThemeForm';

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const { id } = params;
  const theme = await getThemeById(id);

  if (!theme) return;

  return (
    <main>
      <h1 className='mb-4 font-semibold'>Mettre à jour le thème</h1>
      <UpdateThemeForm theme={theme} />
    </main>
  );
};

export default page;
