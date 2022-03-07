import { Link } from 'react-router-dom';
import OrderTable from '../Order/OrderTable';
import axios from '../../config/axios';
import { useContext, useEffect, useState } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import { LoadingContext } from '../../contexts/LoadingContext';

function MainDashboard() {
    const { setError } = useContext(ErrorContext);
    const { setLoading } = useContext(LoadingContext);

    const [category, setCategory] = useState([]);

    const loadCategorys = async () => {
        setLoading(true);
        try {
            const res = await axios.get('/categories/');
            setCategory(res.data);
            console.log(category);
            setLoading(false);
        } catch (err) {
            setError('Error when get category');
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        loadCategorys();
        setLoading(false);
    }, []);

    const [supplier, setSupplier] = useState([]);

    const loadSuppliers = async () => {
        setLoading(true);
        try {
            const res = await axios.get('/suppliers/');
            setSupplier(res.data);
            console.log(supplier);
            setLoading(false);
        } catch (err) {
            setError('Error when get supplier');
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        loadSuppliers();
        setLoading(false);
    }, []);
    return (
        <>
            <div className="col-md mt-5">
                <h4 className="text-primary fw-bold">Admin Dashboard</h4>
                <div className="d-md-flex justify-content-evenly me-1">
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item mb-2 border border-dark rounded-pill shadow-sm text-center">
                                <Link className="nav-link px-3" to="#">
                                    All Product
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item mb-2 border border-dark rounded-pill shadow-sm text-center">
                                <Link className="nav-link px-3" to="#">
                                    All Order
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item mb-2 border border-dark rounded-pill shadow-sm text-center">
                                <Link className="nav-link px-3" to="#">
                                    Add Product
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item mb-2 border border-dark rounded-pill shadow-sm text-center">
                                <Link className="nav-link px-3" to="#">
                                    Add Category
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item mb-2 border border-dark rounded-pill shadow-sm text-center">
                                <Link
                                    className="nav-link px-3"
                                    to="/admin/supplier"
                                >
                                    Add Supplier
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <h5 className="text-dark mt-3">Recently Order</h5>
                <div className="col-md-12 ">
                    <div className="col-md-12 mt-3 bg-light">
                        <div className="row">
                            <div className="col-md-12">
                                <OrderTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainDashboard;
