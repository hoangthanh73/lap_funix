import './Expenses.css';
import { useState } from 'react';

import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItems from './ExpenseItems';

const Expenses = (props) => {
    // state lưu giá trị để lọc
    const [filteredYear, setFilteredYear] = useState('');

    // hàm thay đổi giá trị lọc (selectedYear)
    const selectedYear = (year) => setFilteredYear(year);

    // mảng đã được lọc (filteredData)
    const filteredData = filteredYear ?
        props.data.filter(el => el.date.getFullYear() == filteredYear)
        : props.data

    return (
        <div className="expenses" >
            <ExpenseFilter
                data={props.data}
                selectedYear={selectedYear} />
            <ExpenseItems filteredData={filteredData} />
        </div>
    )
};

export default Expenses;