import React, { memo } from 'react';
import { connect } from 'react-redux';
import { allDoneNotDone } from '../../models/allDoneNotDone';
import { StateReduxType } from '../../store/reducers';
import { clearAllCompletedToDo } from '../../store/toDoReducer/actionCreatedToDo';
import Footer from './Footer';

interface PropsFooterContainer {
    onToggleFilter: (value: allDoneNotDone) => void;
    notCompletedCounter: number;
    completedCounter: number;
    filterType: allDoneNotDone;
    clearAllCompletedToDo: () => void;
}

const FooterContainer: React.FC<PropsFooterContainer> = ({
    onToggleFilter,
    notCompletedCounter,
    completedCounter,
    filterType,
    clearAllCompletedToDo,
}: PropsFooterContainer) => {
    return (
        <section className="toDoList__container">
            <Footer
                notCompletedCounter={notCompletedCounter}
                completedCounter={completedCounter}
                onToggleFilter={onToggleFilter}
                clearAllCompletedToDo={clearAllCompletedToDo}
                filterType={filterType}
            />
        </section>
    );
};

const mapStateToProps = (state: StateReduxType) => ({
    filterType: state.toDo.filterType,
});
export default memo(connect(mapStateToProps, { clearAllCompletedToDo })(FooterContainer));
