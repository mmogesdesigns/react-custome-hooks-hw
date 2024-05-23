import { useState } from "react"
import React from 'react'


const useInventory = () => {
    const [products, setProducts] = useState([
        {id: 1, name: 'Product 1', price:100},
        {id: 2, name: 'Product 2', price:200}
    ]);
    const fetchProducts = () =>{
        return products;
    } ;
     const addProduct = (newProduct) => {
        setProducts([...products,{...newProduct, id: products.length +1}])
     };
     const removeProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
     }
  
  
     return{
        products,
        fetchProducts,
        addProduct,
        removeProduct,
     };
};

export default useInventory
