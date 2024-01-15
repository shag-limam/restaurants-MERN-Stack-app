import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditRestaurant = () => {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [building, setBuilding] = useState('');
  const [street, setStreet] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://nodejs-restapi-qeuq.onrender.com//restaurants/${id}`)
      .then((response) => {
        setName(response.data.name);
        setCuisine(response.data.cuisine);
        setBuilding(response.data.address.building);
        setStreet(response.data.address.street);
        setZipcode(response.data.address.zipcode);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  }, [id]);

  const handleEditRestaurant = () => {
    const data = {
      name,
      cuisine,
      address: {
        building,
        street,
        zipcode,
      },
    };

    setLoading(true);
    axios
      .put(`https://nodejs-restapi-qeuq.onrender.com/restaurants/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Restaurant edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Restaurant</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Cuisine</label>
          <input
            type='text'
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Building</label>
          <input
            type='text'
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Street</label>
          <input
            type='text'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Zipcode</label>
          <input
            type='text'
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditRestaurant}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditRestaurant;
