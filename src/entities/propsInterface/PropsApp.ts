import { ToDoItem } from './../state/ToDoItem';
export interface PropsApp {
    toDoItems: ToDoItem[];
    notCompletedCounter: number;
    completedCounter: number;
    onToggleFilter: (value: 'all' | 'done' | 'not_done') => void;
}

export interface ToDoListMemo {
    toDoItems: ToDoItem[];
    notCompletedCounter: number;
    completedCounter: number;
}
