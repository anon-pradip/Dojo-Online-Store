import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { single_product_url as url } from "../utils/constants"
import { formatPrice } from '../utils/helpers'
import { useProductsContext } from '../context/products_context'
import { Loading, Error, ProductImages, AddToCart, Stars, PageHero } from '../components'
import { useEffect } from 'react'

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { single_product_loading: loading,
    single_product_error: error,
    single_product: product, fetchSingleProduct } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/")
      }, 3000);
    }
  }, [error])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const { name, price, description, stock, stars, reviews, id: sku, company, images } = product;
  return (
    <div>
      <PageHero title={`Products / ${name}`} />
      <div className='flex flex-col px-4 mt-20 mb-20 mx-auto max-w-5xl'>
        {/* Button for going back to home */}
        <Link to="/" className='uppercase bg-stone-700 tracking-widest text-white rounded-sm w-max p-1'>back to products</Link>
        <div className='flex flex-col lg:flex-row space-x-7 mt-4 justify-between items-center'>
          {/* Images */}
          <ProductImages images={images} />
          {/* Content */}
          <div className='flex flex-col max-w-md'>
            <h1 className='capitalize font-bold text-4xl font-sans'>{name}</h1>
            <Stars stars={stars} reviews={reviews} />
            {/* Price */}
            <h5 className='text-white font-mono tracking-wider font-extrabold bg-black rounded-md w-max mb-1 p-2 pr-4'>{formatPrice(price)}</h5>
            {/* Description */}
            <p className='text-start  text-slate-600 mb-10'>{description}</p>
            {/* Extra Infos */}
            <div className='flex flex-col mb-4'>
              <div className=''>
                <span className=' font-bold'>Available:</span> <span className='ml-5'>{stock > 0 ? "In Stock" : "Out of Stock"}</span>
              </div>
              <div className=''>
                <span className='font-bold'>SKU:</span> <span className='ml-14'>{sku}</span>
              </div>
              <div className=''>
                <span className=' font-bold'>Brand:</span> <span className='ml-10 capitalize'>{company}</span>
              </div>
            </div>
            <hr className='bg-black h-1 w-full' />
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage