import React, { memo } from 'react';
import ToggleAllToDoList from './ToggleAllToDoList/ToggleAllToDoList';

interface PropsToDoList {
    toDoItemComponent: JSX.Element[];
    toggleAllReadiness: () => void;
}

const ToDoList: React.FC<PropsToDoList> = ({ toDoItemComponent, toggleAllReadiness }: PropsToDoList) => {
    return (
        <section className="toDoList hidden">
            <ToggleAllToDoList toggleAllReadiness={toggleAllReadiness} />
            {toDoItemComponent}
        </section>
    );
};
export default memo(ToDoList);
