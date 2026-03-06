import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { About } from '@/sections/About';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
