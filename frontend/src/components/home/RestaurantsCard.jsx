import React, { useState } from 'react';
import RestaurantSingleCard from './RestaurantSingleCard';

const RestaurantsCard = ({ restaurants }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = restaurants.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(restaurants.length / itemsPerPage);

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded-md ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return (
      <div className='flex justify-center items-center my-4'>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className='bg-gray-200 px-3 py-1 rounded-l-md'
        >
          Prev
        </button>
        {currentPage > 3 && <span className='mx-1 px-3 py-1 rounded-md bg-gray-200'>...</span>}
        {pageNumbers.slice(currentPage > 3 ? currentPage - 3 : 0, currentPage + 2)}
        {currentPage < totalPages - 2 && <span className='mx-1 px-3 py-1 rounded-md bg-gray-200'>...</span>}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='bg-gray-200 px-3 py-1 rounded-r-md'
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {currentItems.map((item) => (
          <RestaurantSingleCard key={item._id} restaurant={item} />
        ))}
      </div>
      {renderPagination()}
    </div>
  );
};

export default RestaurantsCard;
