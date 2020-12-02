import React, { memo } from 'react';
import './App.css';
import { State } from './entities/state/State';
import App from './components/App';
import { ToDoListMemo } from './entities/propsInterface/PropsApp';
import { connect } from 'react-redux';
import { toggleFilterToDo } from './Redux/Reducer/toDoReducer';
import { PropsAppContainer } from './entities/propsInterface/PropsAppContainer';

const AppContainer: React.FC<PropsAppContainer> = ({ toDoList, filterType }: PropsAppContainer) => {
    const todoList: ToDoListMemo = React.useMemo(() => {
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

    const { toDoItems, notCompletedCounter, completedCounter } = todoList;

    const onToggleFilter = (value: 'all' | 'done' | 'not_done') => {
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

const mapStateToProps = (state: State) => ({
    toDoList: state?.toDoList,
    filterType: state?.filterType,
});
export default memo(connect(mapStateToProps, { toggleFilterToDo })(AppContainer));
