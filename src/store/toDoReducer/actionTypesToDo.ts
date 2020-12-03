import { ToDoItem } from '../../entities/state/ToDoItem';

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
    payload: string | undefined;
};

export type ActionEnumPayloadToDo = {
    type: ActionTypeToDo.ToggleFilter;
    payload: 'all' | 'done' | 'not_done';
};

export type ActionObjectPayloadToDo = {
    type: ActionTypeToDo.Toggle | ActionTypeToDo.Remove;
    payload: ToDoItem | undefined;
};

export type ActionNumberPayloadToDo = {
    type: ActionTypeToDo.ToggleAll;
    payload: number | undefined;
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
