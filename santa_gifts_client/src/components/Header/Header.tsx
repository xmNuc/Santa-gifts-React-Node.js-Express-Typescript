import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const linkColor = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'burlywood' : 'grey',
  });
  return (
    <>
      <h1>Santa gifts app</h1>

      <span>
        Menu:{' '}
        <NavLink to="/gift" style={linkColor}>
          Gifts
        </NavLink>{' '}
        <NavLink to="/child" style={linkColor}>
          Childs
        </NavLink>{' '}
      </span>
    </>
  );
};
