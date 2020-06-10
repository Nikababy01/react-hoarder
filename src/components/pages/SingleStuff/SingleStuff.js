import React from 'react';

import './SingleStuff.scss';
import itemsData from '../../../helpers/data/itemsData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemsData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get single item: ', err));
  }

  removeItem = () => {
    const { itemId } = this.props.match.params;
    itemsData.deleteItem(itemId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to delete item', err));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleStuff">
        <h1>{item.itemName}</h1>
        <button className="btn btn-danger" onClick={this.removeItem}><i className="fas fa-trash-alt"></i></button>
    <p>Details:{item.itemDescription}</p>
          </div>
    );
  }
}

export default SingleStuff;
