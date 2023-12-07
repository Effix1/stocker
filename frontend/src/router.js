import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/layout';
import PropertyError from './pages/PropertyError';
import Homepage from './pages/homepage';
import Catalogue from './pages/Catalogue';
import Ajouter from './pages/ajouter';
import Plan from './pages/Plan';
import Liste from './pages/Liste';
import Produit from './components/produit';
import Miseajour from './pages/Maj';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PropertyError />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: 'catalogue',
        element: <Catalogue />,
      },
      {
        path: 'ajouter',
        element: <Ajouter />,
      },
      {
        path: 'produit',
        element: <Produit />,
      },
      {
        path: 'modifierproduit',
        element: <Miseajour />,
      },
    ],
  },
  {
    path: 'index1',
    element: <Layout />,
    children: [
      {
        path: 'plan',
        element: <Plan />,
      },
      {
        path: 'liste',
        element: <Liste />,
      },
    ],
  },
]);
