import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
