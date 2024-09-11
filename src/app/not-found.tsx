import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='grid place-content-center place-items-center h-screen lg:w-[1080px] mx-auto px-6 lg:px-0'>
      <h2 className='text-3xl mb-4'>
        <span>🫢</span>Oups !
      </h2>
      <p className='text-lg mb-6'>
        Nous ne pouvons donner suite à votre demande.
      </p>
      <Link href='/' className='hover:text-violet-600 transition-colors'>
        <span className='text-3xl animate-ping'>🔙</span> To the page
        d&apos;accueil
      </Link>
    </main>
  );
}
