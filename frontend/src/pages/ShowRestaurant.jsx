import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowRestaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://nodejs-restapi-qeuq.onrender.com/restaurants/${id}`)
      .then((response) => {
        setRestaurant(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Restaurant</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{restaurant._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Name</span>
            <span>{restaurant.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Borough</span>
            <span>{restaurant.borough}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Cuisine</span>
            <span>{restaurant.cuisine}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Building</span>
            <span>{restaurant.address?.building}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Street</span>
            <span>{restaurant.address?.street}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Zipcode</span>
            <span>{restaurant.address?.zipcode}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowRestaurant;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';

// const ShowRestaurant = () => {
//   const [restaurant, setRestaurant] = useState({});
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:5555/restaurants/${id}`)
//       .then((response) => {
//         setRestaurant(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, [id]);

//   return (
//     <div className='p-4'>
//       <BackButton />
//       <h1 className='text-3xl my-4'>Show Restaurant</h1>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Id</span>
//             <span>{restaurant._id}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Name</span>
//             <span>{restaurant.name}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Cuisine</span>
//             <span>{restaurant.cuisine}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Building</span>
//             <span>{restaurant.address.building}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Street</span>
//             <span>{restaurant.address.street}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Zipcode</span>
//             <span>{restaurant.address.zipcode}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Create Time</span>
//             <span>{new Date(restaurant.createdAt).toString()}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
//             <span>{new Date(restaurant.updatedAt).toString()}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowRestaurant;
