import Breadcrumb from '../components/products/Breadcrumb';
import OrderHistory from '../components/users/OrderHistory';

function History() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <Breadcrumb />
                    <hr />
                    <br />
                    <br />
                    <br />
                </div>
                <div className="col-lg-12">
                    <OrderHistory />
                </div>
            </div>
        </>
    );
}

export default History;
