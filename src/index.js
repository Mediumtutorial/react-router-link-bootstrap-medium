import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'
import Service from './components/service'
import About from './components/about'

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


