import Styles from '../../styles/CatSearchMenu.module.css';
import { Link } from 'react-router-dom';

function CatSearchMenu() {
  return (
    <div>
      <div className={`mb-2 ${Styles['main-cate-title']}`}>Component (DIY)</div>
      <div className="row">
        <div className="col-12">
          <div className={Styles['form-group']}>
            <Link to="#">
              <div className={Styles['custom-control']}>
                <input type="checkbox" id="category-01" />
                <label title="category-01" className="">
                  sub-category
                </label>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={Styles['form-group']}>
            <Link to="#">
              <div className={Styles['custom-control']}>
                <input type="checkbox" id="category-01" />
                <label title="category-01" className="">
                  sub-category
                </label>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={Styles['form-group']}>
            <Link to="#">
              <div className={Styles['custom-control']}>
                <input type="checkbox" id="category-01" />
                <label title="category-01" className="">
                  sub-category
                </label>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatSearchMenu;
