import { State } from '../entities/state/State';

export const initialState: State = {
    filterType: 'all',
    toDoList: [{ id: '1', name: 'first todo', isDone: false }],
    newToDo: '',
};
