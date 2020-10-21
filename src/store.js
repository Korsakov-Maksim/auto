import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer, dataReducer} from "./reducers";
import {logger} from "redux-logger";
import {reducer as formReducer} from 'redux-form'

const store = createStore(
    combineReducers({
            data: dataReducer,
            app: appReducer,
            form: formReducer
        },
    ),
    applyMiddleware(logger)
)

export default store