import HeadCarousel from '../components/headerItems/HeadCarousel';

function Home() {
  return (
    <>
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
