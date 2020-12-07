import {
    ActionTypeToDo,
    ActionStringPayloadToDo,
    ActionObjectPayloadToDo,
    ActionNumberPayloadToDo,
    ActionEnumPayloadToDo,
    ActionVoidPayloadToDo,
} from './actionTypesToDo';
import { allDoneNotDone } from '../../models/allDoneNotDone';
import { ToDo } from '../../models/ToDoItem';

export const addToDo = (payload: string): ActionStringPayloadToDo => ({
    type: ActionTypeToDo.Add,
    payload,
});

export const changeToDo = (payload: string): ActionStringPayloadToDo => ({
    type: ActionTypeToDo.Change,
    payload,
});

export const removeToDo = (payload: ToDo): ActionObjectPayloadToDo => ({
    type: ActionTypeToDo.Remove,
    payload,
});

export const toggleToDo = (payload: ToDo): ActionObjectPayloadToDo => ({
    type: ActionTypeToDo.Toggle,
    payload,
});
export const toggleAllToDo = (payload: number): ActionNumberPayloadToDo => ({
    type: ActionTypeToDo.ToggleAll,
    payload,
});
export const toggleFilterToDo = (payload: allDoneNotDone): ActionEnumPayloadToDo => ({
    type: ActionTypeToDo.ToggleFilter,
    payload,
});
export const clearAllCompletedToDo = (): ActionVoidPayloadToDo => ({
    type: ActionTypeToDo.ClearAllCompleted,
});
