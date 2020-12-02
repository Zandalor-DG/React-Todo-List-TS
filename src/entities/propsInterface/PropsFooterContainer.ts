export interface PropsFooterContainer {
    onToggleFilter: (value: 'all' | 'done' | 'not_done') => void;
    notCompletedCounter: number;
    completedCounter: number;
}
