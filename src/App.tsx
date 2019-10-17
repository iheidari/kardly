import React from 'react';
import { hot } from 'react-hot-loader/root';
import Container from 'src/components/layout/Container';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import Add from 'src/components/Kard/Add';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Add />
      </Container>
      <Footer />
    </>
  );
}

export default hot(App);
