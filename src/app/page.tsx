import Image from 'next/image';
import maitreChouette from '../../public/maitre-chouette.png';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  return (
    <main className='lg:w-[1080px] lg:mx-auto'>
      <Hero />
      <FeaturesSection />
      <section className='text-center my-36'>
        <h2 className='lg:text-4xl text-amber-600 font-semibold mb-16'>
          Créez vos propres quiz
        </h2>
        <p className='text-xl max-w-4xl mx-auto leading-9'>
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
      <section className='bg-teal-700 h-72 flex items-center relative rounded-md'>
        <h2 className='font-cursive text-3xl text-white text-center max-w-2xl'>
          Offrez à vos enfants un outil éducatif{' '}
          <span className='text-amber-400'>captivant</span> et{' '}
          <span className='text-rose-400'>amusant</span>.
        </h2>
        <Image
          src={maitreChouette}
          alt=''
          className='absolute right-0 lg:w-96 rotate-6 drop-shadow-lg'
        />
      </section>
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
