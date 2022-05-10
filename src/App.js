import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from './globalStyles.js';
import Hero from './components/Hero/index.js';
import Products from './components/Products/';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer/index.js';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favorites" data={productData} />
      <Feature />
      <Products heading="Sweet Treats For You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
