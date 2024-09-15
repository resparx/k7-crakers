'use client'

import { useContext } from "react"
import CartModal from "./cartModal"
import { AppContext } from "@/app/page";
import formatToINR from "@/utils/formatToInr";

const Navbar = () => {
    const {store, setStore} = useContext(AppContext);
    const onCartToggle = () => {
        setStore((prevState) => ({...prevState, cartModal: !prevState.cartModal}))
    }

    const totalCost = store.cartItems.reduce((total, item) => total + item.cost, 0);
    return <><nav className="fixed top-0 z-10 sm:min-h-20 min-h-16 w-screen bg-gradient-to-r from-[#d50f84] via-[#780064] to-[#32004b]">
        <div className="container mx-auto flex justify-between items-center h-[80px]">
            <a href="#" className="text-white text-2xl font-bold">K7 traders</a>
            <div className="flex items-center gap-2">
                <p>{formatToINR(totalCost)}</p>
                <div onClick={onCartToggle} className="relative text-white hover:text-gray-400 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        d="M3 3h2l.4 2h12l.4-2h2v2H3V3zM1 6h2l1.6 8.5L6 18h12l1.4-3.5L22 6h2v2H1V6zM6 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM16 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    />
                </svg>
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1 translate-x-4 translate-y-1">
                    {store.cartItems.length}
                </span>
            </div>
            </div>
        </div>
    </nav>

    <CartModal isOpen={store.cartModal} onClose={onCartToggle} />
    </>
}

export default Navbar