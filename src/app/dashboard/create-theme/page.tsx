import CreateThemeForm from '@/forms/CreateThemeForm';

const CreateThemePage = () => {
  return (
    <main>
      <h2 className='font-medium text-lg mb-4'>Créez votre thème</h2>
      <div className='w-3/5'>
        <CreateThemeForm />
      </div>
    </main>
  );
};

export default CreateThemePage;
