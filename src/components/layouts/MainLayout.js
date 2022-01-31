import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function MainLayout() {
  return (
    <section id="main">
      <div className="main-container ">
        <Header />
        <div className="content">
          <div>
            <h2> Welcome to GN Shop</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere.
            </p>
          </div>
        </div>
        <Outlet />
        <Footer />
      </div>
    </section>
  );
}

export default MainLayout;
