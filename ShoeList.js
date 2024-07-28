import React from 'react';
import styles from './ShoeList.module.css';

const shoes = [
  { id: 1, name: 'White Casual Sneaker', price: 70, image: '/images/bye.jpg' },
  { id: 2, name: "MACTREE Men's Mid Top Ankle Boots", price: 90, image: '/images/hee.jpg' },
  { id: 3, name: 'Running Shoes', price: 85, image: 'images/hii.jpg' },
  { id: 4, name: 'Leather Loafers', price: 110, image: 'images/n.jpg' },
  { id: 5, name: 'Hiking Boots', price: 130, image: 'images/w.jpg' },
  { id: 6, name: 'Slip-On Shoes', price: 65, image: 'images/wow.jpg' },
];

const ShoeList = ({ addToCart }) => {
  return (
    <div className={styles.shoeList}>
      {shoes.map(shoe => (
        <div key={shoe.id} className={styles.shoeItem}>
          <img src={shoe.image} alt={shoe.name} className={styles.shoeImage} />
          <div className={styles.shoeInfo}>
            <h3>{shoe.name}</h3>
            <p>${shoe.price}</p>
            <button onClick={() => addToCart(shoe)} className={styles.addButton}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoeList;