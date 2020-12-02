import React, { memo, useReducer } from 'react';
import './App.css';
import { DataContext } from './Data/DataContext';
import { initialState } from './Data/InitialState';
import { Action, ContextState } from './entities/action/Action';
import { State } from './entities/state/State';
import { toDoReducer } from './Redux/Reducer/toDoReducer';
import App from './components/App';
import { ToDoListMemo } from './entities/propsInterface/PropsApp';
import { connect } from 'react-redux';
import { toggleFilterToDo } from './Redux/Reducer/toDoReducer';

const AppContainer: React.FC<> = ({ toDoList, filterType }) => {
    const [state, changeState] = useReducer<React.Reducer<State, Action>>(toDoReducer, initialState);

    const contextState: ContextState = {
        state,
        changeState,
    };

    const todoList: ToDoListMemo = React.useMemo(() => {
        const notCompletedCounter = state?.toDoList.filter((a) => !a.isDone).length;
        const completedCounter = state?.toDoList.filter((a) => a.isDone).length;
        switch (state.filterType) {
            case 'all':
                return { toDoItems: state.toDoList, notCompletedCounter, completedCounter };
            case 'done':
                return {
                    toDoItems: state.toDoList.filter((item) => item.isDone),
                    notCompletedCounter,
                    completedCounter,
                };
            case 'not_done':
                return {
                    toDoItems: state.toDoList.filter((item) => !item.isDone),
                    notCompletedCounter,
                    completedCounter,
                };
            default:
                return { toDoItems: state.toDoList, notCompletedCounter, completedCounter };
        }
    }, [state?.toDoList, state?.filterType]);

    const { toDoItems, notCompletedCounter, completedCounter } = todoList;

    const onToggleFilter = (value: 'all' | 'done' | 'not_done') => {
        toggleFilterToDo(value);
    };

    return (
        <DataContext.Provider value={contextState}>
            <div className="toDo__App">
                <App
                    toDoItems={toDoItems}
                    notCompletedCounter={notCompletedCounter}
                    completedCounter={completedCounter}
                    onToggleFilter={onToggleFilter}
                />
            </div>
        </DataContext.Provider>
    );
};

const mapStateToProps = (state: State) => ({
    toDoList: state?.toDoList,
    filterType: state?.filterType,
});
export default memo(connect(mapStateToProps, { toggleFilterToDo })(AppContainer));
