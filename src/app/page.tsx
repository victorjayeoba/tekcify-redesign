import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from '@/components/Testimonials';
import Products from '@/components/Products';
import Technology from '@/components/Technology';
import Stats from '@/components/Stats';
import GetStarted from '@/components/GetStarted';
import SuccessStories from '@/components/SuccessStories';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Testimonials />
      <Products />
      <Technology />
      <Stats />
      <GetStarted />
      <SuccessStories />
      <FAQ />
      <Footer />
    </main>
  );
}
