
import Api from "../api.js";
import { useEffect, useState } from "react";
import RestaurantCard from "./restaurantcard.js";

export default function SearchBar({}) {

  const [valueFood, setValueFood] = useState('');
  const [valueCity, setValueCity] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);



  // get all cities





  const submitTags = () => {
    //
  }
  const submitCity = () => {
    //
    selectedCities.map((selectCity) => {

      if (valueCity === selectCity ) {
        return
      } else {
        alert('No such city');
      }



    })



  }

  return (

    <div class="form-group">

      <input onChange={ (e) => setValueFood(e.target.value)} type="text" className="form-control" id="exampleInputFood" aria-describedby="emailHelp" placeholder="Enter Food" />
      {console.log(valueFood)}
      <button type="button" onClick={submitTags} className="btn btn-primary">Search Tags</button>
      <input onChange={(e) => setValueCity(e.target.value)} type="text" className="form-control" id="exampleInputCity" aria-describedby="emailHelp" placeholder="Enter City" />
      {console.log(valueCity)}
      <button type="button" onClick={submitCity} className="btn btn-primary">Search City</button>
    </div>




  );
}
