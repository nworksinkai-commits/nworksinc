
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product, User } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  user: User | null;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart, user }) => {
  
  const isService = product.price === 0;
  const hasDiscount = user && user.isMember && !isService;
  
  // Visual price only, logic for cart is handled in App.tsx
  const displayPrice = hasDiscount ? Math.floor(product.price * 0.9) : product.price;

  return (
    <div className="pt-24 min-h-screen bg-[#F8FAFC] animate-fade-in-up">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#94A3B8] hover:text-[#0284C7] transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Main Image */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-square bg-slate-100 overflow-hidden shadow-lg relative">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fade-in-up"
              />
              {hasDiscount && (
                 <div className="absolute top-6 right-6 bg-yellow-400 text-[#0F172A] px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-xl">
                     Member Deal - 10% OFF
                 </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
                 {product.gallery?.map((img, idx) => (
                     <div key={idx} className="aspect-video bg-slate-100 overflow-hidden">
                         <img src={img} alt="" className="w-full h-full object-cover" />
                     </div>
                 ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center max-w-xl">
             <span className="text-sm font-bold text-[#0284C7] uppercase tracking-widest mb-2">{product.category}</span>
             <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">{product.name}</h1>
             
             {!isService && (
                 <div className="mb-8 flex items-baseline gap-4">
                     {hasDiscount ? (
                         <>
                             <span className="text-2xl font-light text-slate-400 line-through decoration-slate-400 decoration-1">KSh {product.price.toLocaleString()}</span>
                             <span className="text-3xl font-bold text-yellow-600">KSh {displayPrice.toLocaleString()}</span>
                         </>
                     ) : (
                         <span className="text-2xl font-light text-[#0F172A]">KSh {product.price.toLocaleString()}</span>
                     )}
                 </div>
             )}
             
             <p className="text-[#475569] leading-relaxed text-lg mb-8 border-b border-slate-200 pb-8">
               {product.longDescription || product.description}
             </p>

             <div className="flex flex-col gap-4">
               <button 
                 onClick={() => onAddToCart(product)}
                 className="w-full py-5 bg-[#0F172A] text-white uppercase tracking-widest text-sm font-bold hover:bg-[#0284C7] transition-colors shadow-lg flex justify-center items-center gap-2"
               >
                 {isService ? 'Request Quote' : (
                     <>
                        <span>Add to Order — KSh {displayPrice.toLocaleString()}</span>
                        {hasDiscount && <span className="bg-yellow-400 text-black text-[10px] px-1.5 py-0.5 rounded-sm font-bold">-10%</span>}
                     </>
                 )}
               </button>
               <ul className="mt-8 space-y-3 text-sm text-[#475569]">
                 {product.features.map((feature, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                     <span className="w-1.5 h-1.5 bg-[#0284C7] rounded-full"></span>
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
