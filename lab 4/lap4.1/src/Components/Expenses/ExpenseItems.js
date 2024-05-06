import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const ExpenseItems = (props) => {
    return (
        <div className="expense-items">
            {props.filteredData.map(el => {
                return (
                    <ExpenseItem
                        key={el.id}
                        date={el.date}
                        title={el.title}
                        amount={el.amount} />
                )
            })}
        </div>
    );
}

export default ExpenseItems;