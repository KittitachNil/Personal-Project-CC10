import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const CartContext = createContext();

function CartContextProvider({ children }) {
    const { user } = useContext(AuthContext);

    const [cart, setCart] = useState([]);
    useEffect(() => {
        loadCart();
    }, [user]);

    const loadCart = () => {
        if (user && user.role && user.role === 'user') {
            axios
                .get('/cartItem/cart/')
                .then((res) => setCart(res.data))
                .catch((err) => console.log(err));
        }
    };

    return (
        <CartContext.Provider value={{ cart, setCart, loadCart }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;

export { CartContext };
