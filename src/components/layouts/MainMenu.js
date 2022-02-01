import styles from '../../styles/MainMenu.module.css';

function MainMenu() {
  return (
    <nav>
      <div className={styles['menu-container']}>
        <ul className="menu-main">
          <li>
            <a href="#">Component (DIY)</a>
            <div className={styles['menu-sub']}>
              <h3 className={styles['menu-category']}>Categort</h3>
              <ul>
                <li>
                  <a href="#">link 01</a>
                </li>
                <li>
                  <a href="#">link 02</a>
                </li>
                <li>
                  <a href="#">link 03</a>
                </li>
                <li>
                  <a href="#">link 03</a>
                </li>
              </ul>
              <h3 className={styles['menu-category']}>Categort</h3>
              <ul>
                <li>
                  <a href="#">link 01</a>
                </li>
                <li>
                  <a href="#">link 02</a>
                </li>
                <li>
                  <a href="#">link 03</a>
                </li>
                <li>
                  <a href="#">link 03</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Storage</a>
            <div className={styles['menu-sub']}>
              <h3 className={styles['menu-category']}>Categort</h3>
              <ul>
                <li>
                  <a href="#">link 01</a>
                </li>
                <li>
                  <a href="#">link 02</a>
                </li>
                <li>
                  <a href="#">link 03</a>
                </li>
                <li>
                  <a href="#">link 03</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Gaming Gear</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainMenu;
