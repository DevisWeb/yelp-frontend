import "./App.css";
import { useEffect } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
// import views
import ViewRestaurant from "./views/viewrestaurant";
import ViewRestaurantsAll from "./views/viewrestaurantsall";
import ViewRestaurantByTag from "./views/viewrestaurantbytag";
import ViewCity from "./views/viewcity";
// import components
import RestaurantCard from "./components/restaurantcard";
import RestaurantCardBig from "./components/restaurantcardbig";
import SearchBar from "./components/searchbar";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div className="row">

        <div className="col-12">   <SearchBar /></div>


      </div>
      <div>
        <Switch>
          <Route path="/restaurant:id">
            <ViewRestaurant />
          </Route>
           <Route path="/city:id">
            <ViewRestaurant />
          </Route>
          <Route path="/">
            <ViewRestaurantsAll />
            <ViewCity />
          </Route>


           <Route path="/city/:id">

            <ViewCity />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
