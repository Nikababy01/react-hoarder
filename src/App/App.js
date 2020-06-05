import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import Auth from '../components/pages/Auth/Auth';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <Auth />
        <button className="btn btn-info">React Hoarder</button>
      </div>
    );
  }
}

export default App;
