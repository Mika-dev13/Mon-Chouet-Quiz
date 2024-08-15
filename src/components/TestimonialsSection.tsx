import TestimonyCard from './TestimonyCard';

const TestimonialsSection = () => {
  return (
    <section className='my-36'>
      <h2 className='text-center lg:text-2xl font-semibold mb-16'>
        La vérité sort de la bouche des enfants{' '}
      </h2>
      <div className='grid grid-cols-3 gap-6'>
        <TestimonyCard
          content='" Les quiz sont vraiment géniaux et j&apos;aime beaucoup les images colorées. "'
          name='Hugo, 7 ans'
          bgColor='bg-sky-100'
        />
        <TestimonyCard
          content='" Mon Chouet’ Quiz est super ! J&apos;ai appris plein de choses tout en m&apos;amusant. "'
          name='Léa, 8 ans'
          bgColor='bg-violet-100'
        />
        <TestimonyCard
          content='" C&apos;est comme jouer à un jeu mais en apprenant plein de nouvelles choses. "'
          name='Emma, 9 ans'
          bgColor='bg-orange-100'
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
