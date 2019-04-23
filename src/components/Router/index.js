import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AboutUs from '../../containers/About';
import Home from '../../containers/Home';
import Products from '../../containers/Products';

const Nav = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About Us</Link>
            </li>
            <li>
              <Link to="/products/">Products</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route exaxt path="/about" component={AboutUs} />
        <Route exaxt path="/products" component={Products} />
      </div>
    </Router>
  );
};

export default Nav;
