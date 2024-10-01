import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.svg';

type ThemeCardProps = {
  title: string;
  image?: string;
  href?: string;
  bgColor?: string;
};

const ThemeCard = ({ title, image, href, bgColor }: ThemeCardProps) => {
  return (
    <Link href={href ?? ''}>
      <div
        className='flex flex-col items-center justify-center gap-4 h-56 rounded-md mb-4 lg:mb-0 cursor-pointer'
        style={{ backgroundColor: bgColor }}
      >
        <Image src={image ? image : logo} alt={title} width={50} height={50} />
        <h1 className='font-semibold'>{title}</h1>
      </div>
    </Link>
  );
};

export default ThemeCard;
