import React from "react";

const Cart = ({ cart, onIncrement, onDecrement, onRemove, onClear }) => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart">
            <h2>Carrinho</h2>
            {cart.length === 0 ? (
                <p>Carrinho vazio</p>
            ) : (
                <div className="cart-container">
                    {cart.map(item => (
                        <div className="cart-item" key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Preço unitário: R$ {item.price.toFixed(2)}</p>
                            <div className="quantity-controls">
                                <button aria-label={`Diminuir ${item.name}`} onClick={() => onDecrement(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button aria-label={`Aumentar ${item.name}`} onClick={() => onIncrement(item.id)}>+</button>
                            </div>
                            <p>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>
                            <button className="remove-btn" onClick={() => onRemove(item.id)}>Remover</button>
                        </div>
                    ))}
                    <h3 className="cart-total">Total: R$ {total.toFixed(2)}</h3>
                    <button className="clear-btn" onClick={onClear}>Limpar Carrinho</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
