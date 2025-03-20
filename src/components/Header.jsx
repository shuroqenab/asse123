import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => (
  <header>
     <nav className="navbar bg-body-tertiary container mt-4">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder">FlckleFlight</a>

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Hotels
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
            <i className="bi bi-bell"></i>
          </ul>
        </div>
      </nav>
  </header>
);

export default Header;
