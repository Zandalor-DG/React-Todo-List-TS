import React, { memo } from 'react';
import { allDoneNotDone } from '../models/allDoneNotDone';
import { ToDo } from '../models/ToDoItem';
import ToDoListContainer from './body/toDoList/ToDoListContainer';
import FooterContainer from './footer/FooterContainer';
import HeaderContainer from './header/HeaderContainer';

interface PropsApp {
    toDoItems: ToDo[];
    notCompletedCounter: number;
    completedCounter: number;
    onToggleFilter: (value: allDoneNotDone) => void;
}

const App: React.FunctionComponent<PropsApp> = ({
    toDoItems,
    onToggleFilter,
    notCompletedCounter,
    completedCounter,
}: PropsApp) => {
    return (
        <div className="toDo__App">
            <HeaderContainer />
            <ToDoListContainer toDoItems={toDoItems} notCompletedCounter={notCompletedCounter} />
            <FooterContainer
                onToggleFilter={onToggleFilter}
                notCompletedCounter={notCompletedCounter}
                completedCounter={completedCounter}
            />
        </div>
    );
};

export default memo(App);
