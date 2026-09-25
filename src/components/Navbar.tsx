/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Radio } from 'lucide-react';

interface NavbarProps {
  onOpenMastermindModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMastermindModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PODCAST', href: '#podcast' },
    { name: 'FAVORITES', href: '#favorites' },
    { name: 'MEDIA', href: '#media' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F5]/95 backdrop-blur-md border-b border-[#ECE5DF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22201E] rounded-sm">
          <span className="font-editorial text-xl sm:text-2xl font-semibold tracking-[0.14em] uppercase text-[#242121] group-hover:text-black transition-colors">
            ALEX BLOOM
          </span>
          <span className="text-[9px] tracking-[0.28em] uppercase text-[#736B66] -mt-0.5 font-sans">
            COACHING · PODCAST
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-medium tracking-[0.18em] uppercase text-[#544E4B]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-black transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#podcast"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#E1F264] text-black border border-[#C5D849] hover:bg-[#D4E652] hover:shadow-xs transition-all whitespace-nowrap active:scale-[0.98]"
          >
            <Radio className="w-3.5 h-3.5" />
            <span>TUNE IN</span>
          </a>

          <button
            onClick={onOpenMastermindModal}
            className="px-4 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#DFC4B6] text-[#2D2421] border border-[#CCAFA0] hover:bg-[#D5B8A8] transition-all whitespace-nowrap active:scale-[0.98]"
          >
            MASTERMIND
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#332F2D] hover:text-black md:hidden focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8DFD8] bg-[#FAF7F5] px-6 py-5 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#47413E]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-black transition-colors border-b border-[#EFEAE5] pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#podcast"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase bg-[#E1F264] text-black"
              >
                <Radio className="w-4 h-4" />
                TUNE IN TO PODCAST
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMastermindModal();
                }}
                className="py-2.5 text-xs font-semibold tracking-[0.16em] uppercase bg-[#DFC4B6] text-black"
              >
                APPLY FOR MASTERMIND
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
