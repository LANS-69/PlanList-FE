// import './App.css';
import axios from 'axios';
import React, { Component, useEffect, useState } from "react";
import './viewWIshListitemsStyle.css';


function ViewWishListItems() {

  const [wishList, setWishList] = useState( new Array())
  const [filteredWishList, setFilteredWishList] = useState(new Array())
  const [selectedLocation, setSelectedLocation] = useState("")

  function getWishList () {
    axios   
      .get("http://127.0.0.1:8000/api/wishList/")
      .then(res => setWishList(res.data) )
      .catch(err => console.log(err));
  }

  function filterWishListOnLocation (filter) {
    setFilteredWishList(wishList.filter((item) => item.location == filter));
    locations.forEach((location) => {
      if (location.key == filter) {
        setSelectedLocation(location.value)
      }
    })
  }

    const locations = [
      {key: "livingRoom", value: "Living Room"},
      {key: "bathroom", value: "Bathroom"},
      {key: "bedRoom", value: "Bedroom"},
      {key: "playroom", value: "Playroom"},
      {key: "kitchen", value: "Kitchen"},
      {key: "backyard", value: "Backyard"},
      {key: "balcony", value: "Balcony"},
      {key: "office", value: "Office"},
      {key: "other", value: "Other"}
    ];

    useEffect(() => {
      getWishList();
      setFilteredWishList(wishList);
    }, []);
    
    return (
      <div className="viewWishListItems">
        <h1>Alex's and Nati's New Website</h1>
        {/* <button onClick={this.getWishList} className="wishlist-button">
          Get Wishlist
        </button> */}

        <div className="tabs-container">
          {locations.map((location, index) => (
            <div>
              <button
                key={index}
                className="tab-button"
                onClick={() => {filterWishListOnLocation(location.key);
                  console.log(`Tab for ${location.value} clicked`);
                  console.log(`List: ${filteredWishList}`);}}
              >
                {location.value}
              </button>
            </div>
          ))}
        </div>
        
        <h2>{selectedLocation}</h2>

        <div className="wishlist-container">
          {filteredWishList.map((item, index) => (
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

export default ViewWishListItems;
