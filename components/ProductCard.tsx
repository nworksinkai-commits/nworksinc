
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product, User } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  user: User | null;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, user }) => {
  
  const hasDiscount = user && user.isMember && product.price > 0;
  const discountedPrice = hasDiscount ? Math.floor(product.price * 0.9) : product.price;

  return (
    <div className="group flex flex-col gap-6 cursor-pointer relative" onClick={() => onClick(product)}>
      
      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-[#0F172A] px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-md animate-fade-in-up">
            Member Offer
        </div>
      )}

      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 shadow-sm">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/40 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="bg-white text-[#0F172A] px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#0284C7] hover:text-white transition-colors">
                    View Details
                </span>
            </div>
        </div>
      </div>
      
      <div className="text-center px-4">
        <h3 className="text-2xl font-bold text-[#0F172A] mb-2 group-hover:text-[#0284C7] transition-colors">{product.name}</h3>
        <p className="text-sm font-medium text-[#64748B] mb-3 tracking-wide uppercase">{product.tagline}</p>
        
        {product.price > 0 ? (
             <div className="flex flex-col items-center gap-1">
                {hasDiscount ? (
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-400 line-through decoration-slate-400">KSh {product.price.toLocaleString()}</span>
                        <span className="text-base font-bold text-yellow-600">KSh {discountedPrice.toLocaleString()}</span>
                    </div>
                ) : (
                    <span className="text-sm font-bold text-[#0F172A] block">KSh {product.price.toLocaleString()}</span>
                )}
             </div>
        ) : (
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest">Quote Only</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
