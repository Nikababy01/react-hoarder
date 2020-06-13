import React from 'react';
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

  removeItem =(itemId) => {
    itemsData.deleteItem(itemId)
      .then(() => this.getItems())
      .catch((err) => console.error('unable to delete items: ', err));
  }

  render() {
    const { items } = this.state;
    const buildItemCards = items.map((item) => (
      <HoarderCard key={item.id} item={item} removeItem={this.removeItem}/>
    ));
    return (
      <div className="Home">
        <h1>MyStuff</h1>
        <div className="d-flex flex-wrap">
          {buildItemCards}
       </div>
      </div>
    );
  }
}

export default Home;
