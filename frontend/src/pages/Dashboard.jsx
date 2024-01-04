import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/restaurants')
      .then(response => {
        setRestaurantData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const totalRestaurants = restaurantData.length;

  // Calcul de la moyenne des évaluations
  const totalRatings = restaurantData.reduce((acc, restaurant) => acc + restaurant.rating, 0);
  const averageRating = totalRatings / totalRestaurants || 0;

  // Trouver les types de cuisine uniques
  const uniqueCuisines = [...new Set(restaurantData.map(restaurant => restaurant.cuisine))];
  const totalUniqueCuisines = uniqueCuisines.length;

  // Calculer le nombre de restaurants par borough
  const restaurantsByBorough = restaurantData.reduce((acc, restaurant) => {
    acc[restaurant.borough] = (acc[restaurant.borough] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h1 className="text-3xl mb-4">Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="text-2xl mb-2">Statistics</h2>
          <p>Total Restaurants: {totalRestaurants}</p>
          <p>Average Rating: {averageRating.toFixed(2)}</p>
          <p>Total Unique Cuisines: {totalUniqueCuisines}</p>
          <div>
            <h3 className="text-xl mt-4">Restaurants by Borough:</h3>
            <ul>
              {Object.entries(restaurantsByBorough).map(([borough, count]) => (
                <li key={borough}>{borough}: {count}</li>
              ))}
            </ul>
          </div>
          {/* Ajoutez d'autres statistiques ici */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
