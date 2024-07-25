import { Button } from '@/components/ui/button';
import Image from 'next/image';
import chouette from '../../public/maitresse-chouette.webp';
import { CardHeader, Card, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import pomme from '../../public/pomme.svg';
import globe from '../../public/globe.svg';
import jeu from '../../public/jeu.svg';
import maitreChouette from '../../public/maitre-chouette.png';
import star from '../../public/star.svg';

export default function Home() {
  return (
    <main className='lg:w-[1080px] lg:mx-auto'>
      <section className='relative bg-cyan-200 py-4 lg:py-8 w-full mt-12 rounded-md'>
        <h1 className='font-bold font-cursive text-center text-3xl uppercase lg:text-6xl '>
          Mon Chouet&apos; Quiz
        </h1>
        <div className='w-80 mx-auto lg:pl-24 lg:w-[592px] grid place-items-end lg:block '>
          <h2 className='lg:text-2xl lg:mt-8 mb-4 w-[280px] lg:w-full text-right lg:text-left'>
            Des quiz amusants et éducatifs pour les petits explorateurs !
          </h2>
          <Button className='lg:text-base w-fit'>Commencer</Button>
        </div>
        <Image
          src={chouette}
          alt=''
          className='absolute top-16 lg:top-24 left-6 lg:left-16 rotate-6 w-[90px] lg:w-[200px]'
        />
      </section>
      <section className='mt-36'>
        <h2 className='lg:text-2xl font-semibold text-center mb-12'>
          Avec Mon Chouet’ Quiz, chaque enfant peut explorer des sujets
          passionnants de manière interactive et amusante.
        </h2>
        <div className='grid grid-cols-3 gap-6'>
          <article className='bg-amber-200 rounded-md py-6 px-3 grid place-items-center relative'>
            <div className='before:block before:absolute before:bg-amber-500 before:inset-0 before:rounded-md before:-z-10 before:translate-x-2 before:translate-y-2'></div>
            <Image src={pomme} alt='' width={50} />
            <h2 className='font-semibold mt-9 mb-4'>Des quiz enrichissants</h2>
            <div className='text-center'>
              Des quiz sur des sujets originaux et passionnants adaptés à tous
              les âges.
            </div>
          </article>
          <article className='bg-rose-200 rounded-md py-6 px-3 grid place-items-center relative'>
            <div className='before:block before:absolute before:bg-rose-400 before:inset-0 before:rounded-md before:-z-10 before:translate-x-2 before:translate-y-2'></div>
            <Image src={globe} alt='' width={50} />
            <h2 className='font-semibold mt-9 mb-4'>
              Des interfaces attrayantes
            </h2>
            <div className='text-center'>
              Un design joyeux et intuitif, facile à utiliser par les petits
              doigts.
            </div>
          </article>
          <article className='bg-violet-200 rounded-md py-6 px-3 grid place-items-center relative'>
            <div className='before:block before:absolute before:bg-violet-500 before:inset-0 before:rounded-md before:-z-10 before:translate-x-2 before:translate-y-2'></div>
            <Image src={jeu} alt='' width={50} />
            <h2 className='font-semibold mt-9 mb-4'>
              Un apprentissage intéractif
            </h2>
            <div className='text-center'>
              Des activités interactives qui rendent chaque leçon captivante et
              rigolote.
            </div>
          </article>
        </div>
      </section>
      <section className='text-center my-36'>
        <h2 className='lg:text-4xl text-amber-600 font-semibold mb-12'>
          Créez vos propres quiz
        </h2>
        <p className='text-xl max-w-4xl mx-auto leading-9'>
          Libérez la{' '}
          <strong>
            <i>créativité de vos enfants</i>
          </strong>{' '}
          créativité de vos enfants en leur permettant de créer leurs propres
          quiz. Avec Mon Chouet’ Quiz, ils peuvent{' '}
          <strong>
            <i>concevoir des questions amusantes et instructives</i>
          </strong>{' '}
          concevoir des questions amusantes et instructives pour partager leurs
          connaissances et défier leurs amis. L&apos;apprentissage devient
          encore plus{' '}
          <strong>
            <i>engageant et interactif !</i>
          </strong>
        </p>
      </section>
      <section className='bg-teal-700 h-72 flex items-center relative'>
        <h2 className='font-cursive text-3xl text-white text-center max-w-2xl'>
          Offrez à vos enfants un outil éducatif{' '}
          <span className='text-amber-400'>captivant</span> et{' '}
          <span className='text-rose-400'>amusant</span>.
        </h2>
        <Image
          src={maitreChouette}
          alt=''
          className='absolute right-0 lg:w-96 rotate-6'
        />
      </section>
      <section className='my-36'>
        <h2 className='text-center lg:text-2xl font-semibold mb-12'>
          La vérité sort de la bouche des enfants{' '}
        </h2>
        <div className='grid grid-cols-3 gap-6'>
          <div className='bg-sky-700 text-white font-medium p-6 rounded-md border-2 border-neutral-900'>
            <figure className='max-w-screen-md text-center grid place-items-center'>
              <div className='flex items-center gap-2 mb-4 text-yellow-300'>
                <Image src={star} alt='étoile' />
                <Image src={star} alt='étoile' />
                <Image src={star} alt='étoile' />
                <Image src={star} alt='étoile' />
                <Image src={star} alt='étoile' />
              </div>
              <blockquote>
                <p className='font-medium text-white'>
                  &quot;Les quiz sont vraiment géniaux et j&apos;aime beaucoup
                  les images colorées. &quot;
                </p>
              </blockquote>
              <figcaption className='flex items-center mt-6 space-x-3 rtl:space-x-reverse'>
                <div className='flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700'>
                  <cite className='pe-3 font-medium text-white'>
                    Hugo, 7 ans
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className='bg-violet-700 text-white font-medium p-6 rounded-md border-2 border-neutral-900'>
            <figure className='max-w-screen-md text-center grid place-items-center'>
              <div className='flex items-center mb-4 text-yellow-300'>
                <div className='flex items-center gap-2 mb-4 text-yellow-300'>
                  <Image src={star} alt='étoile' />
                  <Image src={star} alt='étoile' />
                  <Image src={star} alt='étoile' />
                  <Image src={star} alt='étoile' />
                  <Image src={star} alt='étoile' />
                </div>
              </div>
              <blockquote>
                <p className='font-medium text-white'>
                  &quot;Mon Chouet’ Quiz est super ! J&apos;ai appris plein de
                  choses tout en m&apos;amusant.&quot;
                </p>
              </blockquote>
              <figcaption className='flex items-center mt-6 space-x-3 rtl:space-x-reverse'>
                <div className='flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700'>
                  <cite className='pe-3 font-medium text-white'>
                    Léa, 8 ans
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className='bg-amber-700 text-white font-medium p-6 rounded-md border-2 border-neutral-900'>
            <figure className='max-w-screen-md text-center grid place-items-center'>
              <div className='flex items-center mb-4 text-yellow-300'>
                <div className='flex items-center gap-2 mb-4 text-yellow-300'>
                  <Image src={star} alt='étoile' />
                  <Image src={star} alt='étoile' />
                  <Image src={star} alt='étoile' />
                  <Image src={star} alt='étoile' />
                  <Image src={star} alt='étoile' />
                </div>
              </div>
              <blockquote>
                <p className='font-medium text-white'>
                  &quot;C&apos;est comme jouer à un jeu mais en apprenant plein
                  de nouvelles choses.&quot;
                </p>
              </blockquote>
              <figcaption className='flex items-center mt-6 space-x-3 rtl:space-x-reverse'>
                <div className='flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700'>
                  <cite className='pe-3 font-medium text-white'>
                    Emma, 9 ans
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
