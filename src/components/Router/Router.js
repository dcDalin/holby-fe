import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from '../../containers/About';
import Blog from '../../containers/Blog';
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Portfolio from '../../containers/Portfolio';
import Products from '../../containers/Products';
import Store from '../../containers/Store';
import Header from '../Header';

const RouterComponent = () => {
  return (
    <Router>
      <>
        <Header />

        <Route path="/" exact component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/login" component={Login} />
      </>
    </Router>
  );
};

export default RouterComponent;
