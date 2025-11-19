
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';
import { User } from '../types';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, category?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  user: User | null;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart, user, onLoginClick, onLogoutClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, category?: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId, category);
  };

  const handleCartClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onOpenCart();
  }

  // Determine text color based on state
  const textColorClass = (scrolled || mobileMenuOpen) ? 'text-[#0F172A]' : 'text-white drop-shadow-sm';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, '', 'All'); // Reset to home and all categories
            }}
            className={`text-2xl font-bold tracking-tight z-50 relative transition-colors duration-500 ${textColorClass}`}
          >
            <span className="font-black lowercase tracking-tighter text-3xl">nworksinc</span>
          </a>
          
          {/* Center Links - Desktop */}
          <div className={`hidden md:flex items-center gap-12 text-sm font-bold tracking-widest uppercase transition-colors duration-500 ${textColorClass}`}>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products', 'All')} className="hover:text-[#0284C7] transition-colors">Services</a>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products', 'Merchandise')} className="hover:text-[#0284C7] transition-colors">Shop</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#0284C7] transition-colors">About</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-[#0284C7] transition-colors">Values</a>
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-6 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            
            {/* User Auth Desktop */}
            <div className="hidden sm:flex items-center gap-4 border-r border-current pr-6">
                {user ? (
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-medium opacity-80">Hi, {user.name.split(' ')[0]}</span>
                        <button onClick={onLogoutClick} className="text-xs font-bold uppercase tracking-widest hover:text-[#EF4444] transition-colors">Logout</button>
                    </div>
                ) : (
                    <button onClick={onLoginClick} className="text-sm font-bold uppercase tracking-widest hover:text-[#0284C7] transition-colors">
                        Login
                    </button>
                )}
            </div>

            <button 
              onClick={handleCartClick}
              className="text-sm font-bold uppercase tracking-widest hover:text-[#0284C7] transition-colors hidden sm:block"
            >
              Cart ({cartCount})
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-8 text-xl font-bold text-[#0F172A]">
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products', 'All')} className="hover:text-[#0284C7] transition-colors">Services</a>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products', 'Merchandise')} className="hover:text-[#0284C7] transition-colors">Shop</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#0284C7] transition-colors">About</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-[#0284C7] transition-colors">Values</a>
            
            <div className="w-12 h-[1px] bg-slate-200 my-4"></div>
            
            {user ? (
                <>
                    <span className="text-base text-slate-500 font-normal">Signed in as {user.name}</span>
                    <button onClick={() => { setMobileMenuOpen(false); onLogoutClick(); }} className="text-base uppercase tracking-widest text-[#EF4444]">Logout</button>
                </>
            ) : (
                <button onClick={() => { setMobileMenuOpen(false); onLoginClick(); }} className="text-base uppercase tracking-widest hover:text-[#0284C7]">Login / Register</button>
            )}
            
            <button 
                onClick={handleCartClick} 
                className="hover:text-[#0284C7] transition-colors text-base uppercase tracking-widest mt-4"
            >
                View Cart ({cartCount})
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
