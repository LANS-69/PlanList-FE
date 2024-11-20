import './App.css';
import axios from 'axios';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddWishList from './Components/AddWishList';
import Home from './Pages/viewWishListItems';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

     bookList: [],
     wishList: []
    };
  }

  getBooks = () => {
    axios   //Axios to send and receive HTTP requests
      .get("http://127.0.0.1:8000/api/test/")
      .then(res => this.setState({ bookList: res.data }))
      .catch(err => console.log(err));
  };

  getWishList = () => {
    axios   
      .get("http://127.0.0.1:8000/api/wishList/")
      .then(res => this.setState({ wishList: res.data }))
      .catch(err => console.log(err));
  };

  addItemToWishList = (item) => {
    axios
    .post("http://127.0.0.1:8000/api/wishList/", item)
    .then(res => this.setState({ wishList: res.data }))
    .catch(err => console.log(err));
    };

  render() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/addWishList"
                    element={<AddWishList />}
                />
            </Routes>
        </Router>
      );
    }
  }

export default App;
