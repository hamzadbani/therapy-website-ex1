
import Navbar from './components/Navbar';
import TopBanner from './components/TopBanner';
import Hero from './sections/Hero';
import Certifications from './sections/Certifications';
import Services from './sections/Services';
import Process from './sections/Process';
import FAQ from './sections/FAQ';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <Certifications />
        <Services />
        <Process />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
