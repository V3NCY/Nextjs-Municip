import actions from './action-types'
import { GET_HOTELS, GET_HARDCODED_HOTELS } from "../queries/hotels"
import { GET_RESTAURANTS, GET_HARDCODED_RESTAURANTS } from "../queries/restaurants"
import { GET_CURRENT_USER } from "../queries/user"
import { getClient } from "../apollo-client"
import { LOGIN, LOGOUT, REGISTER, CREATE_HOTEL, CREATE_RESTAURANT } from '../mutations/auth'
import cookieCutter from "cookie-cutter"
import Cookies from "cookies"
import moment from "moment"

//TODO add function for creating a hotel
// copy from register

// -------------DONE-------------


export function setHotels(hotels) {
    return { type: actions.SET_HOTELS, payload: hotels };
}
export function setHardcodedHotels(hotels) {
    return { type: actions.SET_HARDCODED_HOTELS, payload: hotels };

}
export function setRestaurants(restaurants) {
    return { type: actions.SET_RESTAURANTS, payload: restaurants };
}
export function setHardcodedRestaurants(restaurants) {
    return { type: actions.SET_HARDCODED_RESTAURANTS, payload: restaurants };
}
export function setCurrenUser(user) {
    return { type: actions.SET_CURRENT_USER, payload: user };
}

// ---- setCreateHotel ----
export function setCreateHotel(hotels) {
    return { type: actions.CREATE_HOTEL, payload: hotels };
    // ---- End setCreateHotel ----
}
// ---- setCreateRestaurant ----
export function setCreateRestaurant(restaurants) {
    return { type: actions.CREATE_RESTAURANT, payload: restaurants };
    // ---- End setCreateRestaurant ----
}

export function setSearchValue(value) {
    return { type: actions.SET_SEARCH_VALUE, payload: value };
}

export const getHotels = () => async dispatch => {
    try {
        const response = await getClient().query({
            query: GET_HOTELS,
        });
        if (response?.data?.hotels) {
            dispatch(setHotels(response.data.hotels));
        }
    } catch (error) {
        console.log(error)
    }
}
export const getRestaurants = () => async dispatch => {
    try {
        const response = await getClient().query({
            query: GET_RESTAURANTS,
        });
        if (response?.data?.restaurants) {
            dispatch(setRestaurants(response.data.restaurants));
        }
    } catch (error) {
        console.log(error)
    }
}

export const getHardcodedHotels = () => async dispatch => {
    try {
        const response = await getClient().query({
            query: GET_HARDCODED_HOTELS,
        });
        if (response?.data?.hardcodedHotels?.hotels) {
            dispatch(setHardcodedHotels(response.data.hardcodedHotels.hotels));
        }
    } catch (error) {
        console.log(error)
    }
}
export const getHardcodedRestaurants = () => async dispatch => {
    try {
        const response = await getClient().query({
            query: GET_HARDCODED_RESTAURANTS,
        });
        if (response?.data?.getHardcodedRestaurants?.restaurants) {
            dispatch(setHardcodedRestaurants(response.data.hardcodedRestaurants.restaurants));
        }
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentUser = (ctx) => async dispatch => {
    try {
        const response = await getClient(ctx).query({
            query: GET_CURRENT_USER,
        });
        if (response?.data?.currentUser) {
            dispatch(setCurrenUser(response.data.currentUser));
        }
        return response;
    } catch (error) {
        if (process.browser) {
            cookieCutter.set('token', '', { expires: new Date(0) })
        } else {
            const cookies = new Cookies(ctx.req, ctx.res);
            cookies.set("token", "", { expires: new Date(0) })
        }
        console.log(error)
    }
}

// -----------getCreateHotel--------------
export const getCreateHotel = (ctx) => async dispatch => {
    try {
        const response = await getClient(ctx).query({
            query: GET_HOTELS,
        });
        if (response?.data?.createHotel) {
            dispatch(setCreateHotel(response.data.createHotel));
        }
        return response;
    } catch (error) {
        if (process.browser) {
            cookieCutter.set('token', '', { expires: new Date(0) })
        } else {
            const cookies = new Cookies(ctx.req, ctx.res);
            cookies.set("token", "", { expires: new Date(0) })
        }
        console.log(error)
    }
}
// -----------End getCreateHotel--------------

// -----------Create Hotel function begin -------------
function newHotel(dispatch, token) {
    cookieCutter.set(
        "token",
        token,
        {
            expires: new moment().add(1, "d")._d
        })
    dispatch(getCreateHotel());
}
// -----------Create Hotel function end -------------

// -----------getCreateRestaurant--------------
export const getCreateRestaurant = (ctx) => async dispatch => {
    try {
        const response = await getClient(ctx).query({
            query: GET_RESTAURANTS,
        });
        if (response?.data?.createRestaurant) {
            dispatch(setCreateRestaurant(response.data.createRestaurant));
        }
        return response;
    } catch (error) {
        if (process.browser) {
            cookieCutter.set('token', '', { expires: new Date(0) })
        } else {
            const cookies = new Cookies(ctx.req, ctx.res);
            cookies.set("token", "", { expires: new Date(0) })
        }
        console.log(error)
    }
}
// -----------End getCreateRestaurant--------------

// -----------Create Restaurant function begin -------------
function newRestaurant(dispatch, token) {
    cookieCutter.set(
        "token",
        token,
        {
            expires: new moment().add(1, "d")._d
        })
    dispatch(getCreateRestaurant());
}
// -----------Create Restaurant function end -------------

function logUser(dispatch, token) {
    cookieCutter.set(
        "token",
        token,
        {
            expires: new moment().add(1, "d")._d
        })
    dispatch(getCurrentUser());
}

export const login = variables => async dispatch => {
    try {
        const response = await getClient().mutate({
            mutation: LOGIN,
            variables,
        });
        if (response?.data?.login) {
            const token = response.data.login;
            logUser(dispatch, token);
        }
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const logout = () => async dispatch => {
    try {
        const response = await getClient().mutate({
            mutation: LOGOUT,
        });
        if (response?.data?.logout) {
            cookieCutter.set('token', '', { expires: new Date(0) })
            dispatch(setCurrenUser({}));
        }
        return response;
    } catch (error) {
        console.log(error)
    }
}
export const register = variables => async dispatch => {
    try {
        const response = await getClient().mutate({
            mutation: REGISTER,
            variables,
        });
        if (response?.data?.registerUser) {
            const token = response.data.registerUser;
            logUser(dispatch, token);
        }
        return response;
    } catch (error) {
        console.log(error)
    }
}
// ------------- CreateHotel const begin ------------
export const createHotel = variables => async dispatch => {
    try {
        const response = await getClient().mutate({
            mutation: CREATE_HOTEL,
            variables,
        });
        if (response?.data?.createHotel) {
            const token = response.data.createHotel;
            newHotel(dispatch, token);
        }
        return response;
    } catch (error) {
        console.log(error)
    }
}
// ------------- CreateHotel const end ------------
// ------------- CreateRestaurant const begin ------------
export const createRestaurant = variables => async dispatch => {
    try {
        const response = await getClient().mutate({
            mutation: CREATE_RESTAURANT,
            variables,
        });
        if (response?.data?.createRestaurant) {
            const token = response.data.createRestaurant;
            newRestaurant(dispatch, token);
        }
        return response;
    } catch (error) {
        console.log(error)
    }
}
// ------------- CreateRestaurant const end ------------
