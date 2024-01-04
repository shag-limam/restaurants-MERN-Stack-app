import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';
//import { Restaurant } from './models/restaurantModel.js'; // Assurez-vous d'importer correctement le chemin du modèle de restaurant
import restaurantsRoute from './routes/restaurantRoute.js'; // Assurez-vous d'importer correctement le chemin du fichier de routes pour les restaurants

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

// Utilisez la nouvelle route pour les restaurants
app.use('/restaurants', restaurantsRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
