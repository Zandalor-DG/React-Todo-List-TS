import React from 'react';
import { PropsToDoItem } from '../../../../entities/propsInterface/PropsToDoItem';

const ToDoItem: React.FC<PropsToDoItem> = ({ toDoItem, isDone, removeToDo, toggleReadiness }: PropsToDoItem) => {
    return (
        <div>
            <ul className="toDoList__list">
                <li className="toDoList__item">
                    <div className="toDoList__view">
                        <input
                            type="checkbox"
                            className="toDoList__toggle"
                            onChange={() => toggleReadiness({ name: toDoItem, isDone: isDone })}
                            defaultChecked={isDone}
                        />
                        <label className="toDoList__text">{toDoItem}</label>
                        <button
                            className="toDoList__destroy"
                            onClick={() => removeToDo({ name: toDoItem, isDone: isDone })}
                        ></button>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default ToDoItem;
