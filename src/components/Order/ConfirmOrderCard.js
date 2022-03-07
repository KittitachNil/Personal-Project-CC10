import React from 'react';
import imgDummy from '../../assets/imageComing.png';

function ConfirmOrderCard({ item }) {
    return (
        <>
            <tr className="border-bottom">
                <td style={{ textAlign: 'left' }}>
                    <img
                        src={
                            item.Product.ProductImages[0]?.image
                                ? item.Product.ProductImages[0].image
                                : imgDummy
                        }
                        alt=""
                    />
                </td>
                <td style={{ textAlign: 'center' }}>
                    {item.Product.modelName}
                </td>
                <td style={{ textAlign: 'center' }}>{item.amount}</td>
                <td style={{ textAlign: 'right' }}>฿{item.price}</td>
            </tr>
        </>
    );
}

export default ConfirmOrderCard;
