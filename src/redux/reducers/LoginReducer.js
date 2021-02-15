import {LOGIN} from "../actionTypes/authType";

const initialState = {
    isLoading :false,
    posts: []
};


export const LoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {...state,isLoading: !state.isLoading}
            break;
        default: return state;
    }


};