import React from 'react';
import './styles/ServicesPage.css';

function ServicesPage() {
  return (
    <div className="container services-page">
      <section className="services">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="path/to/service-1.jpg" className="card-img-top" alt="General Checkups" />
              <div className="card-body">
                <h5 className="card-title">General Checkups</h5>
                <p className="card-text">Comprehensive medical evaluations to assess overall health.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="path/to/service-2.jpg" className="card-img-top" alt="Vaccinations" />
              <div className="card-body">
                <h5 className="card-title">Vaccinations</h5>
                <p className="card-text">Essential vaccines for children and adults.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="path/to/service-3.jpg" className="card-img-top" alt="Lab Tests" />
              <div className="card-body">
                <h5 className="card-title">Laboratory Testing</h5>
                <p className="card-text">Comprehensive lab tests for diagnostics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
