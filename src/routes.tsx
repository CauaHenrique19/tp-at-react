import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/home/Home';
import { PrivateRoute } from './components';
import Dashboard from './views/dashboard/Dashboard';
import Form from './views/form/Form';
import Settings from './views/settings/Settings';
import Signup from './views/signup/SignUp';
import Signin from './views/signin/Signin';

export const mainPath = "at-tp-react";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={`${mainPath}/signin`} element={<Signin />} />
        <Route path={`${mainPath}/signup`} element={<Signup />} />
        <Route path={`${mainPath}/`} element={<PrivateRoute element={<Home />} />} />
        <Route path={`${mainPath}/dashboard`} element={<PrivateRoute element={<Dashboard />} />} />
        <Route path={`${mainPath}/settings`} element={<PrivateRoute element={<Settings />} />} />
        <Route path={`${mainPath}/new/:type`} element={<PrivateRoute element={<Form />} />} />
        <Route path="*" element={<div>pagina não encontrada </div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
