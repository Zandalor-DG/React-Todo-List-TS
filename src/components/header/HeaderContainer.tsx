import React, { memo } from 'react';
import { connect } from 'react-redux';
import { addToDo, changeToDo } from '../../store/toDoReducer/actionCreatedToDo';
import Header from './Header';
import { StateReduxType } from '../../store/reducers';
import { ActionStringPayloadToDo } from '../../store/toDoReducer/actionTypesToDo';

interface PropsHeaderContainer {
    newToDo: string;
    addToDo: (payload: string) => ActionStringPayloadToDo;
    changeToDo: (payload: string) => ActionStringPayloadToDo;
}

const HeaderContainer: React.FC<PropsHeaderContainer> = ({ newToDo, addToDo, changeToDo }: PropsHeaderContainer) => {
    return (
        <section className="toDoList__container">
            <Header newToDo={newToDo} changeToDo={changeToDo} addToDo={addToDo} />
        </section>
    );
};

const mapStateToProps = (state: StateReduxType) => ({
    newToDo: state?.toDo.newToDo,
});
export default memo(connect(mapStateToProps, { addToDo, changeToDo })(HeaderContainer));
