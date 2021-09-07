import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const LayoutOne = ({ children }) => {
  return (
    <>
      <div className="dash">
        <Sidebar />
        <div className="dash-app">
          <Header />
          <main className="dash-content p-4" style={{ backgroundColor: '#e3e7ef' }}>
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutOne;
