import { useState } from "react";

const ProductList = ({ products, onAdd }) => {
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id, value) => {
        const quantity = parseInt(value, 10);
        setQuantities(prev => ({
            ...prev,
            [id]: quantity > 0 ? quantity : 1
        }));
    };

    return (
        <div className="product-list">
            <h2>Produtos</h2>
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Preço: R$ {product.price.toFixed(2)}</p>
                    <div className="product-actions">
                        <input
                            type="number"
                            min="1"
                            value={quantities[product.id] || 1}
                            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        />
                        <button onClick={() => onAdd(product, quantities[product.id] || 1)}>Adicionar</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
