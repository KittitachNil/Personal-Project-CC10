import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import { AuthContext } from '../contexts/AuthContext';
import Home from '../pages/Home';

function RouteConfig() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default RouteConfig;
