import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/Products';
import EditMyProfile from '../pages/user/EditMyProfile';
import UserProfile from '../pages/user/UserProfile';
import History from '../pages/user/History';
import SingleProduct from '../pages/SingleProduct';
import AdminDash from '../pages/admin/AdminDash';
import CreateSupplier from '../pages/admin/CreateSupplier';
import MyCart from '../pages/user/MyCart';
import MyOrder from '../pages/user/MyOrder';
import ConfirmPayment from '../pages/user/ConfirmPayment';
import { getToken } from '../services/localStorage';

function RouteConfig() {
    const { user, role } = useContext(AuthContext);
    // console.log(role);
    // console.log(user);

    // if (role === 'CUSTOMER' && !user) {
    //     return <>test</>;
    // }
    // return (
    //     <Routes>
    //         {role === 'CUSTOMER' ? (
    //             <>
    //                 <Route path="" element={<Home />} />
    //                 <Route path="/myuser" element={<UserProfile />} />
    //                 <Route path="/myuser/edit" element={<EditMyProfile />} />
    //                 <Route
    //                     path="/myuser/history"
    //                     element={<ConfirmPayment />}
    //                 />
    //                 <Route path="/myuser/cart" element={<MyCart />} />
    //                 <Route path="/myuser/order" element={<MyOrder />} />
    //                 <Route
    //                     path="/myuser/checkout"
    //                     element={<ConfirmPayment />}
    //                 />
    //                 {/* <Route path="*" element={<Navigate to="/myuser" />} /> */}
    //             </>
    //         ) : (
    //             <>
    //                 <Route path="" element={<Home />} />
    //                 <Route path="/admin" element={<AdminDash />} />
    //                 <Route
    //                     path="/admin/supplier"
    //                     element={<CreateSupplier />}
    //                 />

    //                 {/* <Route path="*" element={<Navigate to="/" />} /> */}
    //             </>
    //         )}
    //         <Route path="" element={<Home />} />
    //         <Route path="/register" element={<Register />} />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/categories" element={<Products />} />
    //         <Route path="/categories/product" element={<SingleProduct />} />
    //     </Routes>
    // );

    if (getToken()) {
        return (
            <>
                {user && (
                    <>
                        <Routes>
                            <Route path="/myuser" element={<UserProfile />} />
                            <Route
                                path="/myuser/edit"
                                element={<EditMyProfile />}
                            />
                            <Route
                                path="/myuser/history"
                                element={<ConfirmPayment />}
                            />
                            <Route path="/myuser/cart" element={<MyCart />} />
                            <Route path="/myuser/order" element={<MyOrder />} />
                            <Route
                                path="/myuser/checkout"
                                element={<ConfirmPayment />}
                            />
                            <Route path="/admin" element={<AdminDash />} />
                            <Route
                                path="/admin/supplier"
                                element={<CreateSupplier />}
                            />
                            <Route path="/categories" element={<Products />} />
                            <Route
                                path="/categories/product"
                                element={<SingleProduct />}
                            />
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </>
                )}
            </>
        );
    } else {
        return (
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/categories" element={<Products />} />
                <Route path="/categories/product" element={<SingleProduct />} />
            </Routes>
        );
    }
}

export default RouteConfig;
