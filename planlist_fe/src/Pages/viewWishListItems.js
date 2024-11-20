// import './App.css';
import axios from 'axios';
import React, { Component } from "react";


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
    return (
      <div className="viewWishListItems">
        <h1>
          Alex's and Nati's new website
        </h1>
        <body>
        <button onClick={this.getWishList}>Get Wishlist</button>
          {this.state.wishList.map((item) => (
            <div class="card" style= {{width: "18rem"}}>
            <img class="card-img-top" src={item.image} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.description}</p>
              <a href={item.storeUrl} class="btn btn-primary">Link to store</a>
            </div>
            </div>
            ))}
        </body>
      </div>
      );
    }
  }

export default ViewWishListItems;
