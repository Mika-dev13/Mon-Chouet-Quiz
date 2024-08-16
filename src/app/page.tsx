import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import LandingSection from '@/components/LandingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className='lg:w-[1080px] mx-auto px-6 lg:px-0'>
        <Hero />
        <FeaturesSection />
        <LandingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
