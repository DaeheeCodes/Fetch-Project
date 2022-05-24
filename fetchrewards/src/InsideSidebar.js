import React from 'react';
import Sidebar from './Sidebar.js';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};