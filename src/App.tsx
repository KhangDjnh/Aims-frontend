import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import router from './routes';
import './App.css';

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <RouterProvider router={router} />
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
