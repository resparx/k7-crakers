import { AppContext } from "@/app/page";
import formatToINR from "@/utils/formatToInr";
import { useContext } from "react";

const   CartModal = ({ isOpen, onClose }) => {
    const {store} = useContext(AppContext);
    const {cartItems} = store;
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex cartItems-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg w-[50vw] my-auto mx-4 md:mx-0 h-[80vh] overflow-scroll">
                <div className="flex cartItems-center justify-between p-4 border-b">
                    <h2 className="text-slate-950 text-xl font-bold">Your Cart</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="p-4">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className={`flex justify-between py-2 ${index + 1   === cartItems.length ? `` : `border-b`}`}>
                                    <div>
                                        <p className="text-slate-600 font-semibold">{item.name}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-900 text-sm">Qty: {item.quantity}</p>
                                        <p className="text-slate-900 text-sm">Price: {item.pricePerQuantity}</p>
                                        <p className="font-semibold text-slate-900">Cost: {formatToINR(item.cost)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="p-4 border-t">
                    <div className="flex justify-between font-semibold">
                        <span className="text-slate-600 text-xl">Total:</span>
                        <span className="text-slate-900 text-xl">{formatToINR(cartItems.reduce((total, item) => total + item.cost, 0))}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;