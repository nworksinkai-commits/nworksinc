
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const hasPricedItems = items.some(i => i.price > 0);
  const total = items.reduce((sum, item) => sum + item.price, 0);
  
  const title = hasPricedItems ? 'Checkout' : 'Request Quote';
  const submitText = hasPricedItems ? 'Place Order' : 'Submit Request';
  
  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F8FAFC] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#94A3B8] hover:text-[#0284C7] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A] mb-4">{title}</h1>
            <p className="text-sm text-[#64748B] mb-12">Please fill in your details to complete your {hasPricedItems ? 'order' : 'inquiry'}.</p>
            
            <div className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-6">Contact Information</h2>
                <div className="space-y-4">
                   <input type="email" placeholder="Email address" className="w-full bg-white border border-slate-200 p-3 text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#0284C7] transition-colors rounded-sm" disabled />
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="First name" className="w-full bg-white border border-slate-200 p-3 text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#0284C7] transition-colors rounded-sm" disabled />
                      <input type="text" placeholder="Last name" className="w-full bg-white border border-slate-200 p-3 text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#0284C7] transition-colors rounded-sm" disabled />
                   </div>
                   <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-slate-200 p-3 text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#0284C7] transition-colors rounded-sm" disabled />
                </div>
              </div>

              {/* Section 2: Shipping / Company Info */}
              <div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-6">{hasPricedItems ? 'Shipping Address' : 'Company Details (Optional)'}</h2>
                <div className="space-y-4">
                   <input type="text" placeholder={hasPricedItems ? "Street Address" : "Company Name"} className="w-full bg-white border border-slate-200 p-3 text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#0284C7] transition-colors rounded-sm" disabled />
                   <textarea placeholder="Additional message or requirements..." rows={4} className="w-full bg-white border border-slate-200 p-3 text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#0284C7] transition-colors rounded-sm" disabled></textarea>
                </div>
              </div>

              <div>
                <button 
                    disabled
                    className="w-full py-5 bg-[#0284C7] text-white uppercase tracking-widest text-sm font-bold cursor-not-allowed opacity-70 rounded-sm"
                >
                    {submitText}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-slate-200">
            <h2 className="text-xl font-bold text-[#0F172A] mb-8">{hasPricedItems ? 'Order Summary' : 'Inquiry Summary'}</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-slate-100 relative rounded-sm overflow-hidden flex-shrink-0">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                       <h3 className="font-bold text-[#0F172A] text-base">{item.name}</h3>
                       <p className="text-xs text-[#64748B]">{item.category}</p>
                    </div>
                    {item.price > 0 && (
                        <div className="text-sm font-bold text-[#0F172A]">
                            KSh {item.price.toLocaleString()}
                        </div>
                    )}
                 </div>
               ))}
            </div>
            
            {hasPricedItems && (
                <div className="border-t border-slate-200 pt-6 mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-[#64748B]">Subtotal</span>
                        <span className="font-medium">KSh {total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-[#64748B]">Shipping</span>
                        <span className="font-medium text-[#0284C7]">Calculated next step</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-xl font-bold text-[#0F172A]">KSh {total.toLocaleString()}</span>
                    </div>
                </div>
            )}

            <div className="border-t border-slate-200 pt-6">
               <p className="text-sm text-[#64748B] italic">
                 "We take time to understand our client and their needs to provide the perfect end result."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
