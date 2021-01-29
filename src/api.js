import axios from "axios";

const getRestaurants = `${process.env.REACT_APP_API_ENDPOINT}`;

const Api = {
  restaurants: {
    // getSearchResults: (search) => axios.get(`${getRestaurants}&query=${search}`),
    getAll: () => axios.get(`${getRestaurants}`),
    // getById: (id) => axios.get(`${urlPost}&sys.id=${id}`),
    // getByUser: (userId) => a,
  },
};

export default Api;
