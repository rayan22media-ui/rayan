import React from 'react';

interface HeaderProps {
  fortune: number;
  formatCurrency: (amount: number) => string;
}

export const Header: React.FC<HeaderProps> = ({ fortune, formatCurrency }) => {
  return (
    <header className="text-center p-6 bg-white/50 rounded-lg shadow-xl border border-gray-200 backdrop-blur-sm">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 mb-2">
        متجر ثروة إيلون ماسك
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        رصيدك الحالي للإنفاق:
      </p>
      <div className="text-5xl sm:text-6xl font-mono font-bold text-green-600 tracking-wider">
        {formatCurrency(fortune)}
      </div>
    </header>
  );
};