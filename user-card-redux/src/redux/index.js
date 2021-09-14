import {combineReducers, createStore} from "redux";
import laptopReducer from "./reducers/laptopReducer";
import phoneReducer from "./reducers/phoneReducer";

const rootReducer = combineReducers({
    laptop:laptopReducer,
    phone: phoneReducer,
})

const store = createStore(rootReducer);

export default store;