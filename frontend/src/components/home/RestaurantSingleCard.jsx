import React, { useState } from 'react';
import { BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import RestaurantModal from './RestaurantModal';
import { RiRestaurantFill } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const RestaurantSingleCard = ({ restaurant }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {restaurant.borough}
      </h2>
      <h4 className='my-2 text-gray-500'>{restaurant.restaurant_id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <RiRestaurantFill className='text-red-300 text-2xl' />
        <h2 className='my-1'>{restaurant.cuisine}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2xl' />
        <h2 className='my-1'>{restaurant.name}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/restaurants/details/${restaurant._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/restaurants/edit/${restaurant._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <Link to={`/restaurants/delete/${restaurant._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
      {showModal && (
        <RestaurantModal restaurant={restaurant} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default RestaurantSingleCard;
