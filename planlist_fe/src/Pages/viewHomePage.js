// import './App.css';
import React, { Component, useEffect, useState } from "react";
import './viewHomePageStyle.css';



function ViewHomePage() {
  const locations = [
    {key: "Wish List", value: "Wish List", path: "/WishList"},
    {key: "Vacation", value: "Vacation", path: "/vacation"},
    {key: "Dream Home", value: "Home", path: "/DreamHome"},
    {key: "TV show", value: "TV Show", path: "/TVShow"},
    {key: "Movie", value: "Movie", path: "/Movie"},
    {key: "Resturant", value: "Resturant", path: "/Resturant"},
    ];
    
  useEffect(() => {
  document.title = "Home Page";
  }, []);

  const scrollCarousel = (direction) => {
    const carousel = document.querySelector(".carousel");
    const scrollAmount = carousel.offsetWidth / 3; // Scroll by one-third of the carousel width

    if (direction === "left") {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="viewHomePage">
      <h1>Alex's and Nati's Website</h1>

      {/* Carousel Section */}
      <div className="carousel-container">
        <button className="carousel-arrow left-arrow" onClick={() => scrollCarousel("left")}>
          &#8592;
        </button>
        <div className="carousel">
          {locations.map((location, index) => (
            <div className="carousel-item" key={index}>
              <button
                className="section-button"
                onClick={() => (window.location.href = location.path)}
              >
                {location.value}
              </button>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right-arrow" onClick={() => scrollCarousel("right")}>
          &#8594;
        </button>
      </div>
    </div>
  );
}
  
  export default ViewHomePage;