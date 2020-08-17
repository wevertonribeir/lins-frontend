import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className="site-navbar py-3" role="banner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-11 col-xl-2">
            <h1 className="mb-0 ml-3">
              <Link to="/" className="text-white h2 mb-0">
                Lins
              </Link>
            </h1>
          </div>

          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav
              className="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                <li className="cta">
                  {data == null ? (
                    <Link to="/login">Login</Link>
                  ) : (
                    <>
                      <Link to="/profile">{data.name}</Link>
                      <button onClick={userLogout}>Sair</button>
                    </>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
