import React from 'react';


import './HoarderCard.scss';
import itemShape from '../../../helpers/data/propz/itemShape';

class HoarderCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    return (
      <div className="HoarderCard col-3">
        <div className="card">
          <div className="card-body">
        <h5 className="card-title">{ item.itemName }</h5>
      </div>
      </div>
      </div>
    );
  }
}

export default HoarderCard;
