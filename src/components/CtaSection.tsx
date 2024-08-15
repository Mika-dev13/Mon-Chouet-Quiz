import { Button } from './ui/button';
import Image from 'next/image';
import foret from '../../public/foret.webp';

const CtaSection = () => {
  return (
    <section className='rounded-md relative overflow-hidden grid grid-cols-2 gap-4 bg-teal-100'>
      <Image
        src={foret}
        alt='forêt'
        className='rounded-md w-full lg:min-h-88 object-cover'
      />
      <div className='flex flex-col items-center justify-center px-8'>
        <h2 className='text-xl mb-8 font-semibold text-center'>
          Inscris-toi{' '}
          <span className='text-rose-500 font-bold'>gratuitement</span> sans
          plus tarder petit aventurier et pars à la découverte de nouvelles
          connaissances !
        </h2>

        <Button className='uppercase'>à l&apos;aventure !</Button>
      </div>
    </section>
  );
};

export default CtaSection;
