import { Button } from './ui/button';
import Image from 'next/image';
import foret from '../../public/foret.webp';

const CtaSection = () => {
  return (
    <section className=''>
      <h2 className='text-center lg:text-2xl font-semibold mb-16'>
        Prêt pour l&apos;aventure ?{' '}
      </h2>
      <div className='grid grid-cols-2 gap-4 bg-cyan-100 rounded-md overflow-hidden'>
        <Image
          src={foret}
          alt='forêt'
          className='w-full lg:max-h-96 object-cover'
        />
        <div className='flex flex-col items-center justify-center px-9'>
          <p className='text-xl mb-8 text-center'>
            Inscris-toi{' '}
            <span className='text-rose-500 font-bold'>gratuitement</span> sans
            plus tarder petit aventurier et pars à la découverte de nouvelles
            connaissances !
          </p>

          <Button className='uppercase'>à l&apos;aventure !</Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
