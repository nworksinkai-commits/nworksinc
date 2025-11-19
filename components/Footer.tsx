
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#0F172A] pt-24 pb-12 px-6 text-slate-400">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-2xl font-bold text-white mb-6 lowercase">nworksinc</h4>
          <p className="max-w-xs font-light leading-relaxed mb-6">
            Creating unique design & experiences while ensuring financial growth by providing excellent customer services.
          </p>
          <div className="text-sm space-y-1">
             <p>P.O BOX 14407 – 00800 Nairobi</p>
             <p>nworksinc@gmail.com</p>
             <p>0737 346 920, 0721 289 886</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Services</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#38BDF8] transition-colors">Hardware</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#38BDF8] transition-colors">Creative Design</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#38BDF8] transition-colors">Branding</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#38BDF8] transition-colors">Digital Media</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Company</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#38BDF8] transition-colors">About Us</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#38BDF8] transition-colors">Vision & Mission</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#38BDF8] transition-colors">Values</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Newsletter</h4>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="email@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className="bg-transparent border-b border-slate-600 py-2 text-lg outline-none focus:border-[#38BDF8] transition-colors placeholder-slate-600 text-white disabled:opacity-50" 
            />
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className="self-start text-sm font-bold uppercase tracking-widest mt-2 hover:text-[#38BDF8] disabled:cursor-default disabled:hover:text-slate-400 disabled:opacity-50 transition-colors"
            >
              {subscribeStatus === 'idle' && 'Subscribe'}
              {subscribeStatus === 'loading' && 'Subscribing...'}
              {subscribeStatus === 'success' && 'Subscribed'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>© 2025 nworksinc. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
            <span>@nworksinc</span>
            <span>@nworksincstudio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
