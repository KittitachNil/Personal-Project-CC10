import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/Products';
import EditMyProfile from '../pages/EditMyProfile';
import UserProfile from '../pages/UserProfile';
import History from '../pages/History';
import SingleProduct from '../pages/SingleProduct';
// import { getToken } from '../services/localStorage';

function RouteConfig() {
    const { user, role } = useContext(AuthContext);
    // console.log(role);
    // console.log(user);

    if (role === 'CUSTOMER' && !user) {
        return <></>;
    }
    return (
        <Routes>
            {role === 'CUSTOMER' ? (
                <>
                    <Route path="/myuser" element={<UserProfile />} />
                    <Route path="/myuser/edit" element={<EditMyProfile />} />
                    <Route path="/user/history" element={<History />} />
                    <Route path="*" element={<Navigate to="/myuser" />} />
                </>
            ) : (
                <>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            )}
            <Route path="" element={<Home />} />
            <Route path="/categories" element={<Products />} />
            <Route path="/categories/product" element={<SingleProduct />} />
        </Routes>
    );
}

export default RouteConfig;
