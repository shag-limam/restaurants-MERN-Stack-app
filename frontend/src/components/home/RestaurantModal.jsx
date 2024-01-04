import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUtensils } from 'react-icons/fa'; // Utilisation d'une icône pour la cuisine
import { MdLocationOn } from 'react-icons/md'; // Utilisation d'une icône pour l'adresse

const RestaurantModal = ({ restaurant, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {restaurant.cuisine}
        </h2>
        <h4 className='my-2 text-gray-500'>{restaurant._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <FaUtensils className='text-red-300 text-2xl' />
          <h2 className='my-1'>{restaurant.name}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <MdLocationOn className='text-red-300 text-2xl' />
          <h2 className='my-1'>
            {restaurant.address.building}, {restaurant.address.street},{' '}
            {restaurant.address.zipcode}
          </h2>
        </div>
        <p className='mt-4'>Anything You want to show</p>
        <p className='my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default RestaurantModal;
