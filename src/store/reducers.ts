import { combineReducers } from 'redux';
import toDoReducer from './toDoReducer/toDoReducer';

const reducers = combineReducers({
    toDo: toDoReducer,
});

export type StateReduxType = ReturnType<typeof reducers>;

export default reducers;
