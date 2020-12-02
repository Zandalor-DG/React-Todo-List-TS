import React, { memo } from 'react';
import { PropsFooter } from '../../entities/propsInterface/PropsFooter';

const Footer: React.FC<PropsFooter> = ({
    onToggleFilter,
    notCompletedCounter = 0,
    completedCounter = 0,
    onClearAllCompleted,
}: PropsFooter) => {
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
                <li className="footer__text">
                    <a onClick={() => onToggleFilter('all')}>all</a>
                </li>
                <li className="footer__text">
                    <a onClick={() => onToggleFilter('not_done')}>active</a>
                </li>
                <li className="footer__text">
                    <a onClick={() => onToggleFilter('done')}>completed</a>
                </li>
            </ul>
            <button className="footer__clear-completed" onClick={onClearAllCompleted}>
                Clear completed[<span className="footer__completed-count">{completedCounter}</span>]
            </button>
        </section>
    );
};
export default memo(Footer);
