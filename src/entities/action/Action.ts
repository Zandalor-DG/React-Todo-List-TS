import { Dispatch } from 'react';
import { State } from '../state/State';
import { ToDoItem } from '../state/ToDoItem';

export enum ActionType {
    Add = 'Add',
    Change = 'Change',
    Remove = 'Remove',
    Toggle = 'Toggle',
    ToggleFilter = 'ToggleFilter',
    ClearAllCompleted = 'ClearAllCompleted',
    ToggleAll = 'ToggleAllReadiness',
}

type ActionStringPayload = {
    type: ActionType.Add | ActionType.Change;
    payload: string | undefined;
};

type ActionEnumPayLoad = {
    type: ActionType.ToggleFilter;
    payload: 'all' | 'done' | 'not_done';
};

type ActionObjectPayload = {
    type: ActionType.Toggle | ActionType.Remove;
    payload: ToDoItem;
};

type ActionNumberPayload = {
    type: ActionType.ToggleAll;
    payload: number;
};

type ActionVoidPayload = {
    type: ActionType.ClearAllCompleted;
};

export type Action =
    | ActionStringPayload
    | ActionObjectPayload
    | ActionVoidPayload
    | ActionEnumPayLoad
    | ActionNumberPayload;

export type ContextState = {
    state: State;
    changeState: Dispatch<Action>;
};
