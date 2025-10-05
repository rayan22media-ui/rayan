import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { CartItem } from './components/CartItem';
import { ELON_FORTUNE, PRODUCTS } from './constants';
import type { Product } from './types';

const App: React.FC = () => {
  const [fortune, setFortune] = useState<number>(ELON_FORTUNE);
  const [cart, setCart] = useState<Product[]>([]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const handleBuy = useCallback((product: Product) => {
    if (fortune >= product.price) {
      setFortune((prevFortune) => prevFortune - product.price);
      setCart((prevCart) => [...prevCart, { ...product, id: Date.now() + Math.random() }]);
    }
  }, [fortune]);

  const handleSell = useCallback((itemToSell: Product) => {
    setFortune((prevFortune) => prevFortune + itemToSell.price);
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemToSell.id));
  }, []);
  
  const totalSpent = ELON_FORTUNE - fortune;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <Header fortune={fortune} formatCurrency={formatCurrency} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Products Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-amber-600 mb-6 border-b-2 border-amber-500/30 pb-2">
              متجر الملياردير
            </h2>
            {PRODUCTS.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {PRODUCTS.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onBuy={handleBuy}
                    canAfford={fortune >= product.price}
                    formatCurrency={formatCurrency}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center text-gray-500 h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold mb-2">المتجر مغلق حالياً</h3>
                <p>لا توجد منتجات لعرضها في الوقت الحالي. ربما اشترى إيلون كل شيء!</p>
              </div>
            )}
          </div>

          {/* Cart/Possessions Section */}
          <div className="lg:col-span-1 bg-white rounded-lg p-6 shadow-2xl border border-gray-200 h-fit sticky top-8">
            <h2 className="text-2xl font-bold text-green-600 mb-4 border-b-2 border-green-500/30 pb-2">
              ممتلكاتك
            </h2>
            <div className="space-y-2 mb-6 text-lg">
                <p><strong>المبلغ الذي تم إنفاقه:</strong> <span className="font-mono text-red-600">{formatCurrency(totalSpent)}</span></p>
                <p><strong>العناصر المشتراة:</strong> <span className="font-mono text-cyan-500">{cart.length}</span></p>
            </div>
            
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-10">عربة التسوق فارغة. ابدأ بإنفاق بعض المليارات!</p>
              ) : (
                cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onSell={handleSell}
                    formatCurrency={formatCurrency}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;