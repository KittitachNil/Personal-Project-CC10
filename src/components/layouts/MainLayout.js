import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function MainLayout() {
  return (
    <section id="main">
      <div className="main-container ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </section>
  );
}

export default MainLayout;
