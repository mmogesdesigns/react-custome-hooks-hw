import React from 'react'
import { useState } from 'react';
import useInventory from './useInventory';

const ProductList = () => {
    const {products, addProduct, removeProduct} = useInventory();
    const [newProduct, setNewProduct] = useState({name:'', price: ''});

    const handleAddProduct = () => {
        if (newProduct.name && newProduct.price){
            addProduct(newProduct);
            setNewProduct({name:'',price:''});
        }
    };
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
            <li key={product.id}>
                {product.name} - ${product.price}
                <button className='remove-btn' onClick={() => removeProduct(product.id)}>Remove</button>

            </li>
        ))}
      </ul>
      <div>
        <h3>Add New Product</h3>
        <input 
        type="text"
        placeholder='Product Name'
        value={newProduct.name}
        onChange={(e) => setNewProduct({...setNewProduct, name: e.target.value})}
        />
        <input 
        type="text"
        placeholder='Product Price'
        value={newProduct.price}
        onChange={(e) => setNewProduct({...setNewProduct, price: e.target.value})}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  )
}

export default ProductList
