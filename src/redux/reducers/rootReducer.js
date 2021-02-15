import {combineReducers} from "redux";
import {LoginReducer} from "./LoginReducer";
import {adminNewsReducer} from "./adminNewsReducer";
import {adminMenusReducer} from "./adminMenusReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    Login: LoginReducer,
    news: adminNewsReducer,
    menu: adminMenusReducer,
    app: appReducer
});