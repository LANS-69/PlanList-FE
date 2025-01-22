import axios from 'axios';

function addMovieToMovieList(item) {
    axios
    .post("http://127.0.0.1:8000/api/Movie/", item)
    .then()
    .catch(err => console.log(err));
    }

export default addMovieToMovieList;