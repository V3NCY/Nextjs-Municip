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

function restaurants(state = [], action) {
    switch (action.type) {
        case actions.SET_RESTAURANTS: {
            return [...action.payload]
        }
        default:
            return state;
    }
}


function hardcodedHotels(state = [], action) {
    switch (action.type) {
        case actions.SET_HARDCODED_HOTELS: {
            return [...action.payload]
        }
        default:
            return state;
    }
}

function hardcodedRestaurants(state = [], action) {
    switch (action.type) {
        case actions.SET_HARDCODED_RESTAURANTS: {
            return [...action.payload]
        }
        default:
            return state;
    }
}

function searchValue(state = "", action) {
    switch (action.type) {
        case actions.SET_SEARCH_VALUE: {
            return action.payload
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


export default combineReducers({ hotels, hardcodedHotels, restaurants, hardcodedRestaurants, currentUser, searchValue });