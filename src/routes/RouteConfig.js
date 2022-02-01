import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import { AuthContext } from '../contexts/AuthContext';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

function RouteConfig() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default RouteConfig;
