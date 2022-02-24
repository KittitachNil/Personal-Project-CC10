import MainProductLayout from '../components/products/MainProductLayout';
import Breadcrumb from '../components/products/Breadcrumb';

function Products() {
  return (
    <div className="container-lg ">
      <Breadcrumb />
      <div className="row">
        <MainProductLayout />
      </div>
    </div>
  );
}
export default Products;
