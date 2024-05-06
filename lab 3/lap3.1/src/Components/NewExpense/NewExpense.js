import { useState } from 'react';

import './NewExpense.css';

const ExpenseForm = () => {

    // create state for component
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
  
        // delete input field
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
    }

    return (
        <div className="new-expense">
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onInput={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min=".01" step=".01" value={enteredAmount} onInput={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2020-01-01" max="2024-01-01" value={enteredDate} onInput={dateChangeHandler} />
                    </div>
                    <div className="new-expense__actions">
                        <button className="btn-submit" onClick={submitHandler}>Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;