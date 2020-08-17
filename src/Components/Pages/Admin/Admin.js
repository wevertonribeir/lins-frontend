import React from 'react';
import { UserContext } from '../../../UserContext';
import { Navigate } from 'react-router-dom';

const Admin = () => {

  const { data } = React.useContext(UserContext);

  console.log(data);



  return (
    <div className="content">
      <h1>Admin</h1>
    </div>
  );
};

export default Admin;
