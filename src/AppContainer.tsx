import React, { memo } from 'react';
import './App.css';
import App from './components/App';
import { connect } from 'react-redux';
import { toggleFilterToDo } from './store/toDoReducer/actionCreatedToDo';
import { StateReduxType } from './store/reducers';
import { ActionEnumPayloadToDo } from './store/toDoReducer/actionTypesToDo';
import { allDoneNotDone } from './models/allDoneNotDone';
import { ToDo } from './models/ToDoItem';

interface PropsAppContainer {
    toDoList: ToDo[];
    filterType: allDoneNotDone;
    toggleFilterToDo: (payload: allDoneNotDone) => ActionEnumPayloadToDo;
}

export interface ToDoListMemo {
    toDoItems: ToDo[];
    notCompletedCounter: number;
    completedCounter: number;
}

const AppContainer: React.FC<PropsAppContainer> = ({ toDoList, filterType, toggleFilterToDo }: PropsAppContainer) => {
    const todoListFiltered: ToDoListMemo = React.useMemo(() => {
        const notCompletedCounter = toDoList.filter((a) => !a.isDone).length;
        const completedCounter = toDoList.filter((a) => a.isDone).length;
        switch (filterType) {
            case 'all':
                return { toDoItems: toDoList, notCompletedCounter, completedCounter };
            case 'done':
                return {
                    toDoItems: toDoList.filter((item) => item.isDone),
                    notCompletedCounter,
                    completedCounter,
                };
            case 'not_done':
                return {
                    toDoItems: toDoList.filter((item) => !item.isDone),
                    notCompletedCounter,
                    completedCounter,
                };
            default:
                return { toDoItems: toDoList, notCompletedCounter, completedCounter };
        }
    }, [toDoList, filterType]);

    const { toDoItems, notCompletedCounter, completedCounter } = todoListFiltered;

    const onToggleFilter = (value: allDoneNotDone) => {
        toggleFilterToDo(value);
    };

    return (
        <div className="toDo__App">
            <App
                toDoItems={toDoItems}
                notCompletedCounter={notCompletedCounter}
                completedCounter={completedCounter}
                onToggleFilter={onToggleFilter}
            />
        </div>
    );
};

const mapStateToProps = (state: StateReduxType) => ({
    toDoList: state?.toDo.toDoList,
    filterType: state?.toDo.filterType,
});
export default memo(connect(mapStateToProps, { toggleFilterToDo })(AppContainer));
