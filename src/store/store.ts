import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolReducer from './reducers/ToolsSlice';


const rootReducer = combineReducers({
    toolReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
