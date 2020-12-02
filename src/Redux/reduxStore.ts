import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { toDoReducer } from './Reducer/toDoReducer';

const reducers = combineReducers({
    toDo: toDoReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
