import React from 'react';
import { act } from 'react-dom/test-utils';
import { initialState } from '../../Data/InitialState';
import { Action, ActionType } from '../../entities/action/Action';
import { State } from '../../entities/state/State';
import { ToDoItem } from '../../entities/state/ToDoItem';

export const toDoReducer: React.Reducer<State, Action> = (state = initialState, action): State => {
    switch (action.type) {
        case ActionType.Add: {
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    {
                        id: `f${(+new Date()).toString(16)}`,
                        name: action.payload,
                        isDone: false,
                    },
                ],
            };
        }
        case ActionType.Change: {
            return { ...state, newToDo: action.payload };
        }
        case ActionType.Remove: {
            return {
                ...state,
                toDoList: [...state.toDoList.filter((toDo) => toDo.id !== action.payload.id)],
            };
        }
        case ActionType.Toggle: {
            return {
                ...state,
                toDoList: [
                    ...state.toDoList.map((toDo) =>
                        toDo.id !== action.payload.id ? toDo : { ...toDo, isDone: !toDo.isDone },
                    ),
                ],
            };
        }
        case ActionType.ToggleAll: {
            if (!action.payload) {
                return { ...state, toDoList: [...state.toDoList.filter((toDo) => (toDo.isDone = false))] };
            }
            return { ...state, toDoList: [...state.toDoList.filter((toDo) => (toDo.isDone = true))] };
        }
        case ActionType.ToggleFilter: {
            return { ...state, toDoList: [...state.toDoList], filterType: action.payload };
        }
        case ActionType.ClearAllCompleted: {
            return { ...state, toDoList: [...state.toDoList.filter((toDo) => !toDo.isDone)] };
        }

        default:
            throw new Error('Unexpected action');
    }
};

export const addToDo = (payload: string | undefined): void => {
    type: ActionType.Add, payload;
};
export const changeToDo = (payload: string | undefined): void => {
    type: ActionType.Change, payload;
};
export const removeToDo = (payload: ToDoItem | undefined): void => {
    type: ActionType.Remove, payload;
};
export const toggleToDo = (payload: ToDoItem | undefined): void => {
    type: ActionType.Toggle, payload;
};
export const toggleAllToDo = (payload: number | undefined): void => {
    type: ActionType.ToggleAll, payload;
};
export const toggleFilterToDo = (payload: 'all' | 'done' | 'not_done'): void => {
    type: ActionType.ToggleFilter, payload;
};
export const clearAllCompletedToDo = (): void => {
    type: ActionType.ClearAllCompleted;
};
