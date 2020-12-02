import React from 'react';
import { Action, ActionType } from '../entities/action/Action';
import { State } from '../entities/state/State';

export const toDoReducer: React.Reducer<State, Action> = (state, action): State => {
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
