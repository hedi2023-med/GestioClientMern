import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateClient from './pages/CreateClient';
import EditClient from './pages/EditClient';
import DeleteClient from './pages/DeleteClient';
import Deletedeal from './pages/deletDeal';
import EditDeal from './pages/editDeal';
import Deals from './pages/dealPage';
import CreateDeal from './pages/createDeal';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/clients/create' element={<CreateClient />} />
      <Route path='/deal/create/:id' element={<CreateDeal />} />
      <Route path='/clients/edit/:id' element={<EditClient />} />
      <Route path='/deal/edit/:id' element={<EditDeal />} />
      <Route path='/clients/delete/:id' element={<DeleteClient />} />
      <Route path='/deal/delete/:id' element={<Deletedeal />} />
      <Route path='/deal/:id' element={<Deals />} /> 
    </Routes>
  );
};

export default App;
