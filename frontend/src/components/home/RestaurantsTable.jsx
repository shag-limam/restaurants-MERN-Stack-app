import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const RestaurantsTable = ({ restaurants }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(13);

  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = restaurants.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(restaurants.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table className='w-full border-collapse table-success border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md'>No</th>
            <th className='border border-slate-600 rounded-md'>Name</th>
            <th className='border border-slate-600 rounded-md'>Cuisine</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>
              Borough
            </th>
            <th className='border border-slate-600 rounded-md'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((restaurant, index) => (
            <tr key={restaurant._id} className='h-8'>
              {/* <td className='border border-slate-700 rounded-md text-center'>
                {restaurant.restaurant_id}
              </td> */}
              <td className='border border-slate-700 rounded-md text-center'>
                {indexOfFirstItem + index + 1}
              </td>

              <td className='border border-slate-700 rounded-md text-center'>
                {restaurant.name}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {restaurant.cuisine}
              </td>
              <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                {restaurant.borough}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/restaurants/details/${restaurant._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800' />
                  </Link>
                  <Link to={`/restaurants/edit/${restaurant._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                  </Link>
                  <Link to={`/restaurants/delete/${restaurant._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <button onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}>
          Prev
        </button>
        {[...Array(currentPage + 2)].slice(currentPage - 1).map((e, i) => (
          <button onClick={() => paginate(i + currentPage)}>{i + currentPage}</button>
        ))}
        {currentPage < totalPages - 2 && <span>...</span>}
        {currentPage < totalPages - 2 && <button onClick={() => paginate(totalPages)}>{totalPages}</button>}
        <button onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RestaurantsTable;