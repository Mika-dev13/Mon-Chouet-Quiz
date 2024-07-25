import Image from 'next/image';
import logo from '../../public/logo.svg';
import MenuMobile from './NavMobile';
import MainNav from './MainNav';

const Header = () => {
  return (
    <header className='flex justify-between lg:w-[1080px] lg:mx-auto pt-6 px-4 lg:px-0'>
      <Image src={logo} alt='logo' width={50} height={100} />
      <MainNav />
      <MenuMobile />
    </header>
  );
};

export default Header;
