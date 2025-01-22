// import './App.css';
import axios from 'axios';
import React, { Component, useEffect, useState } from "react";
import './viewMovies.css';
import { useNavigate } from "react-router-dom";


function ViewMovies() {

  const [movieList, setMovieList] = useState( new Array())
  // const [filteredMovieList, setFilteredMovieList] = useState(new Array())
  // const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  function getMovieList () {
    axios   
      .get("http://127.0.0.1:8000/api/Movie/")
      .then(res => setMovieList(res.data) )
      .catch(err => console.log(err));
  }

  // function filterWishListOnLocation (filter) {
  //   setFilteredWishList(wishList.filter((item) => item.location == filter));
  //   // const locationName = locations.find((location) => location.key === filter)?.value || "";
  //   // setSelectedLocation(locationName);
  //   setActiveTab(filter);
  //   locations.forEach((location) => {
  //     const locationElement = document.getElementsByClassName("tab-" + location.key).item(0);
  //     if (location.key === filter) {
  //       locationElement.style.backgroundColor = "#444"
  //       locationElement.style.border = "12px solid #444"
  //       locationElement.style.margin = "0"
  //     } else {
  //       locationElement.style.backgroundColor = "#555"
  //       locationElement.style.border = "1px solid #555"
  //       locationElement.style.margin = "20px"
  //     }
  //   })
  // }

  // const locations = [
  //   {key: "livingRoom", value: "Living Room"},
  //   {key: "bathroom", value: "Bathroom"},
  //   {key: "bedRoom", value: "Bedroom"},
  //   {key: "playroom", value: "Playroom"},
  //   {key: "kitchen", value: "Kitchen"},
  //   {key: "backyard", value: "Backyard"},
  //   {key: "balcony", value: "Balcony"},
  //   {key: "office", value: "Office"},
  //   {key: "other", value: "Other"}
  // ];

  useEffect(() => {
    getMovieList();
    document.title = "Movies";
  }, []);
  
  return (
    <div className="viewMovies">
      <h1>Alex's and Nati's Movie List</h1>

      <div className="navigation-buttons">
        <button
          className="home-button"
          onClick={() => navigate("/")}>
          Home
        </button>

        <button
          className="add-movie-button"
          onClick={() => navigate("/addMovie")}>
          Add to Movie List
        </button>
      </div>


      <div className="movie-container">
        {movieList.map((item, index) => (
          <div className="card" key={index}>
            <img
              className="card-img-top"
              src={item.image}
              alt={`${item.name} image`}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-mainGenre">{item.mainGenre}</p>
              <p className="card-subGenre">${item.subGenre}</p>
              <a href={item.storeUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Link to Trailer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMovies;
