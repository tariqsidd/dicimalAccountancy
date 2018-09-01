import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <div style={{marginTop: '51px'}}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
