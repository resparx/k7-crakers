'use client'

import { AppContext } from '@/app/page';
import formatToINR from '@/utils/formatToInr';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useContext, useState } from 'react';


const ProductCard = ({ name, description, price, image, id }) => {
    const { store, setStore } = useContext(AppContext);
    const { cartItems } = store
    const [quantity, setQuantity] = useState(0);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const updateCart = (quantity) => {
        let updateditems = []
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        const itemPresent = cartItems.some(item =>
            item.productId === id)
            if(quantity > 0) {
                current.set(`id${id}`, quantity);
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
                if(itemPresent){
                    current.delete(`id${id}`)
                    updateditems = cartItems.filter(item => item.productId !== id)
                }
            }
            const search = current.toString();
            // or const query = `${'?'.repeat(search.length && 1)}${search}`;
            const query = search ? `?${search}` : "";
            setStore({ ...store, cartItems: updateditems })
            router.push(`${pathname}${query}`,undefined, { shallow: true });
    }

    const handleQuantityChange = (change) => {
        const qunatityCh = Math.max(0, quantity + change)
        updateCart(qunatityCh)
        setQuantity(qunatityCh);
    };

    const handleAddToCart = () => {
      
    };

    return (
        <div className="border rounded-lg shadow-md overflow-hidden w-full max-w-sm bg-white flex flex-col max-h-[180px] min-h-[180px] sm:max-h-[330px] sm:min-h-[330px] ">
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
                    <div>
                    <p className="text-lg text-slate-600 font-bold line-through">{formatToINR(price)}</p>
                    <p className="text-lg text-slate-600 font-bold">{formatToINR(price/2)}</p>
                    </div>
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
