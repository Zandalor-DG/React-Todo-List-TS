import { ToDoItem } from '../state/ToDoItem';

export interface PropsToDoItem {
    id: string | undefined;
    toDoItem: string | undefined;
    isDone: boolean;
    onRemoveToDo: (toDoForRemove: ToDoItem) => void;
    toggleReadiness: (toDoForChange: ToDoItem) => void;
}
