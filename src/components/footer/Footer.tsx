import React, { memo } from 'react';
import classnames from 'classnames';
import { allDoneNotDone } from '../../models/allDoneNotDone';

interface PropsFooter {
    completedCounter: number;
    notCompletedCounter: number;
    clearAllCompletedToDo: () => void;
    onToggleFilter: (value: allDoneNotDone) => void;
    filterType: allDoneNotDone;
}

const Footer: React.FC<PropsFooter> = ({
    onToggleFilter,
    notCompletedCounter = 0,
    completedCounter = 0,
    filterType,
    clearAllCompletedToDo,
}: PropsFooter) => {
    const isAllActive = filterType === 'all';
    const isDoneActive = filterType === 'done';
    const isNotDoneActive = filterType === 'not_done';

    if (completedCounter + notCompletedCounter === 0) {
        return null;
    }
    return (
        <section className="footer hidden">
            <span className="footer__todo-count">
                <strong>{notCompletedCounter} </strong>
                item left
            </span>
            <ul className="footer__filters">
                <li>
                    <a
                        className={classnames('footer__text', { 'footer__text--selected': isAllActive })}
                        onClick={() => onToggleFilter('all')}
                    >
                        all
                    </a>
                </li>
                <li>
                    <a
                        className={classnames('footer__text', { 'footer__text--selected': isNotDoneActive })}
                        onClick={() => onToggleFilter('not_done')}
                    >
                        active
                    </a>
                </li>
                <li>
                    <a
                        className={classnames('footer__text', { 'footer__text--selected': isDoneActive })}
                        onClick={() => onToggleFilter('done')}
                    >
                        completed
                    </a>
                </li>
            </ul>
            <button className="footer__clear-completed" onClick={clearAllCompletedToDo}>
                Clear completed[<span className="footer__completed-count">{completedCounter}</span>]
            </button>
        </section>
    );
};
export default memo(Footer);
