import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPassordLost from './LoginPassordLost';
import { UserContext } from '../../UserContext';


export const Login = () => {

  const { data } = React.useContext(UserContext);

  if (data) {
    if (data.profile === 1) {
      return <Navigate to="/admin" />;
    } else {
      return <Navigate to="/cliente" />;
    }
  }

  return (
    <div className="content login">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
        <Route path="/perdeu" element={<LoginPassordLost />} />
      </Routes>
    </div>
  );
};

export default Login;
