import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Growth from './components/Growth'; // Philosophy
import Ebook from './components/Ebook';
import Work from './components/Work';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-brand-accent selection:text-dark-900">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Growth />
        <Ebook />
        <Work />
        <Services />
        <WhyChooseUs />
        <Team />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;