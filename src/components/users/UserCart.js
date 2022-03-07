import styles from '../../styles/UserCart.Module.css';
import comingImg from '../../assets/imageComing.png';
import { CartContext } from '../../contexts/CartContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../products/CartItem';
import axios from '../../config/axios';
import { LoadingContext } from '../../contexts/LoadingContext';

function UserCart() {
    const { cart, setCart } = useContext(CartContext);
    const { setLoading } = useContext(LoadingContext);

    const [ordered, setOrdered] = useState(false);

    const sumTotal = () => {
        return cart.reduce((acc, item) => {
            console.log(item.Product.price);
            console.log(item.amount);

            return acc + item.Product.price * item.amount;
        }, 0);
    };
    const navigate = useNavigate();

    const handleCreateOrder = () => {
        try {
            setLoading(true);
            axios.post('/order');
            setLoading(false);
            setCart([]);
            setOrdered(true);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    const handleClickContinue = () => {
        navigate('/myuser/order');
    };

    return (
        <div className="small-container cart-page col">
            {/* {JSON.stringify(cart)} */}
            <h5> Cart</h5>
            <table className="">
                <thead>
                    <th>Action</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                </thead>
                <tbody>
                    {cart && cart.map((item) => <CartItem item={item} />)}
                </tbody>
            </table>
            <div className="total-price mt-2">
                <table>
                    <tbody>
                        <td>Total</td>
                        <td>฿{cart && sumTotal()}</td>
                    </tbody>
                </table>
            </div>
            <div className="submit-button mt-3">
                {/* {JSON.stringify(cart, null, 4)} */}
                <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    disabled={cart.length < 1}
                    onClick={handleCreateOrder}
                >
                    Check out
                </button>
                <button
                    className="btn btn-primary btn-sm mx-2"
                    type="button"
                    disabled={!ordered}
                    onClick={handleClickContinue}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}

export default UserCart;
