import React from 'react';
import './styles/HomePage.css';

function HomePage() {
  return (
    <div className="container home-page">
      <section className="hero">
        <div className="hero-image">
          <img src="path/to/hero-image.jpg" alt="Clinic Hero Image" />
        </div>
        <div className="hero-text">
          <h2>Providing Quality Healthcare to Those in Need</h2>
          <p>Our clinic is dedicated to offering free medical care to low-income individuals in the community.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="path/to/service-1.jpg" className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="card-title">General Checkups</h5>
                <p className="card-text">Comprehensive medical evaluations to assess overall health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Patients Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p>"The doctors and staff at this clinic are amazing. They've been so kind and helpful to me."</p>
              <span>- John Doe</span>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
