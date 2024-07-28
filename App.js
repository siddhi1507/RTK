import React, { useState } from 'react';
import Header from './components/Header';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';
import styles from './App.module.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...shoe, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <ShoeList addToCart={addToCart} />
        <Cart cart={cart} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
};

export default App;