import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg  bg-dark">
          <a className="navbar-brand" href="#n">React Hoarder</a>
          <div className="collapse navbar-collapse" id="n">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {
                authed
                  ? <button className="btn btn-danger nav-link" onClick={this.logMeOut}>Log Out</button>
                  : ''
              }
            </li>
         </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default MyNavbar;
