import React from 'react';
import { Link } from 'react-router-dom';
import HoarderCard from '../../shared/HoarderCard/HoarderCard';
import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';
import './Home.scss';

class Home extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    const uid = authData.getUid();
    itemsData.getItemsByUid(uid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('unable to get items: ', err));
  }

  componentDidMount() {
    this.getItems();
  }

  editEvent = (e) => {
    e.preventDefault();
    const stuffId = 'monkeybutt67';
    this.props.history.push(`/mystuff/${stuffId}`);
  }

  render() {
    const { items } = this.state;
    const buildItemCards = items.map((item) => (
      <HoarderCard key={item.id} item={item}/>
    ));
    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="d-flex flex-wrap">
          {buildItemCards}
      <button className="btn btn-success" onClick={this.editEvent}>Edit a thing</button>
      <button className="btn btn-success" onClick={this.editEvent}>My Stuff</button>
      <Link to='/new'>New Stuff</Link>
      </div>
      </div>
    );
  }
}

export default Home;
