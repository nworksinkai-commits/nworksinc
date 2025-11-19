
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product, User } from '../types';
import ProductCard from './ProductCard';

const categories = ['All', 'Hardware', 'Design', 'Branding', 'Media', 'Leather', 'Merchandise'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  user: User | null;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick, activeCategory, onCategoryChange, user }) => {

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="py-32 px-6 md:px-12 bg-[#F8FAFC]">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-24 space-y-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A]">Services & Shop</h2>
          
          {user && (
            <div className="bg-yellow-50 border border-yellow-200 px-6 py-2 rounded-full animate-fade-in-up">
                <p className="text-sm font-medium text-yellow-800">✨ Welcome back, {user.name}! Exclusive member prices are active.</p>
            </div>
          )}

          {/* Minimal Filter */}
          <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-slate-200 w-full max-w-3xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`text-sm font-medium uppercase tracking-widest pb-1 border-b-2 transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-[#0284C7] text-[#0F172A]' 
                    : 'border-transparent text-[#94A3B8] hover:text-[#0284C7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
