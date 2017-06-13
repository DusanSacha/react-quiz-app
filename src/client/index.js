import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Select from './components/Select';
import Category from './components/Category';
import './styles/styles.css';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Select} />
        <Route path='/category/:id' component={Category} />
      </Switch>
    </BrowserRouter>
  );
};

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);