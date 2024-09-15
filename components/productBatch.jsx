import { products } from "@/constants/produts"
import ProductCard from "./ProductCard"


const ProductBatch = ({ id, name }) => {
    const batchProducts = products.filter(({ categoryId }) => categoryId === id)
    return <div className="flex flex-col items-center mb-20">
        <p className="font-semibold text-3xl text-slate-900 mb-4">
            {name}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {batchProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
        ))}
    </div>
    </div>
}

export default ProductBatch