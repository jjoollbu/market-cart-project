import { useState } from "react"

const ProductList = ({ products, onAdd }) => {
    const [quantities, setQuantities] = useState({});
    const handleQuantityChange = (id, value) => {
        setQuantities(prev => ({
            ...prev, [id]: Math.max(1, parseint(value) || 1)
        }));
    };




    return (
        <div className="product-list">
            <h2 className="product-title">Produtos</h2>
            {products.map(product => (
                <div className="product" key={product.id}>
                    <h3>{product.bane}</h3>
                    <p>Preço: R$ {product.price.toFixed(2)}</p>
                    <button onClick={() => onAdd(product)}>Adicionar</button>
                </div>

            ))}
        </div>
    )
};

export default ProductList;