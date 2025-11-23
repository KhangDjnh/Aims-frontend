import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import PayOrder from './pages/PayOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/place-order',
    element: <PlaceOrder />,
  },
  {
    path: '/pay-order',
    element: <PayOrder />,
  },
]);

export default router;
