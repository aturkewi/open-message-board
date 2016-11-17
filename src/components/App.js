import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/" onlyActiveOnIndex={true}>Go Home</Link> | 
          <Link to="/channels">Channels</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
