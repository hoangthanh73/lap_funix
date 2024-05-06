import styles from "../Styles/ErrorModal.module.css";
import Card from "./Card.js";
import Button from "./Button.js";

const ErrorModal = (props) => {
    return (
        <div className={styles.backdrop}>
            <Card className={styles.modal}>
                <div className={styles.header}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.content} >
                    <p>{props.message}</p>
                    <div className={styles.actions}>
                        <Button onClick={props.onConfirm}>Okay</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ErrorModal;