import { useEffect, useState } from "react";
import Api from "../api.js";
import RestaurantCard from "../components/restaurantcard"
import axios from "axios";
export default function ViewRestaurantsAll() {
  const [allRestaurants, setAllRestaurants] = useState([]);

  // if (search) {
  //   Api.restaurant
  //     // .getSearchResults(search)
  //     // .then((response) => setPostsAll(response.data.items))
  //     // .catch((error) => console.error(error));





  useEffect(() => {
    Api.restaurants
      .getAll()
      .then((response) => {
        setAllRestaurants(response.data.data);
        console.log(response.data);
        console.log(response.data.data[0].name);
      })
      .catch((error) => {
        console.log("There was an error with your request");
      });
  }, []);

  return <div>
{allRestaurants.map((restaurant, index) => {
  return (
    <div className="row">
      <div className="col-md-6">

         <RestaurantCard image={restaurant.img} title={restaurant.name} description={restaurant.description} />
          </div>
    </div>
  )
})}
  </div>;
}

