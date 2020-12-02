import { ToDoItem } from '../state/ToDoItem';

export interface PropsToDoListContainer {
    toDoItems: ToDoItem[];
    notCompletedCounter: number;
}
