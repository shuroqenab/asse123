import React from 'react';

const MainContent = () => (
  <main>
    <div className="container position-relative mt-4">

      <img src="assets/Subscribe section background.png" className="w-100" alt="Subscribe Section" />
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <p className="fs-1 fw-bold text-primary">Let's explore & travel the world</p>
        <p className="fs-6 text-primary">Find the best destinations and the most popular stays!</p>
      </div>

      <div className="position-relative container mt-4">
     
        <div className="position-absolute top-0 start-0">
          <p className="fs-6 text-primary fw-bold">PLAN YOUR NEXT TRIP</p>
          <p className="fs-4 fw-bold">Most Popular Destinations</p>
        </div>

        <div className="position-absolute top-0 end-0">
          <a className="icon-link text-decoration-none" href="#">
            View All destinations
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#arrow-right"></use>
            </svg>
          </a>
        </div>

        {/* صور الوجهات */}
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          {[
            { name: "Paris", img: "assets/ParisImage.png" },
            { name: "Greece", img: "assets/GreeceImage.png" },
            { name: "Norway", img: "assets/NorwayImage.png" },
            { name: "Tuscany", img: "assets/TuscanyImage.png" }
          ].map((destination, index) => (
            <div key={index} className="col position-relative" style={{ width: "20rem" }}>
              <img src={destination.img} className="img-fluid rounded-4" alt={destination.name} />
              <div className="position-absolute top-0 start-15 fw-bold text-white fs-5">
                {destination.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-4">
        <p className="fs-4 fw-bold">Recommended Holidays</p>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {[
            { name: "Bali", img: "/puplic/assets/image_480.png", duration: "4D3N", price: "$899" },
            { name: "Switzerland", img: "assets/SwitzerlandImage.png", duration: "6D5N", price: "$900" },
            { name: "Boracay", img: "assets/BoracayImage.png", duration: "5D4N", price: "$699" },
            { name: "Palawan", img: "assets/PalawanImage.png", duration: "4D3N", price: "$789" }
          ].map((holiday, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <img src={holiday.img} className="card-img-top" alt={holiday.name} />
                <div className="card-body">
                  <p className="card-title fs-4 fw-bold">{holiday.name}</p>
                  <p className="card-text">{holiday.duration}</p>
                </div>
                <div className="card-footer">
                  <h5 className="text-primary">{holiday.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
);

export default MainContent;
