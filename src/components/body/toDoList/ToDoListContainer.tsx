import React, { memo } from 'react';
import { ToDoItem } from '../../../entities/state/ToDoItem';
import ToDoList from './ToDoList';
import ToDoItems from './toDoItems/ToDoItems';
import { PropsToDoListContainer } from '../../../entities/propsInterface/PropsToDoListContainer';
import { State } from '../../../entities/state/State';
import { connect } from 'react-redux';
import { removeToDo, toggleToDo, toggleAllToDo } from '../../../Redux/Reducer/toDoReducer';

const ToDoListContainer: React.FC<PropsToDoListContainer> = ({
    toDoItems,
    notCompletedCounter,
    removeToDo,
    toggleToDo,
    toggleAllToDo,
}: PropsToDoListContainer) => {
    const onRemoveToDo = (toDoForRemove: ToDoItem) => {
        removeToDo(toDoForRemove);
    };

    const toggleReadiness = (toDoForChange: ToDoItem) => {
        toggleToDo(toDoForChange);
    };

    const toggleAllReadiness = () => {
        toggleAllToDo(notCompletedCounter);
    };

    const toDoItemComponent = toDoItems?.map((toDoItem) => (
        <ToDoItems
            key={toDoItem.id}
            id={toDoItem.id}
            toDoItem={toDoItem.name}
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

const mapStateToProps = (state: State) => ({
    state: state,
});
export default memo(connect(mapStateToProps, { removeToDo, toggleToDo, toggleAllToDo })(ToDoListContainer));
