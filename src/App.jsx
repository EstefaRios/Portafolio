// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Proyectos />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;

