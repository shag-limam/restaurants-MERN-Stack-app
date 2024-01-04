// RestaurantSingleRow.jsx
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa'; // Utilisation d'une icône pour la cuisine
import { MdLocationOn } from 'react-icons/md'; // Utilisation d'une icône pour l'adresse
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import React from 'react';

const RestaurantSingleRow = ({ restaurant }) => {
  return (
    <tr className='h-8'>
      <td>{restaurant._id}</td>
      <td>{restaurant.name}</td>
      <td>{restaurant.borough}</td>
      <td>{restaurant.cuisine}</td>
      {/* Ajoutez d'autres colonnes en fonction de vos besoins */}
      <td>
        {/* Boutons d'opérations (voir, éditer, supprimer, etc.) */}
        {/* Utilisez des liens ou des boutons pour naviguer vers d'autres pages */}
        <button onClick={() => handleView(restaurant.restaurant_id)}>View</button>
        <button onClick={() => handleEdit(restaurant.restaurant_id)}>Edit</button>
        <button onClick={() => handleDelete(restaurant.restaurant_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default RestaurantSingleRow;
