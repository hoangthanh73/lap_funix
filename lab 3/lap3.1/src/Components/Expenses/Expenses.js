import './Expenses.css';

import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItems from './ExpenseItems';

const Expenses = () => {
    return (
        <div className="expenses">
            <ExpenseFilter />
            <ExpenseItems />
        </div>
    )
};

export default Expenses;