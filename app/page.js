import HeroCarousel from "@/components/heroCarousel";
import Navbar from "@/components/navBar";
import ProductCard from "@/components/ProductCard";
import ProductCardWrapper from "@/components/productCardWrapper";
import SideMenu from "@/components/sideMenu";


export default function Home() {

  const items = [
    { src: 'https://via.placeholder.com/800x300?text=Slide+1', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/800x300?text=Slide+2', alt: 'Slide 2' },
    { src: 'https://via.placeholder.com/800x300?text=Slide+3', alt: 'Slide 3' },
];

const menuItems = [
  { label: 'One sound Crakcers', href: '#' },
  { label: 'Mini lar', href: '#' },
  { label: 'Deluxe crakers', href: '#' },
  { label: 'Garland crakers', href: '#' },
];

  return (
   <div className="bg-white relative">
    <Navbar/>
    <HeroCarousel items={items}/>
    <div className="flex relative">
      <SideMenu items={menuItems}/>
      <ProductCardWrapper/>
    </div>
    
   </div>
  );
}
