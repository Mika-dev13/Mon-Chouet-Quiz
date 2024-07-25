import { Button } from '@/components/ui/button';
import Image from 'next/image';
import chouette from '../../public/maitresse-chouette.webp';

export default function Home() {
  return (
    <main className='lg:w-[1080px] lg:mx-auto'>
      <section className='relative bg-cyan-200 py-4 lg:py-8 w-full mt-12'>
        <h1 className='font-bold font-cursive text-center text-3xl uppercase lg:text-6xl '>
          Mon Chouet&apos; Quiz
        </h1>
        <div className='w-80 mx-auto lg:pl-24 lg:w-[592px] grid place-items-end lg:block '>
          <h2 className='lg:text-2xl lg:mt-8 mb-4 w-[280px] lg:w-full text-right lg:text-left'>
            Des quiz amusants et éducatifs pour les petits explorateurs !
          </h2>
          <Button className='lg:text-lg w-fit'>Commencer</Button>
        </div>
        <Image
          src={chouette}
          alt=''
          className='absolute top-16 lg:top-24 left-6 lg:left-16 rotate-12 w-[90px] lg:w-[220px]'
        />
      </section>
    </main>
  );
}
