import React from 'react';

const Header = ({ history }) => {
  return (
    <>
      <div>
        <header
          className="dash-toolbar style-heading"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#19ea9e',
          }}
        >
          <h3
            className="text-center"
            style={{
              textTransform: 'uppercase',
              alignSelf: 'center',
              color: 'white',
            }}
          >
            NY Times Most Popular
          </h3>
        </header>
      </div>
    </>
  );
};

export default Header;
