import axios from 'axios';

function addTvShowToTvShowList(item) {
    axios
    .post("http://127.0.0.1:8000/api/TvShow/", item)
    .then()
    .catch(err => console.log(err));
    }

export default addTvShowToTvShowList;