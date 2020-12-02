import React, { memo, useContext } from 'react';
import { DataContext } from '../../../Data/DataContext';
import { ActionType } from '../../../entities/action/Action';
import { ToDoItem } from '../../../entities/state/ToDoItem';
import ToDoList from './ToDoList';
import ToDoItems from './toDoItems/ToDoItems';
import { PropsToDoListContainer } from '../../../entities/propsInterface/PropsToDoListContainer';

const ToDoListContainer: React.FC<PropsToDoListContainer> = ({
    toDoItems,
    notCompletedCounter,
}: PropsToDoListContainer) => {
    const { state, changeState } = useContext(DataContext);

    const removeToDo = (toDoForRemove: ToDoItem) => {
        if (!changeState) {
            return;
        }

        changeState({ type: ActionType.Remove, payload: toDoForRemove });
    };

    const toggleReadiness = (toDoForChange: ToDoItem) => {
        if (!changeState) {
            return;
        }

        changeState({ type: ActionType.Toggle, payload: toDoForChange });
    };

    const toggleAllReadiness = () => {
        if (!changeState) {
            return;
        }

        changeState({ type: ActionType.ToggleAll, payload: notCompletedCounter });
    };

    const toDoItemComponent = toDoItems?.map((toDoItem) => (
        <ToDoItems
            key={toDoItem.id}
            id={toDoItem.id}
            toDoItem={toDoItem.name}
            isDone={toDoItem.isDone}
            removeToDo={removeToDo}
            toggleReadiness={toggleReadiness}
        />
    ));

    return (
        <section className="toDoList__container">
            <ToDoList {...state} toDoItemComponent={toDoItemComponent} toggleAllReadiness={toggleAllReadiness} />
        </section>
    );
};
export default memo(ToDoListContainer);
