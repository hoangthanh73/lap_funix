import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import classes from './HighlightedQuote.module.css';

const HighlightedQuote = () => {
    const id = useParams().id;
    const { data } = useFetch('https://lap-funix-database-default-rtdb.asia-southeast1.firebasedatabase.app/quote%20app.json');

    return (
        Object.values(data) && Object.values(data).length &&
        < div className={classes.quote} >
            <p>"{Object.values(data)[id - 1].content}"</p>
            <figcaption>{Object.values(data)[id - 1].author}</figcaption>
        </ div>
    )
}

export default HighlightedQuote;