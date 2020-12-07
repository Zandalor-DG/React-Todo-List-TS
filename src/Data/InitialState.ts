import { ToDoState } from '../models/ToDoState';

export const initialState: ToDoState = {
    filterType: 'all',
    toDoList: [{ id: '1', name: 'first todo', isDone: false }],
    newToDo: '',
};
