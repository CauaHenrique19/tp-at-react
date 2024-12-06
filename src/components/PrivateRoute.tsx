import React, { useState } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';

export const PrivateRoute: React.FC<RouteProps> = ({ element, ...rest }) => {
  const session = localStorage.getItem('session')

  return (
    session ? element : <Navigate to="/signin" />
  );
};
