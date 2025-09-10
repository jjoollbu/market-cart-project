import { useState } from 'react'
import React from 'react';
import './App.css'

const initialProducts = [
  { id: 1, name: "Café", price: 30 },
  { id: 2, name: "Feijão", price: 22.50 },
  { id: 3, name: "Feijão", price: 10.25 }
]
function App() {
  const [cart, setCart] = useState([]);

  const handleAddCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>

    </div>
  );
}

export default App;