import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Select from './components/Select';
import Category from './components/Category';
//import axios from 'axios';


// axios.get('/api/test')
//   .then(function (response) {
//     console.log(response);

//     const data = response.data.map((item) => {
//       return (<div key={item.name}>{item.name}</div>);
//     });

//     class App extends React.Component{
//       render(){
//         return(<div>{data}</div>);
//       }
//     }

//     const rootEl = document.getElementById('root');
//     ReactDOM.render(<App />, rootEl);
//   });

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