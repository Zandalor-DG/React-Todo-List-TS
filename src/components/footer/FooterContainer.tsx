import React, { memo } from 'react';
import { connect } from 'react-redux';
import { PropsFooterContainer } from '../../entities/propsInterface/PropsFooterContainer';
import { StateReduxType } from '../../store/reducers';
import { clearAllCompletedToDo } from '../../store/toDoReducer/actionCreatedToDo';
import Footer from './Footer';

const FooterContainer: React.FC<PropsFooterContainer> = ({
    onToggleFilter,
    notCompletedCounter,
    completedCounter,
    filterType,
    clearAllCompletedToDo,
}: PropsFooterContainer) => {
    const onClearAllCompleted = () => {
        clearAllCompletedToDo();
    };

    return (
        <section className="toDoList__container">
            <Footer
                notCompletedCounter={notCompletedCounter}
                completedCounter={completedCounter}
                onToggleFilter={onToggleFilter}
                onClearAllCompleted={onClearAllCompleted}
                filterType={filterType}
            />
        </section>
    );
};

const mapStateToProps = (state: StateReduxType) => ({
    filterType: state.toDo.filterType,
});
export default memo(connect(mapStateToProps, { clearAllCompletedToDo })(FooterContainer));
