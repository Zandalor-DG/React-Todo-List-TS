export interface PropsHeader {
    newToDo: string | undefined;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAddToDo: (event: React.FormEvent<HTMLFormElement>, toDoName: string | undefined) => void;
}
