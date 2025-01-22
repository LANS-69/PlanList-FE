// import './App.css';
import axios from 'axios';
import React, { Component, useEffect, useState } from "react";
import './viewWIshListitemsStyle.css';
import { useNavigate } from "react-router-dom";


function ViewWishListItems() {

  const [wishList, setWishList] = useState( new Array())
  const [filteredWishList, setFilteredWishList] = useState(new Array())
  const [selectedLocation, setSelectedLocation] = useState("")
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  function getWishList () {
    axios   
      .get("http://127.0.0.1:8000/api/wishList/")
      .then(res => setWishList(res.data) )
      .catch(err => console.log(err));
  }

  function filterWishListOnLocation (filter) {
    setFilteredWishList(wishList.filter((item) => item.location == filter));
    // const locationName = locations.find((location) => location.key === filter)?.value || "";
    // setSelectedLocation(locationName);
    setActiveTab(filter);
    locations.forEach((location) => {
      const locationElement = document.getElementsByClassName("tab-" + location.key).item(0);
      if (location.key === filter) {
        locationElement.style.backgroundColor = "#444"
        locationElement.style.border = "12px solid #444"
        locationElement.style.margin = "0"
      } else {
        locationElement.style.backgroundColor = "#555"
        locationElement.style.border = "1px solid #555"
        locationElement.style.margin = "20px"
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
    document.title = "Wish List";
  }, []);
  
  return (
    <div className="viewWishListItems">
      <h1>Alex's and Nati's Wish List</h1>

      <div className="navigation-buttons">
        <button
          className="home-button"
          onClick={() => navigate("/")}>
          Home
        </button>

        <button
          className="add-wishlist-button"
          onClick={() => navigate("/addwishlist")}>
          Add to Wish List
        </button>
      </div>

      <div className="tabs-container">
        {locations.map((location, index) => (
          <div className={`tab-${location.key}`}>
            <button
              key={index}
              className={`tab-button ${activeTab === location.key ? "active-tab" : ""}`}
              onClick={() => filterWishListOnLocation(location.key)}>
              {location.value}
            </button>
          </div>
        ))}
      </div>
      
      {activeTab && (
        <div className="folder-view">
          {/* <h2>{selectedLocation || "All Items"}</h2> */}
          <br></br>
          <br></br>

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
                  <a href={item.storeUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Link to Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewWishListItems;
