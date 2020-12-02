import React, { memo } from 'react';
import { PropsHeader } from '../../entities/propsInterface/PropsHeader';

const Header: React.FunctionComponent<PropsHeader> = ({ newToDo, onAddToDoChange, onAddToDo }: PropsHeader) => {
    return (
        <header>
            <h1 className="header__title">todos</h1>
            <form className="header__newTodo" onSubmit={(e) => onAddToDo(e, newToDo)}>
                <input
                    type="text"
                    className="header__input header__input-edit"
                    placeholder="What need to be done?"
                    onChange={(e) => onAddToDoChange(e)}
                    value={newToDo}
                />
            </form>
        </header>
    );
};
export default memo(Header);
