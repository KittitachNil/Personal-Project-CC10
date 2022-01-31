function HeadCarousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide mx-0 mt-3"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://storage.googleapis.com/file-computeandmore/images/dd1e3c81-8a8b-4594-8405-30b3f386b8c3.jpg"
              className="d-block w-100 mx-auto"
              alt="GALAX"
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://storage.googleapis.com/file-computeandmore/images/416158ba-c78e-4272-b14a-4b177e7000ce.jpg"
              className="d-block w-100 mx-auto"
              alt="ENERMAX"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://storage.googleapis.com/image-computeandmore/Banner/Welcome%20banner/ASUS.jpg"
              className="d-block w-100 mx-auto"
              alt="ASUS Brand"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default HeadCarousel;
