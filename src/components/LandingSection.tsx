import Image from 'next/image';
import maitreChouette from '../../public/maitre-chouette.png';

const LandingSection = () => {
  return (
    <>
      <section className='text-center my-8 lg:my-36'>
        <h2 className='text-lg lg:text-4xl text-amber-600 font-semibold mb-8 lg:mb-16'>
          Créez vos propres quiz
        </h2>
        <p className='text-base lg:text-xl max-w-4xl mx-auto lg:leading-9'>
          Libérez la{' '}
          <strong>
            <i>créativité de vos enfants</i>
          </strong>{' '}
          en leur permettant de créer leurs propres quiz. Avec Mon Chouet’ Quiz,
          ils peuvent{' '}
          <strong>
            <i>concevoir des questions amusantes et instructives</i>
          </strong>{' '}
          pour partager leurs connaissances et défier leurs amis.
          L&apos;apprentissage devient encore plus{' '}
          <strong>
            <i>engageant et interactif !</i>
          </strong>
        </p>
      </section>
      <section className='bg-teal-600 h-36 lg:h-72 flex items-center lg:justify-center relative rounded-md'>
        <h2 className='font-cursive text-xl lg:text-5xl text-white lg:text-center w-64 lg:w-[600px] ml-6 lg:ml-0'>
          Offrez à vos enfants un outil éducatif{' '}
          <span className='text-amber-400'>captivant</span> et{' '}
          <span className='text-rose-400'>amusant</span>.
        </h2>
        <Image
          src={maitreChouette}
          alt='Maître chouette'
          className='absolute top-16 -right-2 lg:right-0 w-32 lg:w-96 rotate-6 drop-shadow-lg'
        />
      </section>
    </>
  );
};

export default LandingSection;
