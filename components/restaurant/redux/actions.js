import restaurantsService from '../services/restaurants';

export const SET_RESTAURANTS = 'SET_RESTAURANTS';
export const VIEW_RESTAURANT = 'VIEW_RESTAURANT';
export const SEARCH = 'SEARCH';

export const setRestaurants = () => {
  const restaurants = restaurantsService.getRestaurants();

  return {
    type: SET_RESTAURANTS,
    payload: restaurants
  };
};

export const viewRestaurant = id => {
  return {
    type: VIEW_RESTAURANT,
    payload: id
  };
};

export const search = key => {
  return {
    type: SEARCH,
    payload: key
  };

};