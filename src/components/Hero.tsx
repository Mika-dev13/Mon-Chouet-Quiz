import { Button } from './ui/button';
import Image from 'next/image';
import chouette from '../../public/maitresse-chouette.webp';

const Hero = () => {
  return (
    <section className='relative bg-cyan-200 py-4 lg:py-10 w-full mt-6 lg:mt-16 rounded-md'>
      <h1 className='font-bold font-cursive text-center text-3xl uppercase lg:text-6xl '>
        Mon Chouet&apos; Quiz
      </h1>
      <div className='w-80 mx-auto lg:pl-24 lg:w-[592px] grid place-items-end lg:block '>
        <h2 className='lg:text-2xl lg:mt-8 mb-4 w-[280px] lg:w-full text-right lg:text-left'>
          Développe tes connaissances grâce à des quiz amusants et éducatifs !
        </h2>
        <Button className='lg:text-base w-fit'>Commencer</Button>
      </div>
      <Image
        src={chouette}
        alt='Maîtresse chouette'
        className='absolute top-16 lg:top-24 left-4 lg:left-16 -rotate-6 w-[80px] lg:w-[200px] drop-shadow-lg'
      />
    </section>
  );
};

export default Hero;
