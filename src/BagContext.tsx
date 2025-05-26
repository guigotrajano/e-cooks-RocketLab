import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
  maxQuantity?: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>, quantityToAdd: number) => void;
  removeFromCart: (itemId: string) => void;
  decreaseItemQuantity: (itemId: string) => void;
  increaseItemQuantity: (itemId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<CartItem, 'quantity'>, quantityToAdd: number) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        let newQuantity = existingItem.quantity + quantityToAdd;
        if (product.maxQuantity) {
          newQuantity = Math.min(newQuantity, product.maxQuantity);
        }
        updatedItems[existingItemIndex] = { ...existingItem, quantity: newQuantity };
        return updatedItems;
      } else {

        const initialQuantity = product.maxQuantity ? Math.min(quantityToAdd, product.maxQuantity) : quantityToAdd;
        return [...prevItems, { ...product, quantity: initialQuantity }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const decreaseItemQuantity = (itemId: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevItems.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {

          return prevItems.filter(item => item.id !== itemId);
        }
      }
      return prevItems;
    });
  };

  const increaseItemQuantity = (itemId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + 1;
          return (item.maxQuantity && newQuantity > item.maxQuantity) ? item : { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseItemQuantity, increaseItemQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};