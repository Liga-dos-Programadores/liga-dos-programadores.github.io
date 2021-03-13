import React from 'react';

import Container from '@components/Container';
import Navbar from '@components/Header/Navbar';
import Footer from '@components/Footer';
import Hero from './components/Hero';
import Community from './components/Community';
import Projects from './components/Projects';
import Team from './components/Team';

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <Community />
        <Projects />
        <Team />
      </Container>
      <Footer />
    </>
  );
}
