import axios from '../../config/axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import { useNavigate } from 'react-router-dom';
import OrderCard from './OrderCard';

function OrderTable() {
    const { user } = useContext(AuthContext);
    const { setError } = useContext(ErrorContext);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

    const [order, setOrder] = useState(null);
    // const [total, serTotal] = useState(0);

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
    console.log(order);

    // console.log(order.OrderItems.map((item) => item.amount * item.price));
    let arrPrice =
        order && order.OrderItems.map((item) => item.amount * item.price);
    console.log(arrPrice);
    const sumSubTotal = () => {
        return arrPrice.reduce((acc, item) => {
            return acc + item;
        }, 0);
    };

    const sumGrandTotal = () => {
        let price = sumSubTotal();
        return price + 250;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/myuser/checkout');
    };

    return (
        <>
            {order && (
                <>
                    <div className="row mt-3">
                        <div className="col-lg-7 mt-2 border border-dark bg-light rounded">
                            <div className="col-md-12 pt-3">
                                <h4>Shipping Accress</h4>
                            </div>
                            <div className="row">
                                <form
                                    className="row g-2"
                                    onSubmit={handleSubmit}
                                >
                                    <div className=" mb-1">
                                        <label
                                            for="firstName"
                                            class="form-label"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="firstName"
                                            placeholder="First Name"
                                            value={firstName}
                                            disabled
                                        />
                                    </div>
                                    <div className=" mb-1">
                                        <label
                                            for="lastName"
                                            class="form-label"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="lastName"
                                            placeholder="Last Name"
                                            value={lastName}
                                            disabled
                                        />
                                    </div>
                                    <div className=" mb-1">
                                        <label
                                            for="phoneNumer"
                                            class="form-label"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="phoneNumer"
                                            placeholder="Phone Number"
                                            value={phoneNumber}
                                            disabled
                                        />
                                    </div>
                                    <div className=" mb-1">
                                        <label for="address" class="form-label">
                                            Address
                                        </label>
                                        <textarea
                                            class="form-control"
                                            id="address"
                                            placeholder="Address"
                                            rows="2"
                                            value={address}
                                            disabled
                                        />
                                    </div>
                                    <div className=" mb-1">
                                        <label for="email" class="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            disabled
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-2">
                            <div className="your-order border border-dark bg-light rounded">
                                <h4>Your Order</h4>
                                <table>
                                    <thead>
                                        <th style={{ textAlign: 'left' }}>
                                            Product
                                        </th>
                                        <th style={{ textAlign: 'center' }}>
                                            amount
                                        </th>
                                        <th style={{ textAlign: 'right' }}>
                                            Total
                                        </th>
                                    </thead>
                                    <tbody>
                                        {order &&
                                            order.OrderItems.map((item) => (
                                                <OrderCard item={item} />
                                            ))}

                                        <tr className="border-bottom">
                                            <td
                                                colspan="2"
                                                style={{ textAlign: 'left' }}
                                            >
                                                Subtotal
                                            </td>

                                            <td style={{ textAlign: 'right' }}>
                                                ฿{sumSubTotal()}
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td
                                                colspan="2"
                                                style={{ textAlign: 'left' }}
                                            >
                                                Shipping Fee
                                            </td>
                                            <td style={{ textAlign: 'right' }}>
                                                {' '}
                                                ฿ 250
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td
                                                colspan="2"
                                                style={{ textAlign: 'left' }}
                                            >
                                                Grand Total
                                            </td>
                                            <td style={{ textAlign: 'right' }}>
                                                ฿ {sumGrandTotal()}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* {JSON.stringify(order)} */}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default OrderTable;
