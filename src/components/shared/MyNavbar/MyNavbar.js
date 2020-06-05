import React from 'react';
import './MyNavbar.scss';
import Home;
import New;
import My Stuff;
import firebase from 'firebase/app';

class MyNavbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="MyNavbar">
      <h1>My Navbar</h1>
      <button className="btn btn-danger" onClick={this.logMeOut}>Logout</button>
      </div>

    );
  }
}

export default MyNavbar;
