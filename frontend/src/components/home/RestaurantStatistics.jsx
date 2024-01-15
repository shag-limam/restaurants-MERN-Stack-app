import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index.css';

const RestaurantStatistics = () => {
  const [restaurantCount, setRestaurantCount] = useState(0);
  const [averageGrades, setAverageGrades] = useState(0);
  const [highestGrade, setHighestGrade] = useState(0);
  const [lowestGrade, setLowestGrade] = useState(0);
  const [mostCommonCuisine, setMostCommonCuisine] = useState('');
  const [uniqueBoroughs, setUniqueBoroughs] = useState([]);
  const [totalGradesGiven, setTotalGradesGiven] = useState(0);
  const [restaurantsWithHighGrades, setRestaurantsWithHighGrades] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('https://nodejs-restapi-qeuq.onrender.com/restaurants/');
        const restaurants = response.data.data;

        // Statistiques basées sur les restaurants
        setRestaurantCount(response.data.count);

        // Calcul de la moyenne des grades
        const gradesArray = restaurants.flatMap(restaurant => restaurant.grades.map(grade => grade.score));
        const average = gradesArray.length > 0 ? gradesArray.reduce((acc, score) => acc + score, 0) / gradesArray.length : 0;
        setAverageGrades(average.toFixed(2));

        // Trouver le grade le plus élevé
        const highest = Math.max(...gradesArray);
        setHighestGrade(highest);

        // Trouver le grade le plus bas
        const lowest = Math.min(...gradesArray);
        setLowestGrade(lowest);

        // Trouver la cuisine la plus courante
        const cuisines = restaurants.map(restaurant => restaurant.cuisine);
        const mostCommon = cuisines.reduce((acc, cuisine) => (acc[cuisine] = (acc[cuisine] || 0) + 1, acc), {});
        setMostCommonCuisine(Object.keys(mostCommon).reduce((a, b) => mostCommon[a] > mostCommon[b] ? a : b));

        // Trouver les boroughs uniques
        const uniqueBoroughs = [...new Set(restaurants.map(restaurant => restaurant.borough))];
        setUniqueBoroughs(uniqueBoroughs);

        // Calcul du nombre total de grades donnés
        setTotalGradesGiven(gradesArray.length);

        // Restaurants avec des grades élevés (exemple : grades supérieurs à 90)
        const highGradesRestaurants = restaurants.filter(restaurant => restaurant.grades.some(grade => grade.score > 90));
        setRestaurantsWithHighGrades(highGradesRestaurants);
      } catch (error) {
        console.error('Error fetching restaurant statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="statistics-container">
      <h2 className="title">Statistiques des Restaurants</h2>
      <div className="statistic">
        <p>Nombre total de restaurants : {restaurantCount}</p>
      </div>
      <div className="statistic">
        <p>Moyenne des grades : {averageGrades}</p>
      </div>
      <div className="statistic">
        <p>Grade le plus élevé : {highestGrade}</p>
      </div>
      <div className="statistic">
        <p>Grade le plus bas : {lowestGrade}</p>
      </div>
      <div className="statistic">
        <p>Cuisine la plus courante : {mostCommonCuisine}</p>
      </div>
      <div className="statistic">
        <p>Boroughs uniques : {uniqueBoroughs.join(', ')}</p>
      </div>
      <div className="statistic">
        <p>Total des grades donnés : {totalGradesGiven}</p>
      </div>
      <div className="statistic">
        <p>Restaurants avec des grades élevés : {restaurantsWithHighGrades.length}</p>
      </div>
      {/* Ajoutez d'autres statistiques ici en fonction de vos besoins */}
    </div>
  );
};

export default RestaurantStatistics;











// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Doughnut } from 'react-chartjs-2';
// import '../../index.css';

