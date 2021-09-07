import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ match }) => {
  return (
    <div className="dash-nav dash-nav-dark">
      <header>
        <Link to="#!" className="menu-toggle">
          <i className="fas fa-bars"></i>
        </Link>
        <Link to="/dashboard" className="spur-logo">
          App. Tab
        </Link>
      </header>

      <nav className="dash-nav-list">
        <Link to="/most-viewed-articles" className="dash-nav-item">
          <i className="fas fa-boxes icon-space"></i>All Articles
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
