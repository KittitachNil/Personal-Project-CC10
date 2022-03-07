import React from 'react';

function OrderCard({ item }) {
    return (
        <>
            <tr className="border-bottom">
                <td style={{ textAlign: 'left' }}>{item.Product.modelName}</td>
                <td style={{ textAlign: 'center' }}>{item.amount}</td>
                <td>฿{item.price}</td>
            </tr>
        </>
    );
}

export default OrderCard;
