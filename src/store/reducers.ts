import { combineReducers } from 'redux';
import { ToDoState } from '../entities/state/ToDoState';
import toDoReducer from './toDoReducer/toDoReducer';

const reducers = combineReducers({
    toDo: toDoReducer,
});

export type StateReduxType = {
    toDo: ToDoState;
};

export default reducers;
