import React from 'react';
import { Link } from 'react-router-dom';

import './HoarderCard.scss';
import itemShape from '../../../helpers/data/propz/itemShape';

class HoarderCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    const singleLink = `/singlestuff/${item.id}`;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="HoarderCard col-3">
        <div className="card">
          <div className="card-body">
        <h5 className="card-title">{ item.itemName }</h5>
        <img className="card-img-top" src={item.itemImage} alt="item"/>
        <Link className="btn btn-info" to={singleLink}><i className="fas fa-binoculars"></i></Link>
        <Link className="btn btn-warning" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
      </div>
      </div>
      </div>
    );
  }
}

export default HoarderCard;
