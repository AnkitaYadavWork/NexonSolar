// App.tsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Calculator from './components/Calculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Calculator />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;