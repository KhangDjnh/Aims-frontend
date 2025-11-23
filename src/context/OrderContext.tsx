import { createContext, useContext, useState, ReactNode } from 'react';
import type { CartItem } from './CartContext';

export interface OrderInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  note: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  orderInfo: OrderInfo;
  total: number;
  orderDate: Date;
}

interface OrderContextType {
  currentOrder: Order | null;
  setCurrentOrder: (order: Order | null) => void;
  createOrder: (items: CartItem[], orderInfo: OrderInfo, total: number) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const createOrder = (items: CartItem[], orderInfo: OrderInfo, total: number) => {
    const order: Order = {
      id: `ORD-${Date.now()}`,
      items,
      orderInfo,
      total,
      orderDate: new Date(),
    };
    setCurrentOrder(order);
  };

  return (
    <OrderContext.Provider
      value={{
        currentOrder,
        setCurrentOrder,
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

