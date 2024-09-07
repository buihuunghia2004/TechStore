import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import PrivateRoute from '../pages/Auth/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home/*" element={<PrivateRoute component={Home}/>}/>
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
