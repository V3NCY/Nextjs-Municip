import actions from './action-types';
import { GET_HOTELS } from "../queries/hotels";
import { GET_CURRENT_USER } from "../queries/user";
import { getClient } from "../apollo-client";
import { LOGIN, LOGOUT } from '../mutations/auth';
import cookieCutter from "cookie-cutter";
import Cookies from "cookies";
import moment from "moment";


export function setHotels(hotels){
    return {type: actions.SET_HOTELS, payload: hotels};
}
export function setCurrenUser(user){
    return {type: actions.SET_CURRENT_USER, payload: user};
}
export const getHotels = params => async dispatch => {
    try {
        const response = await getClient().query({
            query: GET_HOTELS,
        });
        if(response?.input?.hotels){
            dispatch(setHotels(response.input.hotels));
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
        if(response?.input?.currentUser){
            dispatch(setCurrenUser(response.input.currentUser));
        }
        return response;
    } catch (error) {
        if(process.browser) {
            cookieCutter.set('token', '', { expires: new Date(0) })
        }else{
            const cookies = new Cookies(ctx.req, ctx.res);
            cookies.set("token", "", { expires: new Date(0) })
        }
        console.log(error)
    }
}

export const login = variables => async dispatch => {
    try {
        const response = await getClient().mutate({
            mutation: LOGIN,
            variables,
        });
        if(response?.input?.login){
            const token = response.input.login;
            cookieCutter.set(
                "token", 
                token, 
                { expires: new moment().add(1, "d")._d 
            })
            dispatch(getCurrentUser());
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
        if(response?.input?.logout){
            cookieCutter.set('token', '', { expires: new Date(0) })
            dispatch(setCurrenUser({}));
        }
        return response;
    } catch (error) {
        console.log(error)
    }
}
