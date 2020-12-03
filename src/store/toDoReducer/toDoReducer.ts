import React from 'react';
import { initialState } from '../../Data/InitialState';
import { ActionToDo, ActionTypeToDo } from './actionTypesToDo';
import { ToDoState } from '../../entities/state/ToDoState';

const toDoReducer: React.Reducer<ToDoState, ActionToDo> = (state = initialState, action): ToDoState => {
    switch (action.type) {
        case ActionTypeToDo.Add: {
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
        case ActionTypeToDo.Change: {
            return { ...state, newToDo: action.payload };
        }
        case ActionTypeToDo.Remove: {
            return {
                ...state,
                toDoList: [...state.toDoList.filter((toDo) => toDo.id !== action.payload?.id)],
            };
        }
        case ActionTypeToDo.Toggle: {
            return {
                ...state,
                toDoList: [
                    ...state.toDoList.map((toDo) =>
                        toDo.id !== action.payload?.id ? toDo : { ...toDo, isDone: !toDo.isDone },
                    ),
                ],
            };
        }
        case ActionTypeToDo.ToggleAll: {
            if (!action.payload) {
                return { ...state, toDoList: [...state.toDoList.filter((toDo) => (toDo.isDone = false))] };
            }
            return { ...state, toDoList: [...state.toDoList.filter((toDo) => (toDo.isDone = true))] };
        }
        case ActionTypeToDo.ToggleFilter: {
            return { ...state, toDoList: [...state.toDoList], filterType: action.payload };
        }
        case ActionTypeToDo.ClearAllCompleted: {
            return { ...state, toDoList: [...state.toDoList.filter((toDo) => !toDo.isDone)] };
        }

        default:
            return { ...state, toDoList: [...state.toDoList] };
    }
};

export default toDoReducer;
