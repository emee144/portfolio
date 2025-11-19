import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';
import BackToTop from './components/BackToTop.jsx';
import {motion} from 'framer-motion';
import WhatsAppFloat from './components/WhatsappFloat.jsx';

function App() {
  
  return (
    <div className="App">
      
      <Navbar />
      <main>
      <section id="home">
        <motion.div
          i  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}>
        <Home />
        </motion.div>
      </section>
     <section id="about">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}>
        <About />
        </motion.div>
      </section>
      <section id="skills">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}>
        <Skills />
        </motion.div>
      </section>
     <section id="projects">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >
        <Projects />
        </motion.div>
      </section>
      <section id="contact">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}>
        <Contact />
        </motion.div>
      </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
export default App;