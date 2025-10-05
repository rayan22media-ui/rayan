import React from 'react';
import type { Product } from '../types';

interface CartItemProps {
  item: Product;
  onSell: (item: Product) => void;
  formatCurrency: (amount: number) => string;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onSell, formatCurrency }) => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between shadow-md transition-all duration-300 hover:bg-gray-200">
      <div>
        <p className="font-semibold text-gray-800">{item.name}</p>
        <p className="text-sm font-mono text-green-600">{formatCurrency(item.price)}</p>
      </div>
      <button 
        onClick={() => onSell(item)}
        className="px-3 py-1 text-sm font-bold bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
      >
        بيع
      </button>
    </div>
  );
};