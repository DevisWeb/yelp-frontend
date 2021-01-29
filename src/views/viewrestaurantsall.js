import { useEffect, useState } from "react";
import Api from "../api.js";
import axios from "axios";
export default function ViewRestaurantsAll() {
  const [allRestaurants, setAllRestaurants] = useState([]);

  // if (search) {
  //   Api.restaurant
  //     // .getSearchResults(search)
  //     // .then((response) => setPostsAll(response.data.items))
  //     // .catch((error) => console.error(error));

  useEffect(() => {
    axios
      .get("https://mini-yelp-db.herokuapp.com/restaurants")
      .then((response) => {
        setAllRestaurants(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("There was an error with your request");
      });
  }, []);

  return <div></div>;
}

// {allRestaurants.map((restaurant, index) => {
//   return (
//     <div key={index}>{console.log(`restaurant : ${restaurant}`)}</div>
//   );
// })
