import React from 'react';
import './App.css';
import { Route } from 'react-router';
import { AddCardForm } from './pages/addCardForm';
import { AddCardResult } from './pages/addCardResult';
import { CardList } from './pages/cardList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route path="/" exact={true} component={CardList} />
      <Route path="/add" component={AddCardForm} />
      <Route path="/addResult" component={AddCardResult} />
    </div>
  );
};

export default App;
