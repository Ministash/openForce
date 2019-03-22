import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import MainPage from '../src/components/mainPage/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <MainPage />} />
        </div>
      </Router>
    );
  }
}

export default App;
