import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from '../../hooks/useFetch';

import QuoteItem from "./QuoteItem";
import classes from './QuoteList.module.css';

const QuoteList = () => {
    const param = useParams();
    const [desSort, setDesSort] = useState(false);
    const { data } = useFetch('https://lap-funix-database-default-rtdb.asia-southeast1.firebasedatabase.app/quote%20app.json');

    const quotes = data && Object.values(data);

    const reverseQuoteList = (array) => {
        return array.slice().reverse();
    }

    const handleSort = (event) => {
        event.preventDefault();
        setDesSort((prev) => setDesSort(!prev));
    }

    return (
        <div>
            <div className={classes.sorting}>
                <button onClick={handleSort}>{desSort ? 'Sort Ascending' : 'Sort Descending'}</button>
            </div>
            <ul className={classes.list}>
                {quotes && quotes.length > 0 &&
                    (!desSort ? quotes : reverseQuoteList(quotes)).map((item, index) => {
                        return <QuoteItem
                            key={!desSort ? index : quotes.length - index - 1}
                            quote={item}
                            index={!desSort ? index : quotes.length - index - 1} 
                            param={param}/>
                    })}
            </ul>
        </div>
    )
}

export default QuoteList;