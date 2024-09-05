import Link from 'next/link';

type Props = {
  title: string;
  number: number;
  href: string;
};

const DashboardCard = ({ title, number, href }: Props) => {
  const updatedTitle = number >= 2 ? `${title}s` : title;
  return (
    <Link href={href}>
      <article className='grid place-content-center text-center bg-violet-50 p-4 rounded-md h-24 hover:bg-violet-200 transition-colors'>
        <span className='font-semibold'>{number}</span>
        <p>{title === 'Quiz' ? title : updatedTitle}</p>
      </article>
    </Link>
  );
};

export default DashboardCard;
