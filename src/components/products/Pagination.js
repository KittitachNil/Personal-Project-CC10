import { Link } from 'react-router-dom';

function Pagination() {
  return (
    <div className="row justify-content-end">
      <div className="col-10 mt-4">
        <ul className="pagination justify-content-end pagination-sm">
          <li className="page-item disabled">
            <Link href="#" className="page-link">
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          <li className="page-item">
            <Link href="#" className="page-link">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link href="#" className="page-link">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link href="#" className="page-link">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link href="#" className="page-link">
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
