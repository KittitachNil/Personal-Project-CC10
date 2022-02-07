import { Link } from 'react-router-dom';

function Breadcrumb() {
  return (
    <div className="dividers" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="#">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Library
        </li>
      </ol>
    </div>
  );
}
export default Breadcrumb;
