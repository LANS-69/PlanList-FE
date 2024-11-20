import axios from 'axios';

function addItemToWishList(item) {
    axios
    .post("http://127.0.0.1:8000/api/wishList/", item)
    .then()
    .catch(err => console.log(err));
    }

export default addItemToWishList;