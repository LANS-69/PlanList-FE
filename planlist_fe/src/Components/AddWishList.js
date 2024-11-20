// import './App.css';
import axios from 'axios';
import React, { Component } from "react";
import addItemToWishList from '../Functions/addItemToWishList'
import {useNavigate } from 'react-router-dom';
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
      navigate('/')
    };

    return (
      <div className="AddWishList">
        <body>
          <form onSubmit={handleSubmit}>
            <label for="itemName">Item name:
            <input type="text" id="itemName" name="itemName"></input>
            </label>
            <br></br>
            <label for="itemDescription">Item description:
            <input type="text" id="itemDescription" name="itemDescription"></input>
            </label>
            <br></br>
            <label for="storeUrl">Store URL:
            <input type="url" id="storeUrl" name="storeUrl"></input>
            </label>
            <br></br>
            <label for="imageUrl">Image URL:
            <input type="url" id="storeUrl" name="storeUrl"></input>
            </label>
            <br></br>
            <label for="price">Item price:
            <input type="number" id="price" name="price"></input>
            </label>
            <br></br>
            <p>
              Location
              <label><input type="radio" name="location" value="livingroom" /> Living Room</label>
              <label><input type="radio" name="location" value="bathroom" /> Bathroom</label>
              <label><input type="radio" name="location" value="bedroom" /> Bedroom</label>
              <label><input type="radio" name="location" value="playroom" /> Playroom</label>
              <label><input type="radio" name="location" value="kitchen" /> Kitchen</label>
              <label><input type="radio" name="location" value="backyard" /> Backyard</label>
              <label><input type="radio" name="location" value="office" /> Office</label>
              <label><input type="radio" name="location" value="balcony" /> Balcony</label>
              <label><input type="radio" name="location" value="other" /> Other</label>
            </p>
            <br></br>
            <button type="submit">Add item to wishlist</button>
          </form>
        </body>
      </div>
      );
    }

export default AddWishList;
