import React from 'react';
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label>{props.label}
                <input {...props.input} ref={ref} />
            </label>
        </div >
    )
})

export default Input;