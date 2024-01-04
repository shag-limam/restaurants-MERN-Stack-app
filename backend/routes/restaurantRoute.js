import express from 'express';
import { Restaurant } from '../models/restaurantModel.js';

const router = express.Router();

// Route pour sauvegarder un nouveau restaurant
router.post('/', async (request, response) => {
  try {
    const {
      name,
      cuisine,
      address,
      borough,
      grades,
      restaurant_id
    } = request.body;

    // if (!name || !cuisine || !address || !borough || !grades || !restaurant_id) {
    //   return response.status(400).send({
    //     message: 'Envoyez tous les champs requis : name, cuisine, address, borough, grades, restaurant_id',
    //   });
    // }

    const newRestaurant = {
      name,
      cuisine,
      address,
      borough,
      grades,
      restaurant_id
    };

    const restaurant = await Restaurant.create(newRestaurant);

    return response.status(201).send(restaurant);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route pour obtenir tous les restaurants de la base de données
router.get('/', async (request, response) => {
  try {
    const restaurants = await Restaurant.find({});

    return response.status(200).json({
      count: restaurants.length,
      data: restaurants,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route pour obtenir un restaurant par son identifiant
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const restaurant = await Restaurant.findById(id);

    return response.status(200).json(restaurant);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route pour mettre à jour un restaurant
router.put('/:id', async (request, response) => {
  try {
    const {
      name,
      cuisine,
      address,
      borough,
      grades,
      restaurant_id
    } = request.body;

    // if (!name || !cuisine || !address || !borough || !grades || !restaurant_id) {
    //   return response.status(400).send({
    //     message: 'Envoyez tous les champs requis : name, cuisine, address, borough, grades, restaurant_id',
    //   });
    // }

    const { id } = request.params;

    const result = await Restaurant.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Restaurant non trouvé' });
    }

    return response.status(200).send({ message: 'Restaurant mis à jour avec succès' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route pour supprimer un restaurant
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Restaurant.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Restaurant non trouvé' });
    }

    return response.status(200).send({ message: 'Restaurant supprimé avec succès' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
