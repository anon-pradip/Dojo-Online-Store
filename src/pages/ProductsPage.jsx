import React from 'react'
import { Filters, ProductList, Sort, PageHero } from "../components";
import { useFilterContext } from '../context/filter_context';

const ProductsPage = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <div>
      <PageHero title="Products" />
      <div className='flex flex-col items-center justify-center md:flex-row gap-20 mt-8 md:items-start'>
        <div>
          <Filters />
        </div>
        <div>
          <Sort products={products} />
          <ProductList />
        </div>

      </div>
    </div>
  )
}

export default ProductsPage