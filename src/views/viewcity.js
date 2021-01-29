import { useEffect, useState } from "react";
import Api from "../api.js";
import RestaurantCard from "../components/restaurantcard"
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ViewCity({}) {
  const [viewCity, setViewCity] = useState([]);

  const {id} = useParams();
  console.log(id);

  // const submitCity = () => {
  //   //
  //   selectedCities.map((selectCity) => {

  //     if (valueCity === selectCity ) {
  //       return
  //     } else {
  //       alert('No such city');
  //     }



  //   })

  return (<div></div>)


  }

  // if (search) {
  //   Api.restaurant
  //     // .getSearchResults(search)
  //     // .then((response) => setPostsAll(response.data.items))
  //     // .catch((error) => console.error(error));
  // useEffect(() => {
  //   Api.restaurants
  //     .getCities()
  //     .then((response) => {
  //       setSelectedCities(response.data.data);

  //       console.log(response.data);
  //       console.log(response.data.data[0].name);
  //     })
  //     .catch((error) => {
  //       console.log("There was an error with your request");
  //     });
  // }, [valueCity]);


