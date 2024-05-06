// import {useDispatch, useSelector} từ thư viện react-redux
import { useSelector, useDispatch } from 'react-redux';

// import action type từ store
import { INCREMENT, DECREMENT } from '../store';

import classes from './Counter.module.css';

const Counter = () => {
  // gán giá trị dispatch = useDispatch
  const dispatch = useDispatch();

  // gán giá trị bằng giá trị counter từ store
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  }

  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  }

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
