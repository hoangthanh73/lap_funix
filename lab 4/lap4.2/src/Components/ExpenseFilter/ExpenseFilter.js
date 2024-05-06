import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    // thay đổi giá trị bộ lọc khi onchange event xảy ra
    const changeYearHandle = (e) => props.selectedYear(e.target.value);

    return (
        <div className="expense-filter">

            <label htmlFor="select-year">Filter by year</label>

            <select id="select-year" onChange={changeYearHandle}>
                <option value=''>choose year</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
            </select>
        </div>
    );
};

export default ExpenseFilter;