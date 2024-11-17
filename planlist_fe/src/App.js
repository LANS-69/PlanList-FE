import './App.css';
import axios from 'axios';
import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

     bookList: []
    };
  }

  getBooks = () => {
    axios   //Axios to send and receive HTTP requests
      .get("http://127.0.0.1:8000/api/test/")
      .then(res => this.setState({ bookList: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>
          Alex's and Nati's new website
        </h1>
        <body>
        <button onClick={this.getBooks}>Get Books</button>
        <ul>
          {this.state.bookList.map((item) => (
            <li key={item.id}>Author: {item.author} <br></br> Name: {item.name}</li>
            ))}
        </ul>
        </body>
      </div>
      );
    }
  }

export default App;
