import { useState } from 'react'
import React from 'react';
import './App.css'
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

const initialProducts = [
  { id: 1, name: "Café", price: 30 },
  { id: 2, name: "Feijão", price: 22.50 },
  { id: 3, name: "Feijão", price: 10.25 }
]
function App() {
  const [cart, setCart] = useState([]);

  const handleAddCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };


  const handleIncrement = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const handleClearCart = () => {
    setCart([])
  }

  return (
    <div>
      <ProductList products={initialProducts} onAdd={handleAddCart} />
      <Cart
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        onClear={handleClearCart}
      />
    </div>
  );
}

export default App;