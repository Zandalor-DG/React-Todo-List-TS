import React, { memo } from 'react';

interface PropsToggleAllToDoList {
    toggleAllReadiness: () => void;
}

const ToggleAllToDoList: React.FC<PropsToggleAllToDoList> = ({ toggleAllReadiness }: PropsToggleAllToDoList) => {
    return (
        <div className="toDoList__toggleAll">
            <input type="checkbox" className="toDoList__toggle-all" id="toggle-all" onChange={toggleAllReadiness} />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </div>
    );
};
export default memo(ToggleAllToDoList);
