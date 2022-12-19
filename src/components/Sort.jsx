import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs';

const Sort = ({ products }) => {
  const { grid_view, setGridView, setListView, sort, updateSort } = useFilterContext();
  return (
    <div className='mb-4 flex justify-center gap-4 px-1 items-center'>
      {/* ICONS CONTAINER */}
      <div className='flex gap-2 ml-4 md:ml-0'>
        <button className={`p-[3px] rounded-sm ${grid_view ? 'bg-black text-white' : 'bg-white fill-black'}`} onClick={setGridView} >
          <BsFillGridFill />
        </button>
        <button className={`p-[3px] rounded-sm ${!grid_view ? 'bg-black text-white' : 'bg-white fill-black'}`} onClick={setListView}><BsList /></button>
      </div>
      {/* NUMBER OF PRODUCTS FOUND */}
      <p className="w-max -mr-6 md:mr-0">{products.length} Products Found</p>
      <hr className='h-[1.6px] w-8 md:w-48 bg-slate-400 md:mx-4' />
      <form>
        <label htmlFor="sort" className='font-semibold'>
          Sort By
        </label>
        <select name="sort" value={sort} onChange={updateSort} id="sort" className='px-1 focus:outline-none capitalize font-bold font-sans'>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name(a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </div>
  )
}

export default Sort