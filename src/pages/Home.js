import HeadCarousel from '../components/HomeCarousel';

function Home() {
  return (
    <>
      <div className="content">
        <div>
          <h2> Welcome to GN Shop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere.
          </p>
        </div>
      </div>
      <div className="container mx-0 " style={{ maxWidth: '700px' }}>
        <div className="d-xl-flex align-items-center justify-content-center ">
          <div className="col ">
            <HeadCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
