import React, { useState } from 'react';

function Test() {
    const [products, setProducts] = useState([{
        name: "",
        description: "",
        price: "",
        nameproduct: "",
        colorproduct: "",
        sizeproduct: "",
        quantityproduct: ""
    }]);

    const addProductHandle = () => {
        setProducts([...products, {
            name: "",
            description: "",
            price: "",
            nameproduct: "",
            colorproduct: "",
            sizeproduct: "",
            quantityproduct: ""
        }]);
    };

    const handleChange = (index, field, value) => {
        setProducts(prevState => {
            let newProducts = [...prevState];
            newProducts[index][field] = value;
            return newProducts;
        });
    };

    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>
                    <input type="text" value={product.name} onChange={e => handleChange(index, "name", e.target.value)} />
                    <input type="text" value={product.description} onChange={e => handleChange(index, "description", e.target.value)} />
                    ...
                </div>
            ))}
            <button type="button" onClick={addProductHandle}>Add Product</button>
        </div>
    );

}

export default Test;