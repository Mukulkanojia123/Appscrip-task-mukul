import React, { useState, useEffect } from 'react'
import ProductCard from '../Card/ProductCard';
import './body.css'

const MainContainer = () => {
    const [product, setProduct] = useState(null);

    const fetchProductData = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const json = await data.json();
        setProduct(json);
    }
    useEffect(() => {
        fetchProductData()
    }, [])
    return (
        <div className='maincontainer'>
            <div>
                {
                    product && product.map((pro) => (
                        <ProductCard key={pro.id} data={pro} />
                    ))
                }
            </div>
        </div>
    )
}

export default MainContainer