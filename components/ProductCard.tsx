
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
  canAfford: boolean;
  formatCurrency: (amount: number) => string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy, canAfford, formatCurrency }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-amber-500/20 hover:scale-105 border border-gray-700 flex flex-col">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-100 flex-grow">{product.name}</h3>
        <p className="text-2xl font-mono text-amber-400 my-3">
          {formatCurrency(product.price)}
        </p>
        <button
          onClick={() => onBuy(product)}
          disabled={!canAfford}
          className={`w-full mt-auto px-4 py-2 font-bold rounded-md transition-colors duration-200 text-lg
            ${canAfford 
              ? 'bg-amber-500 hover:bg-amber-600 text-gray-900' 
              : 'bg-gray-600 cursor-not-allowed text-gray-400'
            }`}
        >
          {canAfford ? 'شراء' : 'لا يمكن شراؤه'}
        </button>
      </div>
    </div>
  );
};
