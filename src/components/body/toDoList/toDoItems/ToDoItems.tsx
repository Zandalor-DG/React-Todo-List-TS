import React, { memo } from 'react';
import { ToDo } from '../../../../models/ToDoItem';

interface PropsToDoItem {
    id: string;
    toDoName: string;
    isDone: boolean;
    onRemoveToDo: (toDoForRemove: ToDo) => void;
    toggleReadiness: (toDoForChange: ToDo) => void;
}

const ToDoItem: React.FC<PropsToDoItem> = ({
    id,
    toDoName: toDoName,
    isDone,
    onRemoveToDo,
    toggleReadiness,
}: PropsToDoItem) => {
    return (
        <div>
            <ul className="toDoList__list">
                <li className="toDoList__item">
                    <div className="toDoList__view">
                        <input
                            type="checkbox"
                            className="toDoList__toggle"
                            onChange={() => toggleReadiness({ id: id, name: toDoName, isDone: isDone })}
                            name={toDoName}
                            checked={isDone}
                        />
                        <label className="toDoList__text">{toDoName}</label>
                        <button
                            className="toDoList__destroy"
                            onClick={() => onRemoveToDo({ id: id, name: toDoName, isDone: isDone })}
                        ></button>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default memo(ToDoItem);
