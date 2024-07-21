import { useNavigate } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = ({ quote, index }) => {
    const navigator = useNavigate();
    const handleHighlightedQuote = () => {
        navigator(`${index + 1}`)
    }

    return (
        <li className={classes.item}>
            <figure>
                <blockquote>"{quote.content}"</blockquote>
                <p />
                <figcaption>{quote.author}</figcaption>
            </figure>
            <button className='btn' onClick={handleHighlightedQuote}><p>View Fullscreen</p></button>
        </li>
    )
}

export default QuoteItem;