import React, { memo } from 'react';
import ToDoList from './ToDoList';
import ToDoItems from './toDoItems/ToDoItems';
import { connect } from 'react-redux';
import { removeToDo, toggleToDo, toggleAllToDo } from '../../../store/toDoReducer/actionCreatedToDo';
import { StateReduxType } from '../../../store/reducers';
import { ToDo } from '../../../models/ToDoItem';

interface PropsToDoListContainer {
    toDoItems: ToDo[];
    notCompletedCounter: number;
    removeToDo: (payload: ToDo) => void;
    toggleToDo: (payload: ToDo) => void;
    toggleAllToDo: (payload: number) => void;
}

const ToDoListContainer: React.FC<PropsToDoListContainer> = ({
    toDoItems,
    notCompletedCounter,
    removeToDo,
    toggleToDo,
    toggleAllToDo,
}: PropsToDoListContainer) => {
    const onRemoveToDo = (toDoForRemove: ToDo) => {
        removeToDo(toDoForRemove);
    };

    const toggleReadiness = (toDoForChange: ToDo) => {
        toggleToDo(toDoForChange);
    };

    const toggleAllReadiness = () => {
        toggleAllToDo(notCompletedCounter);
    };

    const toDoItemComponent = toDoItems?.map((toDoItem) => (
        <ToDoItems
            key={toDoItem.id}
            id={toDoItem.id}
            toDoName={toDoItem.name}
            isDone={toDoItem.isDone}
            onRemoveToDo={onRemoveToDo}
            toggleReadiness={toggleReadiness}
        />
    ));

    return (
        <section className="toDoList__container">
            <ToDoList toDoItemComponent={toDoItemComponent} toggleAllReadiness={toggleAllReadiness} />
        </section>
    );
};

const mapStateToProps = (state: StateReduxType) => ({
    state: state.toDo,
});
export default memo(connect(mapStateToProps, { removeToDo, toggleToDo, toggleAllToDo })(ToDoListContainer));
