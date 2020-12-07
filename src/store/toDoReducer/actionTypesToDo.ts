import { allDoneNotDone } from '../../models/allDoneNotDone';
import { ToDo } from '../../models/ToDoItem';

export enum ActionTypeToDo {
    Add = 'Add',
    Change = 'Change',
    Remove = 'Remove',
    Toggle = 'Toggle',
    ToggleFilter = 'ToggleFilter',
    ClearAllCompleted = 'ClearAllCompleted',
    ToggleAll = 'ToggleAllReadiness',
}

export type ActionStringPayloadToDo = {
    type: ActionTypeToDo.Add | ActionTypeToDo.Change;
    payload: string;
};

export type ActionEnumPayloadToDo = {
    type: ActionTypeToDo.ToggleFilter;
    payload: allDoneNotDone;
};

export type ActionObjectPayloadToDo = {
    type: ActionTypeToDo.Toggle | ActionTypeToDo.Remove;
    payload: ToDo;
};

export type ActionNumberPayloadToDo = {
    type: ActionTypeToDo.ToggleAll;
    payload: number;
};

export type ActionVoidPayloadToDo = {
    type: ActionTypeToDo.ClearAllCompleted;
};

export type ActionToDo =
    | ActionStringPayloadToDo
    | ActionObjectPayloadToDo
    | ActionVoidPayloadToDo
    | ActionEnumPayloadToDo
    | ActionNumberPayloadToDo;
