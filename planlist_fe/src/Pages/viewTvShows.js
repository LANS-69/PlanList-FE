// import './App.css';
import axios from 'axios';
import React, { Component, useEffect, useState } from "react";
import './viewTvShows.css';
import { useNavigate } from "react-router-dom";


function ViewTvShows() {

  const [movieList, setTvShowList] = useState( new Array())
  const navigate = useNavigate();

  function getTvShowList () {
    axios   
      .get("http://127.0.0.1:8000/api/TvShow/")
      .then(res => setTvShowList(res.data) )
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getTvShowList();
    document.title = "TV Shows";
  }, []);
  
  return (
    <div className="viewTvShows">
      <h1>Alex's and Nati's TV Show List</h1>

      <div className="navigation-buttons">
        <button
          className="home-button"
          onClick={() => navigate("/")}>
          Home
        </button>

        <button
          className="add-tvShow-button"
          onClick={() => navigate("/addTvShow")}>
          Add to TV Show List
        </button>
      </div>


      <div className="tvShow-container">
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
              <p className="card-subGenre">{item.subGenre}</p>
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

export default ViewTvShows;
