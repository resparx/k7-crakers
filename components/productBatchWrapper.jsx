
import { categories } from '@/constants/categories';
import React from 'react';
import ProductBatch from './productBatch';

const   ProductBatchWrapper = () => {
    return (
        <div className="p-4 flex flex-col mx-auto">
            {categories.map((category, index) => <ProductBatch key={`batch-${index}`} {...category} />)}
        </div>  
    );
};

export default ProductBatchWrapper;