import React, { memo } from 'react';
import { PropsApp } from '../entities/propsInterface/PropsApp';
import ToDoListContainer from './body/toDoList/ToDoListContainer';
import FooterContainer from './footer/FooterContainer';
import HeaderContainer from './header/HeaderContainer';

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
