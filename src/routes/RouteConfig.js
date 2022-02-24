import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import { AuthContext } from '../contexts/AuthContext';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/Products';
import EditMyProfile from '../pages/EditMyProfile';
import UserProfile from '../pages/UserProfile';

function RouteConfig() {
    const { user } = useContext(AuthContext);
    return (
        <Routes>
            {user ? (
                <Route path="/" element={<MainLayout />}>
                    <Route path="/myuser" element={<UserProfile />} />
                    <Route path="/myuser/edit" element={<EditMyProfile />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            ) : (
                <Route path="/" element={<MainLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="/categories" element={<Products />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            )}
        </Routes>
    );
}

export default RouteConfig;