// const RestaurantStatistics = () => {
//   const [restaurantCount, setRestaurantCount] = useState(0);
//   const [averageGrades, setAverageGrades] = useState(0);
//   const [highestGrade, setHighestGrade] = useState(0);
//   const [lowestGrade, setLowestGrade] = useState(0);
//   const [mostCommonCuisine, setMostCommonCuisine] = useState('');
//   const [uniqueBoroughs, setUniqueBoroughs] = useState([]);
//   const [totalGradesGiven, setTotalGradesGiven] = useState(0);
//   const [restaurantsWithHighGrades, setRestaurantsWithHighGrades] = useState([]);

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get('http://localhost:5555/restaurants/');
//         const restaurants = response.data.data;

//         setRestaurantCount(response.data.count);

//         const gradesArray = restaurants.flatMap(restaurant => restaurant.grades.map(grade => grade.score));
//         const average = gradesArray.length > 0 ? gradesArray.reduce((acc, score) => acc + score, 0) / gradesArray.length : 0;
//         setAverageGrades(average.toFixed(2));

//         const highest = Math.max(...gradesArray);
//         setHighestGrade(highest);

//         const lowest = Math.min(...gradesArray);
//         setLowestGrade(lowest);

//         const cuisines = restaurants.map(restaurant => restaurant.cuisine);
//         const mostCommon = cuisines.reduce((acc, cuisine) => (acc[cuisine] = (acc[cuisine] || 0) + 1, acc), {});
//         setMostCommonCuisine(Object.keys(mostCommon).reduce((a, b) => mostCommon[a] > mostCommon[b] ? a : b));

//         const uniqueBoroughs = [...new Set(restaurants.map(restaurant => restaurant.borough))];
//         setUniqueBoroughs(uniqueBoroughs);

//         setTotalGradesGiven(gradesArray.length);

//         const highGradesRestaurants = restaurants.filter(restaurant => restaurant.grades.some(grade => grade.score > 90));
//         setRestaurantsWithHighGrades(highGradesRestaurants);
//       } catch (error) {
//         console.error('Error fetching restaurant statistics:', error);
//       }
//     };

//     fetchStatistics();
//   }, []);

//   const chartData = {
//     labels: ['Restaurants', 'Grades élevés'],
//     datasets: [
//       {
//         data: [restaurantCount, restaurantsWithHighGrades.length],
//         backgroundColor: ['#FF6384', '#36A2EB'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB']
//       }
//     ]
//   };

//   return (
//     <div className="statistics-container">
//       <h2 className="title">Statistiques des Restaurants</h2>
//       <div className="statistic">
//         <p>Nombre total de restaurants : {restaurantCount}</p>
//       </div>
//       <div className="statistic">
//         <p>Moyenne des grades : {averageGrades}</p>
//       </div>
//       <div className="statistic">
//         <p>Grade le plus élevé : {highestGrade}</p>
//       </div>
//       <div className="statistic">
//         <p>Grade le plus bas : {lowestGrade}</p>
//       </div>
//       <div className="statistic">
//         <p>Cuisine la plus courante : {mostCommonCuisine}</p>
//       </div>
//       <div className="statistic">
//         <p>Boroughs uniques : {uniqueBoroughs.join(', ')}</p>
//       </div>
//       <div className="statistic">
//         <p>Total des grades donnés : {totalGradesGiven}</p>
//       </div>
//       <div className="statistic">
//         <p>Restaurants avec des grades élevés : {restaurantsWithHighGrades.length}</p>
//       </div>
//       <Doughnut data={chartData} />
//     </div>
//   );
// };

// export default RestaurantStatistics;









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';
// import '../../index.css';

// const RestaurantStatistics = () => {
//   const [restaurantCount, setRestaurantCount] = useState(0);
//   const [averageGrades, setAverageGrades] = useState(0);
//   const [highestGrade, setHighestGrade] = useState(0);
//   const [lowestGrade, setLowestGrade] = useState(0);
//   const [mostCommonCuisine, setMostCommonCuisine] = useState('');
//   const [uniqueBoroughs, setUniqueBoroughs] = useState([]);
//   const [totalGradesGiven, setTotalGradesGiven] = useState(0);
//   const [restaurantsWithHighGrades, setRestaurantsWithHighGrades] = useState([]);
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get('http://localhost:5555/restaurants/');
//         const restaurants = response.data.data;

