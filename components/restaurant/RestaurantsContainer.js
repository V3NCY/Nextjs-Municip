import Card from "./RestaurantCard.js";
import SearchBar from "./SearchBar.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHardcodedRestaurants } from "../../redux/actions.js"

function RestaurantList() {

  const hardcodedRestaurants = useSelector(state => state.hardcodedRestaurants);
  const searchValue = useSelector(state => state.searchValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHardcodedRestaurants());
  }, []);

  const getRestaurantList = () => {
    const restaurants = hardcodedRestaurants.filter(restaurant => restaurant.name.toLowerCase().indexOf(searchValue) !== -1)

    if (!restaurants.length) {
      return null;
    }
    const restaurantList = restaurants.map(restaurant => {
      return <Card
        key={restaurant.id}
        restaurant={restaurant}
      ></Card>
    })
    return restaurantList;
  }

  return <>
    <div className="row">
      <SearchBar />
      {getRestaurantList()}
    </div>
  </>
}
export default RestaurantList;