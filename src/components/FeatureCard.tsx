import Image from 'next/image';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  borderColor: string;
};

const FeatureCard = ({
  title,
  description,
  icon,
  bgColor,
}: FeatureCardProps) => {
  return (
    <article
      className={`${bgColor} rounded-md py-10 px-3 flex flex-col items-center relative`}
    >
      <Image src={icon} alt='' width={50} />
      <h2 className='font-semibold mb-3 mt-4'>{title}</h2>
      <div className='text-center text-sm lg:text-base'>{description}</div>
      {/* <div
        className={`before:block before:absolute before:${borderColor} before:inset-0 before:rounded-md before:-z-10 before:translate-x-2 before:translate-y-2`}
      ></div> */}
    </article>
  );
};

export default FeatureCard;
