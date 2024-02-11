import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  //   const { isError, isLoading } = useUserQuery();
  //   const token = TokenService.getToken();

  //   if (isError || !token) {
  //     return <Navigate to="/login" replace />;
  //   }
  return <Outlet />;
  // return <Navigate to="work" replace />;
  // //return !isLoading && <Outlet />;
};

export default PrivateRoute;
