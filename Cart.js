import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ cart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id} className={styles.cartItem}>
          <img src={item.image} alt={item.name} className={styles.thumbnail} />
          <div className={styles.itemInfo}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
          <div className={styles.quantity}>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Cart;