import CatSearchMenu from './CatSearchMenu';
import Cards from './Cards';
import Pagination from './Pagination';

function MainProductLayout() {
  return (
    <>
      <div className="col-md-2">
        <div className="">
          <div className="product-filter">
            <div>
              <div className="fw-bold mb-2">Categories</div>
              <CatSearchMenu />
              <CatSearchMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 d-md-flex ">
        <div className="row">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <Pagination />
    </>
  );
}

export default MainProductLayout;
