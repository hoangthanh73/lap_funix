import { useState } from 'react';
import './NewExpense.css';
import AddNewExpense from './AddNewExpense';

const ExpenseForm = (props) => {
    console.log(props);

    // create state for component
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [openForm, setOpenForm] = useState(false);

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
        props.addExpenseData(expenseData);
        changeFormValue();
        console.log(expenseData.length);

        // delete input field
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const changeFormValue = () => setOpenForm(!openForm);

    const cancelHandler = (event) => {
        event.preventDefault();
        changeFormValue();
    }

    return (
        <div className="new-expense">
            {openForm ?
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
                            <button className="btn-submit" onClick={cancelHandler}>Cancel</button>
                            <button className="btn-submit" onClick={submitHandler}>Add Expense</button>
                        </div>
                    </div>
                </form> :
                <form>
                    <AddNewExpense changeFormValue={changeFormValue} />
                </form>}
        </div>
    )
}

export default ExpenseForm;