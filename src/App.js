import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home_86 from './pages/Home_86';
import About_86 from './pages/About_86';
import SingleCocktail_86 from './pages/SingleCocktail_86';
import Error_86 from './pages/Error_86';
import Navbar_86 from './components/Navbar_86';

function App() {
  return (
    <Router>
      <Navbar_86 />
      <Switch>
        <Route exact path='/'>
          <Home_86 />
        </Route>
        <Route path='/about'>
          <About_86 />
        </Route>
        <Route path='/cocktail/:id'>
          <SingleCocktail_86 />
        </Route>
        <Route path='*'>
          <Error_86 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
