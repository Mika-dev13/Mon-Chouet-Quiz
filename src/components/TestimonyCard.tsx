import Image from 'next/image';
import star from '../../public/star.svg';

type Props = {
  name: string;
  content: string;
  bgColor: string;
};

const TestimonyCard = ({ content, name, bgColor }: Props) => {
  return (
    <div className={`${bgColor} font-medium p-6 rounded-md `}>
      <figure className='max-w-screen-md text-center grid place-items-center'>
        <div className='flex items-center gap-2 mb-4'>
          <Image src={star} alt='étoile' />
          <Image src={star} alt='étoile' />
          <Image src={star} alt='étoile' />
          <Image src={star} alt='étoile' />
          <Image src={star} alt='étoile' />
        </div>
        <blockquote>
          <p className='font-medium'>{content}</p>
        </blockquote>
        <figcaption className='flex items-center mt-6 space-x-3 rtl:space-x-reverse'>
          <div className='flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-900'>
            <cite className='pe-3 font-medium text-sm'>{name}</cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonyCard;
