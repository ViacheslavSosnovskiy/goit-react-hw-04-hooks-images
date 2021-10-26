import axios from "axios";

const KEY = "22984759-30de173458e69cd83eb69d4b0";
const BASE_URL = "https://pixabay.com/api/";

const fetchPicture = ({ query = "", page = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data.hits);
};

export default fetchPicture;
