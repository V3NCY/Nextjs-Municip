import actions from './action-types';
import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';


function hotels(state = [], action) {
    switch (action.type) {
        case actions.SET_HOTELS: {
            return [...action.payload]
        }
        default:
            return state;
    }
}
function currentUser(state = {}, action) {
    switch (action.type) {
        case actions.SET_CURRENT_USER: {
            return { ...action.payload }
        }
        case HYDRATE: {
            return action.payload.currentUser
        }
        default:
            return state;
    }
}

export default combineReducers({ hotels, currentUser });