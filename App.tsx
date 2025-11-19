
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import LoginModal from './components/LoginModal';
import { Product, JournalArticle, ViewState, User } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Handle navigation (clicks on Navbar or Footer links)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string, category: string = 'All') => {
    e.preventDefault();
    
    // Update category filter if specified
    if (category) {
        setActiveCategory(category);
    }

    // If we are not home, go home first
    if (view.type !== 'home') {
      setView({ type: 'home' });
      // Allow state update to render Home before scrolling
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  const addToCart = (product: Product) => {
    // Apply discount logic if user is logged in
    let itemToAdd = { ...product };
    
    if (currentUser && currentUser.isMember && product.price > 0) {
        // 10% Member Discount
        itemToAdd.price = Math.floor(product.price * 0.9);
        itemToAdd.name = `${product.name} (Member Deal)`;
    }

    setCartItems([...cartItems, itemToAdd]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const handleLogin = (email: string) => {
    // Mock User Data
    const mockUser: User = {
        name: 'Alex Mwangi',
        email: email,
        isMember: true
    };
    setCurrentUser(mockUser);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
      setCurrentUser(null);
      // Optional: Clear cart if you want strictly separate sessions, but keeping it is usually better UX
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0F172A] selection:bg-[#0284C7] selection:text-white">
      {view.type !== 'checkout' && (
        <Navbar 
            onNavClick={handleNavClick} 
            cartCount={cartItems.length}
            onOpenCart={() => setIsCartOpen(true)}
            user={currentUser}
            onLoginClick={() => setIsLoginOpen(true)}
            onLogoutClick={handleLogout}
        />
      )}
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero onNavClick={handleNavClick} />
            <ProductGrid 
                onProductClick={(p) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setView({ type: 'product', product: p });
                }} 
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                user={currentUser}
            />
            <About />
            <Journal onArticleClick={(a) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'journal', article: a });
            }} />
          </>
        )}

        {view.type === 'product' && (
          <ProductDetail 
            product={view.product} 
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('products'), 50);
            }}
            onAddToCart={addToCart}
            user={currentUser}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'checkout' && (
            <Checkout 
                items={cartItems}
                onBack={() => setView({ type: 'home' })}
            />
        )}
      </main>

      {view.type !== 'checkout' && <Footer onLinkClick={handleNavClick} />}
      
      <Assistant />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
            setIsCartOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setView({ type: 'checkout' });
        }}
      />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;
