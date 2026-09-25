/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUp, CheckCircle, Send } from 'lucide-react';

export const NewsletterFooter: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) {
      setError('Please provide your name and email address.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F5] border-t border-[#ECE2DB]">
      {/* Newsletter Signup Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-20 border-b border-[#EBE1D8]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Brand Lockup */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-editorial text-3xl sm:text-4xl font-semibold tracking-[0.14em] uppercase text-[#22201E]">
              ALEX BLOOM
            </span>
            <span className="text-[10px] tracking-[0.32em] uppercase text-[#7D736C] font-sans mt-1">
              COACHING · PODCAST
            </span>
          </div>

          {/* Newsletter Form */}
          <div className="w-full lg:max-w-xl">
            <div className="text-center lg:text-right mb-3">
              <span className="script-accent text-3xl sm:text-4xl text-[#3D332D] lowercase">
                Grab our Starter Guide
              </span>
            </div>

            {submitted ? (
              <div className="bg-[#EBE4F0] border border-[#DECEDF] p-4 text-center rounded-xs animate-in fade-in duration-300">
                <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#35253A] mb-1">
                  <CheckCircle className="w-4 h-4 text-[#5D4266]" />
                  <span>WELCOME TO THE SISTERHOOD, {firstName.toUpperCase()}!</span>
                </div>
                <p className="text-xs text-[#5D4D63]">
                  Your free Starter Guide and VIP podcast feed access have been sent to {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-4 py-3 text-xs tracking-[0.16em] uppercase bg-white border border-[#DDD2C9] focus:outline-none focus:border-black placeholder:text-[#A79C93] flex-1 text-[#22201E]"
                  required
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 text-xs tracking-[0.16em] uppercase bg-white border border-[#DDD2C9] focus:outline-none focus:border-black placeholder:text-[#A79C93] flex-1 text-[#22201E]"
                  required
                />
                <button
                  type="submit"
                  className="px-7 py-3 text-xs font-semibold tracking-[0.2em] uppercase bg-[#E1F264] text-black border border-[#C5D849] hover:bg-[#D5E652] transition-all active:scale-[0.98] shadow-2xs whitespace-nowrap"
                >
                  SUBMIT
                </button>
              </form>
            )}

            {error && (
              <p className="text-[11px] text-red-600 mt-2 text-center lg:text-right font-medium">
                {error}
              </p>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.2em] uppercase text-[#887D75]">
        <div>
          <span>© {new Date().getFullYear()} ALEX BLOOM STUDIO. ALL RIGHTS RESERVED.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-black transition-colors">PRIVACY POLICY</a>
          <span>·</span>
          <a href="#" className="hover:text-black transition-colors">TERMS OF SERVICE</a>
          <span>·</span>
          <span>DESIGN BY SHOWIT / CREATIVE</span>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
