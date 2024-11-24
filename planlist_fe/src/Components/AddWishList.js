// import './App.css';
import axios from 'axios';
import React, { Component } from "react";
import addItemToWishList from '../Functions/addItemToWishList'
import {useNavigate } from 'react-router-dom';
import "./AddWishListStyle.css";
// import handleSubmit from '../Functions/handleSubmit';


function AddWishList(props) {

  const navigate = useNavigate();

    const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    let itemToAdd = new Object()
    itemToAdd.name = formData.get('itemName');
    itemToAdd.price = formData.get('price');
    itemToAdd.description = formData.get('itemDescription');
    itemToAdd.image = formData.get('imageUrl');
    itemToAdd.storeUrl = formData.get('storeUrl');
    itemToAdd.location = formData.get('location');

    addItemToWishList(itemToAdd);
    navigate('/WishList')
    };

    return (
    <div className="add-wishlist-container">
      <div className="add-wishlist-box">
        <h2>Add Item to Wishlist</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="itemName">Item name:</label>
          <input type="text" id="itemName" name="itemName" required />

          <label htmlFor="itemDescription">Item description:</label>
          <input type="text" id="itemDescription" name="itemDescription" required />

          <label htmlFor="storeUrl">Store URL:</label>
          <input type="url" id="storeUrl" name="storeUrl" required />

          <label htmlFor="imageUrl">Image URL:</label>
          <input type="url" id="imageUrl" name="imageUrl" required />

          <label htmlFor="price">Item price:</label>
          <input type="number" id="price" name="price" required />

          <p>Location:</p>
          <div className="location-options">
            <label><input type="radio" name="location" value="livingroom" required /> Living Room</label>
            <label><input type="radio" name="location" value="bathroom" /> Bathroom</label>
            <label><input type="radio" name="location" value="bedroom" /> Bedroom</label>
            <label><input type="radio" name="location" value="playroom" /> Playroom</label>
            <label><input type="radio" name="location" value="kitchen" /> Kitchen</label>
            <label><input type="radio" name="location" value="backyard" /> Backyard</label>
            <label><input type="radio" name="location" value="office" /> Office</label>
            <label><input type="radio" name="location" value="balcony" /> Balcony</label>
            <label><input type="radio" name="location" value="other" /> Other</label>
          </div>
          <button type="submit">Add Item to Wishlist</button>
        </form>
      </div>
    </div>
  );
}

export default AddWishList;
