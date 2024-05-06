const AddNewExpense = (props) => {
    const openFormHandler = (e) => {
        e.preventDefault();
        props.changeFormValue();
    }
    return (
        <div className="new-expense__actions">
            <button className="btn-submit" onClick={openFormHandler}>Add New Expense</button>
        </div>);
}

export default AddNewExpense;