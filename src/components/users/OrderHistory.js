function OrderHistory() {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <table className="table table-bordered table-light border-dark">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Order Date</th>
                            <th scope="col">Order No</th>
                            <th scope="col">Order Status</th>
                            <th scope="col">Product Detail</th>
                            <th scope="col">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">25 Jan 2021</th>
                            <td>1</td>
                            <td>Finish</td>
                            <td>Detail</td>
                            <td>4500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderHistory;
