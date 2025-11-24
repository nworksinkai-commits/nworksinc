
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      // Mock validation
      if (email.includes('@') && password.length > 3) {
        onLogin(email);
        setLoading(false);
        setEmail('');
        setPassword('');
      } else {
        setError('Invalid credentials. Try demo@nworksinc.com / 1234');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md rounded-sm shadow-2xl p-8 animate-slide-up-fade">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Member Access</h2>
          <p className="text-sm text-slate-500">Log in to unlock exclusive offers and discounts.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="demo@nworksinc.com"
              className="w-full p-3 bg-slate-50 border border-slate-200 outline-none focus:border-[#0284C7] transition-colors text-[#0F172A]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 bg-slate-50 border border-slate-200 outline-none focus:border-[#0284C7] transition-colors text-[#0F172A]"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm border border-red-100 rounded-sm">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-[#0F172A] text-white font-bold uppercase tracking-widest hover:bg-[#0284C7] transition-colors disabled:opacity-70"
          >
            {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-400">Don't have an account? <a href="#" className="text-[#0284C7] hover:underline">Register here</a> to get 10% off.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
