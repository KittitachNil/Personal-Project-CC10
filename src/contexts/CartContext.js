import axios from '../config/axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const CartContext = createContext();

function CartContextProvider({ children }) {
    const { user } = useContext(AuthContext);

    const [cart, setCart] = useState([]);
    const loadCart = async () => {
        try {
            if (user && user.role && user.role === 'CUSTOMER') {
                const res = await axios.get('/cartItem/cart/');
                setCart(res.data.cart);
                // console.log(res.data.cart);
            }
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        loadCart();
        console.log(cart);
    }, [user]);

    return (
        <CartContext.Provider value={{ cart, setCart, loadCart }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;

export { CartContext };
