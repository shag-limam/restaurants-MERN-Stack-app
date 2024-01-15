// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { MdOutlineAddBox } from 'react-icons/md';
// import RestaurantsTable from '../components/home/RestaurantsTable';
// import RestaurantsCard from '../components/home/RestaurantsCard';
// import logo from '../assets/logo-removebg-preview.png'; // Assurez-vous de remplacer le chemin par le bon chemin d'accès à votre image


// const Home = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showType, setShowType] = useState('table');

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get('http://localhost:5555/restaurants') // Assurez-vous d'utiliser la bonne URL pour les restaurants
//       .then((response) => {
//         setRestaurants(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className='flex h-screen'>
//       {/* Barre latérale */}
//       <div className='w-1/6 bg-gray-200 p-4 transition-all duration-500 ease-in-out'>
//           <div className='flex items-center mb-8'>
//         <img src={logo} alt='Logo' className='w-10 h-10 mr-2' />
//         <h2 className='text-xl font-semibold' style={{ color: '#ebb22f' }}>Restaurants</h2>
//       </div>
        

//         <div className='flex flex-col space-y-4'>
//           <button
//             className={`bg-sky-300 hover:bg-sky-600 px-3 py-1 rounded-lg ${showType === 'table' ? 'bg-sky-600' : ''}`}
//             onClick={() => setShowType('table')}
//           >
//             Table
//           </button>
//           <button
//             className={`bg-sky-300 hover:bg-sky-600 px-3 py-1 rounded-lg ${showType === 'card' ? 'bg-sky-600' : ''}`}
//             onClick={() => setShowType('card')}
//           >
//             Card
//           </button>
//         </div>
//       </div>


//       {/* Contenu principal */}
//       <div className='w-5/6 p-4 transition-all duration-500 ease-in-out'>
//         <div className='flex justify-between items-center'>
//           <h1 className='text-3xl mb-6'>Restaurants List</h1>
//           <Link to='/restaurants/create'>
//             <MdOutlineAddBox className='text-sky-800 text-4xl' />
//           </Link>
//         </div>
//         {loading ? (
//           <Spinner />
//         ) : showType === 'table' ? (
//           <RestaurantsTable restaurants={restaurants} />
//         ) : (
//           <RestaurantsCard restaurants={restaurants} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import RestaurantsTable from '../components/home/RestaurantsTable';
import RestaurantsCard from '../components/home/RestaurantsCard';
import RestaurantStatistics from '../components/home/RestaurantStatistics';
import logo from '../assets/logo-removebg-preview.png';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://nodejs-restapi-qeuq.onrender.com/restaurants')
      .then((response) => {
        setRestaurants(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <div className='w-1/6 bg-gray-200 p-4 transition-all duration-500 ease-in-out'>
        <div className='flex items-center mb-8'>
          <img src={logo} alt='Logo' className='w-10 h-10 mr-2' />
          <h2 className='text-xl font-semibold' style={{ color: '#ebb22f' }}>Restaurants</h2>
        </div>

        <div className='flex flex-col space-y-4'>
        <button
            className={`bg-sky-300 hover:bg-sky-600 px-3 py-1 rounded-lg ${showType === 'RestaurantStatistics' ? 'bg-sky-600' : ''}`}
            onClick={() => setShowType('RestaurantStatistics')}
          >
            Dashboard
          </button>

          <button
            className={`bg-sky-300 hover:bg-sky-600 px-3 py-1 rounded-lg ${showType === 'table' ? 'bg-sky-600' : ''}`}
            onClick={() => setShowType('table')}
          >
            Table
          </button>
          <button
            className={`bg-sky-300 hover:bg-sky-600 px-3 py-1 rounded-lg ${showType === 'card' ? 'bg-sky-600' : ''}`}
            onClick={() => setShowType('card')}
          >
            Card
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='w-5/6 p-4 transition-all duration-500 ease-in-out'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl mb-6'>Restaurants List</h1>
          <Link to='/restaurants/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl' />
          </Link>
        </div>
        {/* {loading ? (
          <Spinner />
        ) : showType === 'table' ? (
          <RestaurantsTable restaurants={restaurants} />
        ) : (
          <RestaurantsCard restaurants={restaurants} />
        )} */}


          {loading ? (
            <Spinner />
          ) : showType === 'table' ? (
            <RestaurantsTable restaurants={restaurants} />
          ) : (
            <>
              {showType === 'card' ? (
                <RestaurantsCard restaurants={restaurants} />
              ) : (
                <RestaurantStatistics restaurants={restaurants} />
              )}
            </>
          )}

      </div>
    </div>
  );
};

export default Home;
