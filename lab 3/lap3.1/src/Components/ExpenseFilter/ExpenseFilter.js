import {useState} from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = () => {
    const [year, setYear] = useState('');
    console.log(year);

    const filterForYear = (event) => {
        setYear(event.target.value);
    }

    return (<div className="expense-filter">

        <label htmlFor="select-year">Filter by year</label>

        <select id="select-year" onChange={filterForYear}>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
        </select>
    </div>);
};

export default ExpenseFilter;