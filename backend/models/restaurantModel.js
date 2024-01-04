import mongoose from 'mongoose';

const restaurantSchema = mongoose.Schema(
  {
    address: {
      building: String,
      coord: [Number],
      street: String,
      zipcode: String,
    },
    borough: String,
    cuisine: String,
    grades: [
      {
        date: Date,
        grade: String,
        score: Number,
      },
    ],
    name: String,
    restaurant_id: String,
  },
  {
    timestamps: true,
  }
);

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);
