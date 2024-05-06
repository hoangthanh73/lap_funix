import { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal.js";
import CartItem from "./CartItem";
import CartContext from '../../store/cart-context.js';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className={styles["cart-items"]}>
                {cartCtx.items.map(
                    el => <CartItem key={el.id} item={el} />
                )}
            </ul>
            <div className={styles.total}>
                <p>Total Amount</p>
                <p>{totalAmount}</p>
            </div>
            <div className={styles.actions}>
                <button className={styles["button-alt"]} onClick={props.onHideCart}>Close</button>
                <button className={styles["button"]}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;