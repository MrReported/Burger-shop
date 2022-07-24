import useFetch from "../../hooks/useFetch";
import { url } from '../../utils/urlQuery/urlQuery';


export const INGREDIENTS = 'INGREDIENTS';
export const INGREDIENTS_PICK = 'INGREDIENTS_PICK';
export const INGREDIENT_CURRENT = 'INGREDIENT_CURRENT';

export const MODAL = 'MODAL';
export const ORDER = 'ORDER';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';

export const POST_PASSWORD_REQUEST = 'POST_PASSWORD_REQUEST';
export const POST_PASSWORD_SUCCESS = 'POST_PASSWORD_SUCCESS';
export const POST_PASSWORD_FAILED = 'POST_PASSWORD_FAILED';

export const POST_RESTORE_PASSWORD_REQUEST = 'POST_RESTORE_PASSWORD_REQUEST';
export const POST_RESTORE_PASSWORD_SUCCESS = 'POST_RESTORE_PASSWORD_SUCCESS';
export const POST_RESTORE_PASSWORD_FAILED = 'POST_RESTORE_PASSWORD_FAILED';

export const SCROLL_CHANGE = 'SCROLL_CHANGE';

export const UPDATE_TYPE = 'UPDATE_TYPE';

export const DELETE_INGREDIENTS = 'DELETE_INGREDIENTS';

export const SORT_INGREDIENTS = 'SORT_INGREDIENTS';

export const getItems = () => {
    return (dispatch) => {
        useFetch(
            `${url}ingredients`,
            dispatch,
            GET_ITEMS_SUCCESS,
            GET_ITEMS_FAILED,
            GET_ITEMS_REQUEST,
            "GET"
        )
    }
}

export const postOrder = (id) => {
    return (dispatch) => {
        useFetch(
            `${url}orders`,
            dispatch,
            POST_ORDER_SUCCESS,
            POST_ORDER_FAILED,
            POST_ORDER_REQUEST,
            "POST",
            JSON.stringify({ "ingredients": id })
        )
        }
}

export const queryCode = (email) => {
    return (dispatch) => {
        useFetch(
            `${url}password-reset`,
            dispatch,
            POST_PASSWORD_SUCCESS,
            POST_PASSWORD_FAILED,
            POST_PASSWORD_REQUEST,
            "POST",
            JSON.stringify({ "email": email})
        )
    }
}

export const queryNewPassword = (obj) => {
    return (dispatch) => {
        useFetch(
            `${url}password-reset/reset`,
            dispatch,
            POST_RESTORE_PASSWORD_SUCCESS,
            POST_RESTORE_PASSWORD_FAILED,
            POST_RESTORE_PASSWORD_REQUEST,
            "POST",
            JSON.stringify(obj)
        )
    }
}

