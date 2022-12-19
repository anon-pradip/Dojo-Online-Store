import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { formatPrice, getUniqueValues } from '../utils/helpers'
import { FaCheck } from "react-icons/fa"

const Filters = () => {
  const {
    filters: { text, category, company, price, max_price, color, shipping, min_price }, updateFilters, clearFilters, all_products
  } = useFilterContext()

  const categories = getUniqueValues(all_products, "category")
  const companies = getUniqueValues(all_products, "company")
  const colors = getUniqueValues(all_products, "colors")
  console.log(colors);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* search input */}
        <input type="text" name="text" placeholder='Search' id="" className='bg-slate-200 pl-2 rounded-md placeholder:text-slate-600' value={text} onChange={updateFilters} />
        {/* end search input */}

        {/* categories */}
        <div className='categories  flex flex-col justify-center items-start'>
          <h5 className='font-bold mt-2'>Category</h5>
          <div className='flex flex-col gap-2 justify-center items-start'>
            {categories.map((c, index) => {
              return (
                <button key={index} className={`${category === c.toLowerCase() ? 'underline decoration-2 underline-offset-4' : null} capitalize `}
                  onClick={updateFilters} type="button" name='category'
                >{c}</button>
              )
            })}
          </div>
        </div>
        {/* end categories  */}
        {/* companies */}
        <div className='flex flex-col'>
          <h5 className='font-bold mt-2'>Company</h5>

          <div>
            <select name="company" value={company} onChange={updateFilters} className="capitalize bg-slate-200 rounded-md mt-1">
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>{c}</option>
                )
              })}
            </select>
          </div>
        </div>
        {/* end of companies */}
        {/* colors */}
        <div className='flex flex-col'>
          <h5 className='font-bold mt-2'>Colors</h5>
          <div className='flex justify-start items-center gap-2'>
            {colors.map((c, index) => {
              if (c === "all") {
                return <button onClick={updateFilters} name="color" data-color="all" className={`text-slate-600 tracking-widest ${color === "all" ? 'underline decoration-2 underline-offset-2' : null}`}>All</button>
              }
              return (
                <button name='color' className={`h-[14px] w-[14px] rounded-full ${color === c ? "opacity-100" : "opacity-70"}`} style={{ background: c }} key={index} onClick={updateFilters}
                  data-color={c}
                >
                  {color === c ? <FaCheck className='h-3 w-3 fill-white' /> : null}
                </button>
              )
            })}
          </div>
        </div>
        {/* end of colors */}
        {/* price section */}
        <div className='flex flex-col'>
          <h5 className='font-bold mt-2'>Price</h5>
          <div>
            <h5>{formatPrice(price)}</h5>
            <input type="range" name='price' onChange={updateFilters} min={min_price} max={max_price} value={price} />
          </div>
        </div>
        {/* end of price */}
        {/* Shipping */}
        <div className='flex gap-2  items-center'>
          <label htmlFor="shipping" className='font-bold'>Free Shipping</label>
          <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={updateFilters} />
        </div>
        {/* end of shipping */}

      </form>
      {/* clear filters */}
      <button onClick={clearFilters} className="bg-amber-800 text-white rounded-md px-2 py-1 mt-3 uppercase tracking-widest" >Clear filters</button>
      {/* end of clear filters */}
    </div>
  )
}

export default Filters