import { ToDoItem } from '../state/ToDoItem';

export interface PropsAppContainer {
    toDoList: ToDoItem[];
    filterType: 'all' | 'done' | 'not_done';
}
