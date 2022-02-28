import CatSearchMenu from './CatSearchMenu';
import ProductCards from './ProductCards';
import Pagination from './Pagination';

function MainProductLayout() {
    return (
        <>
            <div className="col-md-3 pe-5">
                <div className="">
                    <div className="product-filter">
                        <div>
                            <CatSearchMenu />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-9 d-md-flex">
                <div className="row">
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                </div>
            </div>
            <Pagination />
        </>
    );
}

export default MainProductLayout;
