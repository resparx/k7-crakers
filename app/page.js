'use client'

import { createContext, useState } from "react";
import Navbar from "@/components/navBar";
import HeroCarousel from "@/components/heroCarousel";
import ProductBatchWrapper from "@/components/productBatchWrapper";

import CartModal from "@/components/cartModal";

export const AppContext = createContext(null);

const initialState = {
  cartModal: false,
  cartItems: []
}

export default function Home() {
  const [store, setStore] = useState(initialState)
  const items = [
    { src: 'https://via.placeholder.com/800x300?text=Slide+1', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/800x300?text=Slide+2', alt: 'Slide 2' },
    { src: 'https://via.placeholder.com/800x300?text=Slide+3', alt: 'Slide 3' },
  ];

  console.log(store.cartItems, "cas")
  return (
    <AppContext.Provider value={{store, setStore}}>
      <div className="bg-white relative">
        <Navbar />
        <HeroCarousel items={items} />
        <div className="flex relative">
          {/* <SideMenu items={menuItems}/> */}
          <ProductBatchWrapper />
        </div>
        <CartModal />
      </div>
    </AppContext.Provider>
  );
}
