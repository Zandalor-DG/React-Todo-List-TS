import {
    ActionTypeToDo,
    ActionStringPayloadToDo,
    ActionObjectPayloadToDo,
    ActionNumberPayloadToDo,
    ActionEnumPayloadToDo,
    ActionVoidPayloadToDo,
} from './actionTypesToDo';
import { ToDoItem } from '../../entities/state/ToDoItem';

export const addToDo = (payload: string | undefined): ActionStringPayloadToDo => ({
    type: ActionTypeToDo.Add,
    payload,
});

export const changeToDo = (payload: string | undefined): ActionStringPayloadToDo => ({
    type: ActionTypeToDo.Change,
    payload,
});

export const removeToDo = (payload: ToDoItem | undefined): ActionObjectPayloadToDo => ({
    type: ActionTypeToDo.Remove,
    payload,
});

export const toggleToDo = (payload: ToDoItem | undefined): ActionObjectPayloadToDo => ({
    type: ActionTypeToDo.Toggle,
    payload,
});
export const toggleAllToDo = (payload: number | undefined): ActionNumberPayloadToDo => ({
    type: ActionTypeToDo.ToggleAll,
    payload,
});
export const toggleFilterToDo = (payload: 'all' | 'done' | 'not_done'): ActionEnumPayloadToDo => ({
    type: ActionTypeToDo.ToggleFilter,
    payload,
});
export const clearAllCompletedToDo = (): ActionVoidPayloadToDo => ({
    type: ActionTypeToDo.ClearAllCompleted,
});
