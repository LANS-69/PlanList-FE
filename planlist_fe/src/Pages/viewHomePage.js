// import './App.css';
import React, { Component, useEffect, useState } from "react";
import './viewHomePageStyle.css';



function ViewHomePage() {
    const locations = [
        {key: "Wish List", value: "Wish List", path: "/WishList"},
        {key: "Vacation", value: "Vacation", paht: "/vacation"},
        {key: "Dream Home", value: "Home", path: "/DreamHome"},
        {key: "TV show", value: "TV Show", path: "/TVShow"},
        {key: "Movie", value: "Movie", path: "/Movie"},
        {key: "Resturant", value: "Resturant", path: "/Resturant"},

      ];
    
    useEffect(() => {
    document.title = "Home Page";
    }, []);
    return (
        <div className="viewHomePage">
          <h1>Alex's and Nati's Website</h1>
          <div className="tabs-container">
            {locations.map((location, index) => (
                <div>
                <button
                    key={index}
                    className="tab-button" onClick={() => window.location.href = location.path}>
                    {location.value}
                </button>
                </div>
            ))}
            </div>
        </div>
    );
}
  
  export default ViewHomePage;