import { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const [title, setTitle] = useState('');
    const changeTitle = () => {
        setTitle('Updated!');
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__desc">
                <h2 className="expense-item__title">{title || props.title}</h2>
                <p className="expense-item__amount">${props.amount}</p>
            </div>
            <button className="change-title" onClick={changeTitle}>Change Title</button>
        </div>
    );
}

export default ExpenseItem;