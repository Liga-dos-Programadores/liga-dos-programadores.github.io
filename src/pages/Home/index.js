import React from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header/NavBar';
import Footer from '../../components/Footer';
import Hero from './components/Hero';
import Comunity from './components/Comunity';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
    <Container>
      <Header />
      <Hero />
      <Comunity />
      <Projects />
    </Container>
    <Footer />
    </>
  );
}