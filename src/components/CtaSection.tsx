import { Button } from './ui/button';
import Image from 'next/image';
import foret from '../../public/foret.webp';

const CtaSection = () => {
  return (
    <section className=''>
      <h2 className='text-center lg:text-2xl font-semibold mb-16'>
        Prêt pour l&apos;aventure ?{' '}
      </h2>
      <div className='lg:grid grid-cols-2 gap-4 pb-8 lg:pb-0 bg-cyan-100 rounded-md overflow-hidden'>
        <Image
          src={foret}
          alt='forêt'
          className='w-full lg:max-h-96 h-60 object-cover mb-8 lg:mb-0'
        />
        <div className='flex flex-col items-center justify-center px-6 lg:px-9'>
          <p className='lg:text-xl mb-4 lg:mb-8 text-center'>
            Inscris-toi{' '}
            <span className='text-rose-500 font-bold'>gratuitement</span> sans
            plus tarder petit aventurier et pars à la découverte de nouvelles
            connaissances !
          </p>

          <Button>À l&apos;aventure !</Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
