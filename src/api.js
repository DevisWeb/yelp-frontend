import axios from "axios";

const getRestaurants = `${process.env.REACT_APP_API_RESTAURANTS_ALL}`;

const getCities = `${process.env.REACT_APP_API_CITIES}`;

const getTags = `${process.env.REACT_APP_API_TAGS}`;

const Api = {
  restaurants: {

    getAll: () => axios.get(`${getRestaurants}`),
    getCities: () => axios.get(`${getCities}`),
    getCitiesId: (id) => axios.get(`${getCities}/:id`),
    getTags: () => axios.get(`${getTags}`),
    //getTagsId: (id) => axios.get(`${getTags}/:id`),
  },
};

export default Api;
