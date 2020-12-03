import { ToDoItem } from './ToDoItem';

export type ToDoState = {
    filterType: 'all' | 'done' | 'not_done';
    toDoList: ToDoItem[];
    newToDo: string | undefined;
};
