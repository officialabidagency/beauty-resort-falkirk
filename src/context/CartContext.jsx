import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const addItem = useCallback((service) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.name === service.name);
      if (exists) return prev;
      return [...prev, { ...service, qty: 1 }];
    });
    setToast(service.name);
    setTimeout(() => setToast(null), 2000);
  }, []);

  const removeItem = useCallback((name) => {
    setItems((prev) => prev.filter((i) => i.name !== name));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalPrice = items.reduce((sum, item) => {
    const base = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
    const addonTotal = item.addOns?.reduce((a, ad) => a + (parseInt(ad.price.replace(/[^0-9]/g, '')) || 0), 0) || 0;
    return sum + base + addonTotal;
  }, 0);

  const count = items.length;

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, count, isOpen, setIsOpen, toast, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
