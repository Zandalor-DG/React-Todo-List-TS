import React, { memo } from 'react';

interface PropsHeader {
    newToDo: string;
    addToDo: (toDoName: string) => void;
    changeToDo: (payload: string) => void;
}

const Header: React.FunctionComponent<PropsHeader> = ({ newToDo, changeToDo, addToDo }: PropsHeader) => {
    const onAddToDoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeToDo(event.target.value);
    };

    const onAddItem = (e: React.FormEvent<HTMLFormElement>, newToDo: string) => {
        e.preventDefault();
        addToDo(newToDo);
        changeToDo('');
    };

    return (
        <header>
            <h1 className="header__title">todos</h1>
            <form className="header__newTodo" onSubmit={(e) => onAddItem(e, newToDo)}>
                <input
                    type="text"
                    className="header__input header__input-edit"
                    placeholder="What need to be done?"
                    onChange={onAddToDoChange}
                    value={newToDo}
                />
            </form>
        </header>
    );
};
export default memo(Header);
