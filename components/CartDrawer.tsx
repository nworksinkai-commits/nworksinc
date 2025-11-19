
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onCheckout }) => {
  const hasPricedItems = items.some(i => i.price > 0);
  const total = items.reduce((sum, item) => sum + item.price, 0);
  
  // Determine terminology based on cart contents
  const isPurchase = hasPricedItems;
  const buttonText = isPurchase ? 'Proceed to Checkout' : 'Request Quote';
  const titleText = isPurchase ? 'Shopping Cart' : 'Quote Request';

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#0F172A]/50 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-[#0F172A]">{titleText} ({items.length})</h2>
          <button 
            onClick={onClose} 
            className="text-[#94A3B8] hover:text-[#0F172A] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-[#94A3B8]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="font-medium text-[#64748B]">Your cart is empty.</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 animate-fade-in-up">
                <div className="w-20 h-20 bg-slate-100 flex-shrink-0">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-[#0F172A] text-sm">{item.name}</h3>
                        {item.price > 0 && <span className="text-sm font-medium text-[#0F172A]">KSh {item.price.toLocaleString()}</span>}
                    </div>
                    <p className="text-xs text-[#94A3B8] uppercase tracking-widest mt-1">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(idx)}
                    className="text-xs text-[#EF4444] hover:text-[#B91C1C] self-start font-medium transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50">
          {hasPricedItems && (
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium uppercase tracking-widest text-[#64748B]">Total</span>
                <span className="text-xl font-bold text-[#0F172A]">KSh {total.toLocaleString()}</span>
            </div>
          )}
          <p className="text-xs text-[#94A3B8] mb-6 text-center">
            {isPurchase ? 'Shipping calculated at checkout.' : 'Submit your list to receive a detailed quotation.'}
          </p>
          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full py-4 bg-[#0F172A] text-white uppercase tracking-widest text-sm font-bold hover:bg-[#0284C7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
