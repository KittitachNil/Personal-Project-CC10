import styles from '../../styles/Card.module.css';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="card col-3 ">
      <Link to="#">
        <img src="..." className="card-img-top" alt="..." />
      </Link>
      <div className="card-body ">
        <div className="mb-3 d-flex justify-content-center">
          <button type="button" className="btn btn-primary">
            Add to cart
          </button>
        </div>
        <div>
          <Link to="#" className={styles['card-detail']}>
            <h6 className="card-title">AMD RYZEN™ 5 3500</h6>
            <p className="card-text">3.6 GHZ 6C | 6T</p>
            <p
              className="card-text text-primary"
              style={{
                fontWeight: '600',
                fontSize: '16px',
                marginTop: '2.5em',
              }}
            >
              ฿5400
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
