import React from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header/NavBar';
import Footer from '../../components/Footer';
import Hero from './components/Hero';
import Comunity from './components/Comunity';

export default function Home() {
  return (
    <>
    <Container>
      <Header />
      <Hero />
      <Comunity />
    </Container>
    <Footer />
    </>
  );
}