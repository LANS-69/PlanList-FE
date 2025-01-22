// import './App.css';
import axios from 'axios';
import React, { Component } from "react";
import addTvShowToTvShowList from '../Functions/addTvShowToTvShowList';
import {useNavigate } from 'react-router-dom';


function AddTvShow(props) {

  const navigate = useNavigate();

    const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    let itemToAdd = new Object()
    itemToAdd.name = formData.get('tvShowName');
    itemToAdd.trailerLink = formData.get('trailerLink');
    itemToAdd.image = formData.get('imageUrl');
    itemToAdd.mainGenre = formData.get('mainGenre');
    itemToAdd.subGenre = formData.get('subGenre');

    addTvShowToTvShowList(itemToAdd);
    navigate('/tvShow')
    };

    return (
    <div className="add-tvShow-container">
      <div className="add-tvShow-box">
        <h2>Add Item to Tv Show List</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="tvShowName">Tv Show name:</label>
          <input type="text" id="tvShowName" name="tvShowName" required />

          <label htmlFor="trailerLink">Trailer link:</label>
          <input type="text" id="trailerLink" name="trailerLink"/>

          <label htmlFor="imageUrl">Image URL:</label>
          <input type="url" id="imageUrl" name="imageUrl"/>

          <p>Location:</p>
          <div className="location-options">
            <p>Select Tv Show Genre:</p>
            <select name="mainGenre" id="mainGenre">
              <option value="" selected>Select a main genre</option>
              <option value="ACTION">Action</option>
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option value="HORROR">Horror</option>
              <option value="ROMANCE">Romance</option>
              <option value="SCIFI">Science Fiction</option>
              <option value="FANTASY">Fantasy</option>
              <option value="DOCUMENTARY">Documentary</option>
              <option value="OTHER">Other</option>
              <option value="other" > Other</option>
            </select>
            <select name="subGenre" id="subGenre">
              <option value="" selected>Select a sub genre</option>
              <option value="ACTION">Action</option>
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option value="HORROR">Horror</option>
              <option value="ROMANCE">Romance</option>
              <option value="SCIFI">Science Fiction</option>
              <option value="FANTASY">Fantasy</option>
              <option value="DOCUMENTARY">Documentary</option>
              <option value="OTHER">Other</option>
              <option value="other" > Other</option>
            </select>
          </div>
          <button type="submit">Add Item to Tv Show List</button>
        </form>
      </div>
    </div>
  );
}

export default AddTvShow;
