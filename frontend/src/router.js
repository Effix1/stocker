import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/layout';
import PropertyError from './pages/PropertyError';
import Homepage from './pages/homepage';
import Catalogue from './components/Catalogue';
import Ajouter from './pages/ajouter';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PropertyError />,
    children: [
      {
        path:'',
        element: <Homepage/>
      },
      {
        path: 'catalogue',
        element: <Catalogue/>
      },
      {
        path: 'ajouter',
        element: <Ajouter/>
      }
    ]
  },
]);
