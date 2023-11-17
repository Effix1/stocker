import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/layout';
import PropertyError from './pages/PropertyError';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PropertyError />,
  },
]);
