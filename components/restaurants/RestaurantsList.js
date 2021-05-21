// import RestaurantItem from "./RestaurantItem"

// import { useSelector, useDispatch } from "react-redux"
// import { useEffect } from "react"
// import { getRestaurants } from "../../redux/actions"

// function RestaurantsList(props) {

//     const restaurants = useSelector(state => state.restaurants);

//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getRestaurants());
//     }, []);
//     const getRestaurantsList = () => {
//         if (!restaurants.length) {
//             return null;
//         }
//         const restaurantsList = restaurants.map(restaurant => {
//             return <RestaurantItem
//                 key={restaurant._id}
//                 title={restaurant.title}
//                 description={restaurant.description}
//                 extras={restaurant.extras}
//                 rating={restaurant.rating}
//                 image={restaurant.image}
//             ></RestaurantItem>
//         })
//         return restaurantsList;
//     }

//     return <>
//         <div className="row">
//             {getRestaurantsList()}
//         </div>
//     </>
// }
// export default RestaurantsList