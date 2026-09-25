/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 border-b border-[#EFEAE5] bg-[#FAF7F5]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="block text-[11px] font-semibold tracking-[0.26em] uppercase text-[#8F857E] mb-5">
          OUR CORE PHILOSOPHY
        </span>

        <p className="font-editorial text-xl sm:text-2xl md:text-3xl leading-[1.65] sm:leading-[1.75] tracking-[0.06em] uppercase text-[#252220] font-normal selection:bg-[#E1F264]">
          WELCOME TO OUR PODCAST STUDIO AND EDUCATION{' '}
          <span className="relative inline-block font-medium">
            <span className="relative z-10 px-1">COMMUNITY</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[#E1F264] -rotate-1 -z-0 opacity-90 rounded-xs"
            />
          </span>
          . WE'RE HERE TO{' '}
          <span className="relative inline-block font-medium">
            <span className="relative z-10 px-1">EMPOWER</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[#E1F264] rotate-1 -z-0 opacity-90 rounded-xs"
            />
          </span>{' '}
          FEMALE BUSINESS COACHES TO GROW AND SCALE THEIR BUSINESS. THOUGHT LEADER GENDER RIGHTS. COLLABORATIVE CITIES THEORY OF CHANGE SOCIAL CAPITAL. SOCIAL INTRAPRENEURSHIP INCUBATOR OUR WORK COMPASSION.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-8 h-[1px] bg-[#D4CBC3]" />
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#887F78]">ESTABLISHED 2021</span>
          <div className="w-8 h-[1px] bg-[#D4CBC3]" />
        </div>
      </div>
    </section>
  );
};
