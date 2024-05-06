import './Expenses.css';
import './ExpenseItems.css';
import ExpenseItem from './ExpenseItem';

const ExpenseItems = (props) => {
    return (
        <div className="expense-items">
            {
                props.filteredData.length !== 0 ?
                    props.filteredData.map(el => {
                        return (
                            <ExpenseItem
                                key={el.id}
                                date={el.date}
                                title={el.title}
                                amount={el.amount} />
                        )
                    }) : <div className="expense-notfound"><p>Found no expenses</p></div>
            }
        </div>
    );
}

export default ExpenseItems;