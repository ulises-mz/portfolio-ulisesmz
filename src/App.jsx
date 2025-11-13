import Background from './components/effects/Background';
import CustomCursor from './components/effects/CustomCursor';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden w-full">
      {/* Background effects */}
      <Background />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Main content */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
