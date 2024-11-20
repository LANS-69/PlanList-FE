import { Navigate } from 'react-router-dom';
import addItemToWishList from './addItemToWishList';

function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    let itemToAdd = new Object()
    itemToAdd.name = formData.get('name');
    itemToAdd.price = formData.get('price');
    itemToAdd.description = formData.get('description');
    itemToAdd.image = formData.get('imageUrl');
    itemToAdd.storeUrl = formData.get('storeUrl');
    itemToAdd.location = formData.get('location');

    addItemToWishList(itemToAdd)
    // Navigate("/")
  }

export default handleSubmit;