//         setRestaurantCount(response.data.count);

//         const gradesArray = restaurants.flatMap(restaurant => restaurant.grades.map(grade => grade.score));
//         const average = gradesArray.length > 0 ? gradesArray.reduce((acc, score) => acc + score, 0) / gradesArray.length : 0;
//         setAverageGrades(average.toFixed(2));

//         const highest = Math.max(...gradesArray);
//         setHighestGrade(highest);

//         const lowest = Math.min(...gradesArray);
//         setLowestGrade(lowest);

//         const cuisines = restaurants.map(restaurant => restaurant.cuisine);
//         const mostCommon = cuisines.reduce((acc, cuisine) => (acc[cuisine] = (acc[cuisine] || 0) + 1, acc), {});
//         setMostCommonCuisine(Object.keys(mostCommon).reduce((a, b) => mostCommon[a] > mostCommon[b] ? a : b));

//         const uniqueBoroughs = [...new Set(restaurants.map(restaurant => restaurant.borough))];
//         setUniqueBoroughs(uniqueBoroughs);

//         setTotalGradesGiven(gradesArray.length);

//         const highGradesRestaurants = restaurants.filter(restaurant => restaurant.grades.some(grade => grade.score > 90));
//         setRestaurantsWithHighGrades(highGradesRestaurants);

//         const chartData = {
//           labels: ['Stat 1', 'Stat 2', 'Stat 3', 'Stat 4'], // Exemple de libellés
//           datasets: [
//             {
//               label: 'Statistiques',
//               backgroundColor: 'rgba(75,192,192,0.4)',
//               borderColor: 'rgba(75,192,192,1)',
//               borderWidth: 1,
//               hoverBackgroundColor: 'rgba(75,192,192,0.8)',
//               hoverBorderColor: 'rgba(75,192,192,1)',
//               data: [65, 59, 80, 81], // Exemple de données, remplacez par les valeurs appropriées
//             },
//           ],
//         };

//         setChartData(chartData);
//       } catch (error) {
//         console.error('Error fetching restaurant statistics:', error);
//       }
//     };

//     fetchStatistics();
//   }, []);

//   return (
//     <div className="statistics-container">
//       <h2 className="title">Statistiques des Restaurants</h2>

//       <div className="chart-container">
//         <Bar
//           data={chartData}
//           options={{
//             maintainAspectRatio: false,
//             scales: {
//               yAxes: [{
//                 ticks: {
//                   beginAtZero: true,
//                 },
//               }],
//             },
//           }}
//         />
//       </div>

//       <div className="statistic">
//         <p>Nombre total de restaurants : {restaurantCount}</p>
//       </div>
//       <div className="statistic">
//         <p>Moyenne des grades : {averageGrades}</p>
//       </div>
//       <div className="statistic">
//         <p>Grade le plus élevé : {highestGrade}</p>
//       </div>
//       <div className="statistic">
//         <p>Grade le plus bas : {lowestGrade}</p>
//       </div>
//       <div className="statistic">
//         <p>Cuisine la plus courante : {mostCommonCuisine}</p>
//       </div>
//       <div className="statistic">
//         <p>Boroughs uniques : {uniqueBoroughs.join(', ')}</p>
//       </div>
//       <div className="statistic">
//         <p>Total des grades donnés : {totalGradesGiven}</p>
//       </div>
//       <div className="statistic">
//         <p>Restaurants avec des grades élevés : {restaurantsWithHighGrades.length}</p>
//       </div>
//     </div>
//   );
// };

// export default RestaurantStatistics;

