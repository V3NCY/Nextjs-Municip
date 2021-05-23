import {
  SET_RESTAURANTS,
  VIEW_RESTAURANT,
  SEARCH
} from './action-types';

const initialState = {
  restaurants: [],
  viewing: null,
  search_key: '',
  error: null,
};

function booking(state = initialState, action) {

  switch (action.type) {
    case SET_RESTAURANTS: {
      return {
        ...state,
        restaurants: restaurants
      }
    }
    case VIEW_RESTAURANT: {
      return {
        ...state,
        viewing: id,
        search_key: ''
      }
    }
    case SEARCH: {
      return {
        ...state,
        search_key: key
      }
    }
    default:
      return state;
  }
}

export default booking;