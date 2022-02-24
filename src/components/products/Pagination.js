import { Link } from 'react-router-dom';

function Pagination() {
  return (
    <div className="row justify-content-end">
      <div className="col-10 mt-4">
        <ul className="pagination justify-content-end pagination-sm">
          <li className="page-item disabled">
            <a href="#" className="page-link">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              1
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
