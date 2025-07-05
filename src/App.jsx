import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
