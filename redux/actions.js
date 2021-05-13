import actions from './action-types'
import { GET_HOTELS } from "../queries/hotels"
import { GET_CURRENT_USER } from "../queries/user"
import { getClient } from "../apollo-client"
import { LOGIN, LOGOUT, REGISTER, CREATE_HOTEL } from '../mutations/auth'
import cookieCutter from "cookie-cutter"
import Cookies from "cookies"
import moment from "moment"

//TODO add function for creating a hotel
// copy from register

// -------------DONE-------------


export function setHotels(hotels) {
    return { type: actions.SET_HOTELS, payload: hotels };
}
export function setCurrenUser(user) {
    return { type: actions.SET_CURRENT_USER, payload: user };
}

// ---- setCreateHotel ----
export function setCreateHotel(hotels) {
    return { type: actions.CREATE_HOTEL, payload: hotels };
    // ---- End setCreateHotel ----
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

