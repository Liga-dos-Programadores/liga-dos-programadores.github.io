import React from 'react';

import Container from '@components/Container';
import Navbar from '@components/Header/Navbar';
import Footer from '@components/Footer';
import Hero from './components/Hero';
import Comunity from './components/Comunity';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <Comunity />
        <Projects />
      </Container>
      <Footer />
    </>
  );
}
