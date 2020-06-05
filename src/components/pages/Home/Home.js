import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const stuffId = 'monkeybutt67';
    this.props.history.push(`/mystuff/${stuffId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
      <button className="btn btn-success" onClick={this.editEvent}>Edit a thing</button>
      <Link to='/new'>New Stuff</Link>
      </div>
    );
  }
}

export default Home;
