import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from '../../containers/About';
import Home from '../../containers/Home';
import Products from '../../containers/Products';
import Header from '../Header';

const RouterComponent = () => {
  return (
    <Router>
      <>
        <Header />

        <Route path="/" exact component={Home} />
        <Route exaxt path="/about" component={AboutUs} />
        <Route exaxt path="/products" component={Products} />
      </>
    </Router>
  );
};

export default RouterComponent;
