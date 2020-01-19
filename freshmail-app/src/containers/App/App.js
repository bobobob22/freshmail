import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithWrapper from 'utils/RouteWithWrapper';

import BodyWrapper from 'containers/BodyWrapper';
import HomePage from 'containers/HomePage';
import AddComment from 'containers/AddComment';
import WishListComments from 'containers/WishListComments';


const App = () => (
  <Router>
    <Switch>
      <RouteWithWrapper stict exact path="/" component={HomePage} wrapper={BodyWrapper} />
      <RouteWithWrapper path="/add-comment" component={AddComment} wrapper={BodyWrapper} />
      <RouteWithWrapper path="/wishlist-comments" component={WishListComments} wrapper={BodyWrapper} />
    </Switch>
  </Router>
);

export default App;

//Todo -> Sprawdzenie formuka
//Todo -> Sprawdzenie styled components
//Todo sprawdzenie zbednych paczek
//Todo w nawigacji chyba nie jest potrzebny props
//Todo -> eslint
//Todo -> testy
//Todo wyglad, responsywnosc