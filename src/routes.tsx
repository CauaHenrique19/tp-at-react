import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/home/Home';
import { PrivateRoute } from './components';
import Dashboard from './views/dashboard/Dashboard';
import Form from './views/form/Form';
import Settings from './views/settings/Settings';
import Signup from './views/signup/SignUp';
import Signin from './views/signin/Signin';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
        <Route path="/new/:type" element={<PrivateRoute element={<Form />} />} />
        <Route path="*" element={<div>pagina não encontrada </div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
