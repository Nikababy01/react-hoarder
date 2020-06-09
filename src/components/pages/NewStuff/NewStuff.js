import React from 'react';

import './NewStuff.scss';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';

class NewStuff extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  saveItem = (e) => {
    e.preventDefault();
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    const newItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };
    itemsData.postItem(newItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to save item:', err));
  }

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    return (
      <div className="NewStuff col-12">
        <h1>New Stuff</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="item-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={itemName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Enter Image</label>
            <input
              type="text"
              className="form-control"
              id="item-image"
              value={itemImage}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Enter Description</label>
            <input
              type="text"
              className="form-control"
              id="item-description"
              value={itemDescription}
              onChange={this.descriptionChange}
            />
          </div>
            <button type="submit" className="btn btn-primary" onClick={this.saveItem}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewStuff;
