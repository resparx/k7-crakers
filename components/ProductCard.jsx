'use client'

import { AppContext } from '@/app/page';
import formatToINR from '@/utils/formatToInr';
import React, { useContext, useState } from 'react';


const ProductCard = ({ name, description, price, image, id }) => {
    const { store, setStore } = useContext(AppContext);
    const { cartItems } = store
    const [quantity, setQuantity] = useState(0);

    const updateCart = (quantity) => {
        let updateditems = []
        const itemPresent = cartItems.some(item =>
            item.productId === id)
            console.log(quantity, "w")
            if(quantity > 0) {
                updateditems = itemPresent ? cartItems.map(item =>
                    item.productId === id ? {
                        productId: id,
                        pricePerQuantity: price,
                        quantity,
                        cost: price * quantity,
                        name
                    } : item
                ) : [...cartItems, {
                    productId: id,
                    pricePerQuantity: price,
                    quantity,
                    cost: price * quantity,
                    name
                }]
            } else {
                if(itemPresent)
                    updateditems = cartItems.filter(item => item.productId !== id)
            }
            

            
            setStore({ ...store, cartItems: updateditems })
    }

    const handleQuantityChange = (change) => {
        const qunatityCh = Math.max(0, quantity + change)
        updateCart(qunatityCh)
        setQuantity(qunatityCh);
    };

    const handleAddToCart = () => {
        const a = {
            productId: "",
            pricePerQuantity: "",
            quantity: "",
            cost: "",
        }
    };

    return (
        <div className="border rounded-lg shadow-md overflow-hidden w-full max-w-sm bg-white flex flex-col max-h-[180px] min-h-[180px] ">
            <div className="relative sm:block hidden" style={{ paddingBottom: '50%' }}>
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-slate-700 text-xl font-semibold mb-2">{name}</h2>
                <p className="text-slate-500 mb-2">{description}</p>
                <div className='mt-auto flex justify-between items-center'>
                    <p className="text-lg text-slate-600 font-bold">{formatToINR(price)}</p>
                    <div className="flex items-center">
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

                {/* <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Add to Cart
                </button> */}
            </div>
        </div>
    );
};

export default ProductCard;
