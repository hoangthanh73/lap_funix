import { useRef, useState } from 'react';

import classes from './QuoteForm.module.css';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

const QuoteForm = () => {
    const authorRef = useRef();
    const contentRef = useRef();

    const [loading, setLoading] = useState(false);

    const handleAddQuote = (event) => {
        event.preventDefault();
        if (!authorRef.current.value.trim() || !contentRef.current.value.trim()) {
            alert('test faluid')
        } else {
            const postQuote = async (url, data) => {
                setLoading(true);
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                setLoading(false);
                return response.json();
            }

            postQuote('https://lap-funix-database-default-rtdb.asia-southeast1.firebasedatabase.app/quote%20app.json',
                {
                    author: authorRef.current.value,
                    content: contentRef.current.value
                }
            )

            authorRef.current.value = '';
            contentRef.current.value = '';
        }
    }

    return (
        <div>
            <Card>
                <form className={classes.form} onSubmit={handleAddQuote}>
                    {loading && <div className={`${classes.loading}`}><LoadingSpinner /></div>}
                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' name='author' id='author' ref={authorRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='content'>Text</label>
                        <textarea rows='6' name='content' id='content' ref={contentRef} />
                    </div>
                    <div className={classes.actions}>
                        <button className='btn'>Add Quote</button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default QuoteForm;