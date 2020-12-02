import React, { memo } from 'react';
import { connect } from 'react-redux';
import { addToDo, changeToDo } from '../../Redux/Reducer/toDoReducer';
import { State } from '../../entities/state/State';
import Header from './Header';
import { PropsHeaderContainer } from '../../entities/propsInterface/PropsHeaderContainer';

const HeaderContainer: React.FC<PropsHeaderContainer> = ({ newToDo }: PropsHeaderContainer) => {
    const onAddToDoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeToDo(event.target.value);
    };

    const onAddToDo = (event: React.FormEvent<HTMLFormElement>, toDoName: string | undefined) => {
        event.preventDefault();
        addToDo(toDoName);
        changeToDo('');
    };

    return (
        <section className="toDoList__container">
            <Header newToDo={newToDo} onAddToDoChange={onAddToDoChange} onAddToDo={onAddToDo} />
        </section>
    );
};

const mapStateToProps = (state: State) => ({
    newToDo: state?.newToDo,
});
export default memo(connect(mapStateToProps, { addToDo, changeToDo })(HeaderContainer));
