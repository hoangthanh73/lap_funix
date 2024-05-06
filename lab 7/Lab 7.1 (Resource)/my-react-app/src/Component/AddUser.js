import React, { useRef } from "react";

import Card from "./Card.js";
import Button from "./Button.js";
import styles from "../Styles/AddUser.module.css";

const AddUser = (props) => {
    const nameInput = useRef(null);
    const ageInput = useRef(null);
    const error = useRef();

    // Validate data
    const validate = () => {
        let flag = true;
        if (nameInput.current.value === "" || ageInput.current.value === "") {
            error.title = "Invalid input";
            error.message = "Please enter a valid name and age (non-empty values)";
            flag = false;
            return;
        }
        if (ageInput.current.value <= 0) {
            error.title = "Invalid age";
            error.message = "Please enter a avalid age (> 0)";
            flag = false;
            return;
        }
        return flag;
    }

    return (
        <div>
            <Card className={styles.input}>
                <div>
                    <label htmlFor="name">Username</label>
                    <input id="name" ref={nameInput} type="text" placeholder="" />
                </div>
                <div>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" ref={ageInput} type="number" placeholder="" />
                </div>
                <div>
                    <Button
                        onClick={() => {
                            if (validate()) {
                                props.onAddUser(nameInput.current.value, ageInput.current.value, Math.random().toString());
                                nameInput.current.value = "";
                                ageInput.current.value = "";
                            } else {
                                props.checkError(error);
                            }
                        }}>
                        Add User
                    </Button>
                </div>
            </Card >
        </div >
    )
};

export default AddUser;