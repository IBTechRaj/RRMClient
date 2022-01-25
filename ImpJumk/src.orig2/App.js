// https://www.youtube.com/watch?v=3nLTB_E6XAM
// also look at these from rails/react project
// https://www.youtube.com/watch?v=PV9FqNEI-go&list=PLgYiyoyNPrv_yNp5Pzsx0A3gQ8-tfg66j&index=10
// https://github.com/jordanhudgens/react-auth-app

import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
