import React from 'react';

import Container from '@components/Container';
import Navbar from '@components/Header/Navbar';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <Footer />
    </>
  );
}
