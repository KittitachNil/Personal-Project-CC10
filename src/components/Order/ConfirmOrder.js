import axios from '../../config/axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import ConfirmOrderCard from './ConfirmOrderCard';

function ConfirmOrder() {
    const { user } = useContext(AuthContext);
    const { setError } = useContext(ErrorContext);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

    const [order, setOrder] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('/order/')
            .then((res) => {
                // console.log('hi');
                console.log(res.data);
                setOrder(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="row mt-3 d-flex justify-content-start">
            <div className="col-lg-5 ">
                <div className="col-md-12">
                    <p>
                        {firstName} {lastName}
                    </p>
                    <p>{address}</p>
                    <p>
                        {phoneNumber} {email}
                    </p>
                </div>
            </div>
            <hr />
            <div className="your-order border border-dark bg-light rounded">
                <h4>Your Order</h4>
                <table>
                    <thead>
                        <th style={{ textAlign: 'left' }}>Product Image</th>
                        <th style={{ textAlign: 'center' }}>Product</th>
                        <th style={{ textAlign: 'center' }}>amount</th>
                        <th style={{ textAlign: 'right' }}>Total</th>
                    </thead>
                    <tbody>
                        {order &&
                            order.OrderItems.map((item) => (
                                <ConfirmOrderCard item={item} />
                            ))}
                    </tbody>
                </table>

                {/* {JSON.stringify(order)} */}
            </div>
            <div className="my-2 d-flex justify-content-center">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleClick}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default ConfirmOrder;
