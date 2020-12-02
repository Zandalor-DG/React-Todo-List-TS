import { ToDoItem } from '../state/ToDoItem';

export interface PropsToDoListContainer {
    toDoItems: ToDoItem[];
    notCompletedCounter: number;
    removeToDo: (payload: ToDoItem | undefined) => void;
    toggleToDo: (payload: ToDoItem | undefined) => void;
    toggleAllToDo: (payload: number | undefined) => void;
}
