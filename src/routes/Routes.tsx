import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';

const WithBaseComponent = lazy(() => import('@/hoc/WithBaseComponent/WithBaseComponent'));
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));
const PrivateRoute = lazy(() => import('@/routes/PrivateRoute'));
const WorkPage = lazy(() => import('@/pages/WorkPage/WorkPage'));

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
            element: <Navigate to="work" />,
          },
          {
            path: '/work',
            element: <WithBaseComponent components={<WorkPage />} />,
          },
        ],
      },
    ],
  },
]);

export default router;
