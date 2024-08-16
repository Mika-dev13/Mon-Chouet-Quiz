import FeatureCard from './FeatureCard';
import pomme from '../../public/pomme.svg';
import globe from '../../public/globe.svg';
import jeu from '../../public/jeu.svg';

const FeaturesSection = () => {
  return (
    <section className='mt-8 lg:mt-36'>
      <h2 className='text-md lg:text-2xl font-semibold text-center mb-6 lg:mb-16'>
        Avec Mon Chouet’ Quiz, chaque enfant peut explorer des sujets
        passionnants de manière interactive et amusante.
      </h2>
      <div className='lg:grid grid-cols-3 gap-6 lg:h-72 space-y-4 lg:space-y-0'>
        <FeatureCard
          title='Des quiz enrichissants'
          description='Des quiz sur des sujets originaux et passionnants adaptés à tous les âges.'
          icon={pomme}
          borderColor='bg-yellow-300'
          bgColor='bg-yellow-100'
        />
        <FeatureCard
          title='Des interfaces attrayantes'
          description='Un design joyeux et intuitif, facile à utiliser par les petits doigts.'
          icon={globe}
          borderColor='bg-rose-300'
          bgColor='bg-rose-100'
        />
        <FeatureCard
          title='Un apprentissage intéractif'
          description='Des activités interactives qui rendent chaque leçon captivante et rigolote.'
          icon={jeu}
          borderColor='bg-violet-300'
          bgColor='bg-violet-100'
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
