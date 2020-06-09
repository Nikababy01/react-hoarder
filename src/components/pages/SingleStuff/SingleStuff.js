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

  render() {
    const { item } = this.state;
    return (
      <div className="SingleStuff">
        <h1>{item.itemName}</h1>
    <p>Details:{item.itemDescription}</p>
          </div>
    );
  }
}

export default SingleStuff;
