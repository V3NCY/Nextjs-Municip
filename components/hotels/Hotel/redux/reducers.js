import {
  SET_HOTELS,
  VIEW_HOTEL,
  SEARCH
} from './action-types';

const initialState = {
  hotels: [],
  viewing: null,
  search_key: '',
  error: null,
};

function booking(state = initialState, action) {
  debugger
  switch (action.type) {
    case SET_HOTELS: {
      return {
        ...state,
        hotels: hotels
      }
    }
    case VIEW_HOTEL: {
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