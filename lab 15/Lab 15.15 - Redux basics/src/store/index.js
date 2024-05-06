import { createStore } from "redux";

// các const action type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// giá trị khởi tạo state 
const initialState = {
    counter: 0
}

// khởi tạo reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

// khởi tạo 1 store
const store = createStore(counterReducer);

export default store;
export { INCREMENT, DECREMENT };