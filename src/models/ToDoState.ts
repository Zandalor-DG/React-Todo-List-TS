import { ToDo } from './ToDoItem';

export type ToDoState = {
    filterType: 'all' | 'done' | 'not_done';
    toDoList: ToDo[];
    newToDo: string;
};
