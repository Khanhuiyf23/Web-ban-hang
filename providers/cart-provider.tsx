'use client';

import { CartItem } from '@/lib/types';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

type CartContextValue = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQty: (key: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeItem: (key: Omit<CartItem, 'quantity'>) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const cartKey = 'vibe_cart_v1';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(cartKey);
    if (raw) setItems(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(items));
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      addItem: (item: CartItem) => {
        setItems((prev) => {
          const found = prev.find(
            (p) => p.productId === item.productId && p.size === item.size && p.color === item.color
          );
          if (found) {
            return prev.map((p) =>
              p.productId === item.productId && p.size === item.size && p.color === item.color
                ? { ...p, quantity: p.quantity + item.quantity }
                : p
            );
          }
          return [...prev, item];
        });
      },
      updateQty: (key, quantity) => {
        if (quantity <= 0) {
          setItems((prev) => prev.filter((p) => !(p.productId === key.productId && p.size === key.size && p.color === key.color)));
          return;
        }
        setItems((prev) =>
          prev.map((p) =>
            p.productId === key.productId && p.size === key.size && p.color === key.color ? { ...p, quantity } : p
          )
        );
      },
      removeItem: (key) => {
        setItems((prev) => prev.filter((p) => !(p.productId === key.productId && p.size === key.size && p.color === key.color)));
      },
      clearCart: () => setItems([])
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
