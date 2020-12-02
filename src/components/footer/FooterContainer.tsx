import React, { memo, useContext } from 'react';
import { DataContext } from '../../Data/DataContext';
import { ActionType } from '../../entities/action/Action';
import { PropsFooterContainer } from '../../entities/propsInterface/PropsFooterContainer';
import Footer from './Footer';

const ToDoListContainer: React.FC<PropsFooterContainer> = ({
    onToggleFilter,
    notCompletedCounter,
    completedCounter,
}: PropsFooterContainer) => {
    const { state, changeState } = useContext(DataContext);

    const onClearAllCompleted = () => {
        if (!changeState) {
            return;
        }
        changeState({ type: ActionType.ClearAllCompleted });
    };

    return (
        <section className="toDoList__container">
            <Footer
                notCompletedCounter={notCompletedCounter}
                completedCounter={completedCounter}
                onToggleFilter={onToggleFilter}
                onClearAllCompleted={onClearAllCompleted}
                filterType={state?.filterType}
            />
        </section>
    );
};
export default memo(ToDoListContainer);
