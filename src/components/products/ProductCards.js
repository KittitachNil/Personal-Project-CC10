import styles from '../../styles/Card.module.css';
import { Link } from 'react-router-dom';
import dummyImage from '../../assets/imageComing.png';
import AuthContext from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import axios from '../../config/axios';

function Cards({ products }) {
    const { setCart, loadCart } = useContext(CartContext);

    const {
        id,
        modelName,
        codeName,
        desc,
        price,
        quantity,
        discount,
        ProductImages: images,
    } = products;

    const handleAddToCart = async (e) => {
        e.preventDefault();
        let productId = id;
        const res = await axios.post('/cartItem/cart/' + productId);
        setCart(res.data);
        loadCart();
        console.log(res.date);
    };

    return (
        <div className="card col-lg-4 col-sm-6 py-2">
            <Link to="#" className="row justify-content-center my-2">
                <img
                    src={images && images.length ? images[0].image : dummyImage}
                    className="card-img-top "
                    style={{ hight: '150px', width: '150px' }}
                    alt="ProductImage"
                />
            </Link>
            <div className="card-body ">
                <div className="mb-3 d-flex justify-content-center">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleAddToCart}
                        disabled={quantity < 1}
                    >
                        {quantity < 1 ? 'Outof Stock' : 'Add to cart'}
                    </button>
                </div>
                <div>
                    <Link to="#" className={styles['card-detail']}>
                        <h6 className="card-title">{modelName}</h6>
                        {/* <p className="card-text">3.6 GHZ 6C | 6T</p> */}
                        <p
                            className="card-text text-primary"
                            style={{
                                fontWeight: '600',
                                fontSize: '16px',
                                marginTop: '2em',
                            }}
                        >
                            ฿{price}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cards;
