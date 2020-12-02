import { ToDoItem } from './ToDoItem';

export type State = {
    filterType: 'all' | 'done' | 'not_done';
    toDoList: ToDoItem[];
    newToDo: string | undefined;
};
