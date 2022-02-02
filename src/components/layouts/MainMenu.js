import styles from '../../styles/MainMenu.module.css';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <nav>
      <div className={styles['menu-container']}>
        <ul className="menu-main">
          <li>
            <Link to="#">Component (DIY)</Link>
            <div className={styles['menu-sub']}>
              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                </ul>
              </div>

              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                  <li>
                    <Link to="#">link 03</Link>
                  </li>
                </ul>
              </div>

              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                </ul>
              </div>

              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                  <li>
                    <Link to="#">link 03</Link>
                  </li>
                </ul>
              </div>

              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                </ul>
              </div>

              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                  <li>
                    <Link to="#">link 03</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link to="#">Storage</Link>
            <div className={styles['menu-sub']}>
              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                  <li>
                    <Link to="#">link 03</Link>
                  </li>
                </ul>
              </div>

              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                  <li>
                    <Link to="#">link 03</Link>
                  </li>
                </ul>
              </div>

              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                </ul>
              </div>

              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                  <li>
                    <Link to="#">link 03</Link>
                  </li>
                </ul>
              </div>

              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                  <li>
                    <Link to="#">link 02</Link>
                  </li>
                </ul>
              </div>

              <div className={styles['menu-row-1']}>
                <h3 className={styles['menu-category']}>Categort</h3>
                <ul>
                  <li>
                    <Link to="#">link 01</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link to="#">Gaming Gear</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainMenu;
