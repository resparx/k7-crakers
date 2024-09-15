'use client'

import React, { useState } from 'react';

const ProductCard = ({ name, description, price: priceProp, image}) => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(priceProp)

    const handleQuantityChange = (change) => { 
        setQuantity((prevQuantity) => {
            const qunatity = Math.max(1, prevQuantity + change)
            setPrice(Math.round(priceProp * quantity *100) / 100)
            return qunatity
        });
    };

    const handleAddToCart = () => {
        // Handle add to cart logic here
        console.log(`Added ${quantity} of size ${selectedSize} to cart`);
    };

    return (
        <div className="border rounded-lg shadow-md overflow-hidden w-full max-w-sm bg-white flex flex-col">
            <div className="relative" style={{ paddingBottom: '50%' }}>
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-slate-700 text-xl font-semibold mb-2">{name}</h2>
                <p className="text-slate-500 mb-2">{description}</p>
                <div className='mt-10 flex justify-between items-center'>
                <p className="text-lg text-slate-600 font-bold mb-2">Rs {price}</p>
                <div className="flex items-center mb-4">
                    <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-3 py-1 border rounded-lg bg-slate-200 text-slate-700"
                    >
                        -
                    </button>
                    <p className='p-2 text-slate-600'>{quantity}</p>
                    <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-3 py-1 border rounded-lg bg-slate-200 text-slate-700"
                    >
                        +
                    </button>
                </div>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
