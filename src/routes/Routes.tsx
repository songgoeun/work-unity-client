import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';

const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));
const PrivateRoute = lazy(() => import('@/routes/PrivateRoute'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/',
        element: <PrivateRoute />,
        children: [
          {
            path: '/',
            element: <Navigate to="home" />,
          },
        ],
      },
    ],
  },
]);

export default router;
