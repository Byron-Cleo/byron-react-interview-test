import React from 'react';

const HomeScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="card spur-card">
            <div className="card-header">
              <div className="spur-card-icon">
                <i className="fas fa-bell"></i>
              </div>
              <div className="spur-card-title">Interview Overview</div>
            </div>
            <div className="card-body"></div>
            <h2>Features</h2>
            <ul>
              <li>Display All Articles</li>
              <li>View Article Detail</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
