import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateRestaurant from './pages/CreateRestaurant';
import ShowRestaurant from './pages/ShowRestaurant';
import EditRestaurant from './pages/EditRestaurant';
import DeleteRestaurant from './pages/DeleteRestaurant';
import Dashboard from './pages/Dashboard'; 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/restaurants/create' element={<CreateRestaurant />} />
      <Route path='/restaurants/details/:id' element={<ShowRestaurant />} />
      <Route path='/restaurants/edit/:id' element={<EditRestaurant />} />
      <Route path='/restaurants/delete/:id' element={<DeleteRestaurant />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
};

export default App;
