import React from "react";

const Cart = ({ cart }) => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
        <div>
            <h2>Carrinho</h2>
            {cart.length === 0 ? (
                <p>Carrinho vazio</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Quantidade: {item.quantity}</p>
                            <p>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                    <h3>Total: R${total.toFixed(2)}</h3>
                </div>

            )}
        </div>
    )
}
export default Cart;