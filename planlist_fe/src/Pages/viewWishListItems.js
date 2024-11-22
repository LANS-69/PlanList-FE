// import './App.css';
import axios from 'axios';
import React, { Component } from "react";
import './viewWIshListitemsStyle.css';


class ViewWishListItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
     wishList: []
    };
  }

  getWishList = () => {
    axios   
      .get("http://127.0.0.1:8000/api/wishList/")
      .then(res => this.setState({ wishList: res.data }))
      .catch(err => console.log(err));
  };

  addItemToWishList = (item) => {
    axios
    .post("http://127.0.0.1:8000/api/wishList/", item)
    .then(res => this.setState({ wishList: res.data }))
    .catch(err => console.log(err));
    };

  render() {
    const locations = [
      "Living Room",
      "Bathroom",
      "Bedroom",
      "Playroom",
      "Kitchen",
      "Backyard",
      "Balcony",
      "Office",
      "Other"
    ];

    return (
      <div className="viewWishListItems">
        <h1>Alex's and Nati's New Website</h1>
        <button onClick={this.getWishList} className="wishlist-button">
          Get Wishlist
        </button>

        <div className="tabs-container">
          {locations.map((location, index) => (
            <button
              key={index}
              className="tab-button"
              onClick={() => console.log(`Tab for ${location} clicked`)}
            >
              {location}
            </button>
          ))}
        </div>

        <div className="wishlist-container">
          {this.state.wishList.map((item, index) => (
            <div className="card" key={index}>
              <img
                className="card-img-top"
                src={item.image}
                alt={`${item.name} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-price">${item.price}</p>
                <p className="card-location">{item.location}</p>
                <a href={item.storeUrl} className="btn btn-primary"
                target="_blank" rel="noopener noreferrer">
                  Link to Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ViewWishListItems;
