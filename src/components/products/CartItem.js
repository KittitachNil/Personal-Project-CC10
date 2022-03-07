import axios from '../../config/axios';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import imgDummy from '../../assets/imageComing.png';

function CartItem({ item }) {
    const [amount, setAmount] = useState(item.amount ?? 0);

    const { loadCart } = useContext(CartContext);

    useEffect(() => {
        axios
            .put('/cartItem/cart/' + item.id, { amount })
            .then((res) => loadCart());
    }, [amount]);

    const handleRemoveItem = async () => {
        try {
            await axios.delete('/cartItem/cart/' + item.id);
            loadCart();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <tr>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={handleRemoveItem}
                >
                    <i class="fas fa-times"></i>
                </button>
            </td>
            <td>
                <div className="cart-info">
                    <img
                        src={
                            item.Product.ProductImages[0]?.image
                                ? item.Product.ProductImages[0].image
                                : imgDummy
                        }
                        alt=""
                    />
                </div>
            </td>
            <td>{item.Product.modelName}</td>
            <td>฿{item.Product.price}</td>
            <td>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </td>
            <td>฿{amount * item.Product.price}</td>
        </tr>
    );
}

export default CartItem;
