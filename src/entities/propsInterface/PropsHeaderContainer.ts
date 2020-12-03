import { ActionStringPayloadToDo } from '../../store/toDoReducer/actionTypesToDo';

export interface PropsHeaderContainer {
    newToDo: string | undefined;
    addToDo: (payload: string | undefined) => ActionStringPayloadToDo;
    changeToDo: (payload: string | undefined) => ActionStringPayloadToDo;
}
