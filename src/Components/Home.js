import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="content">
      <div className="site-section site-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <span
                className="d-block mb-3 caption"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Prolins | Desafio de programação
              </span>
              <h1
                className="d-block mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Desenvolvedor WEB
              </h1>
              <Link
                to="/login"
                className="btn-custom"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span>Começar</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
