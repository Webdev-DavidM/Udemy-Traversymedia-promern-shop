import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './components/ProductScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/' component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
