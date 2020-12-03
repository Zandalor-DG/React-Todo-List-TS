import { ActionEnumPayloadToDo } from '../../store/toDoReducer/actionTypesToDo';
import { ToDoItem } from '../state/ToDoItem';

export interface PropsAppContainer {
    toDoList: ToDoItem[];
    filterType: 'all' | 'done' | 'not_done';
    toggleFilterToDo: (payload: 'all' | 'done' | 'not_done') => ActionEnumPayloadToDo;
}
