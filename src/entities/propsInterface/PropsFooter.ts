export interface PropsFooter {
    completedCounter: number | undefined;
    notCompletedCounter: number | undefined;
    onClearAllCompleted: () => void;
    onToggleFilter: (value: 'all' | 'done' | 'not_done') => void;
}
