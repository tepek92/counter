// legacy_createStore as createStore иначе ругается на устаревший createStore
import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../storage/localStorage";
import throttle from 'lodash.throttle'

const rootReducer = combineReducers({
    counterState: counterReducer
});

const persistedState: RootAppState | undefined = loadState();

export const store = createStore(rootReducer, persistedState);

store.subscribe(throttle(() => {
    saveState({
        counterState: store.getState().counterState
    });
}, 1000));

export type RootAppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
