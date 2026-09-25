/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const PressLogos: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 border-b border-[#ECE3DB] bg-[#FAF7F5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#94877F]">
            AS FEATURED IN
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
          
          {/* SHOWIT */}
          <div className="flex items-center gap-2 text-[#24211F] select-none hover:scale-105 transition-transform">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-sans text-lg sm:text-xl font-bold tracking-[0.2em] uppercase">
              SHOWIT
            </span>
          </div>

          {/* Forbes */}
          <div className="select-none hover:scale-105 transition-transform">
            <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#24211F] italic">
              Forbes
            </span>
          </div>

          {/* RISING TIDE */}
          <div className="select-none text-center hover:scale-105 transition-transform">
            <span className="font-sans text-sm sm:text-base font-semibold tracking-[0.3em] uppercase text-[#24211F]">
              RISING TIDE
            </span>
          </div>

          {/* creative at heart */}
          <div className="select-none hover:scale-105 transition-transform">
            <span className="script-accent text-2xl sm:text-3xl text-[#24211F] font-normal lowercase">
              creative at heart
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
