/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const item = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-[#FAF7F5] border-b border-[#ECE2DB]">
      <div className="max-w-4xl mx-auto text-center">
        
        <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#887F77] block mb-3">
          TESTIMONIALS
        </span>

        <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-[#22201E] font-medium mb-5">
          WHAT LISTENERS ARE SAYING
        </h2>

        {/* 5 Golden Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-8 text-[#DCA735]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Quote Carousel with Carousel Arrows */}
        <div className="relative px-8 sm:px-16 py-4 min-h-[160px] flex flex-col justify-center">
          
          {/* Prev Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-[#7C7169] hover:text-black hover:scale-110 transition-all focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-[#3E3834] leading-relaxed font-light italic animate-in fade-in duration-300">
              "{item.quote}"
            </p>

            <div className="mt-6 flex flex-col items-center">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#231F1D]">
                {item.author}
              </span>
              <span className="text-[11px] tracking-[0.18em] uppercase text-[#887C74] font-light mt-0.5">
                {item.role}
              </span>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[#7C7169] hover:text-black hover:scale-110 transition-all focus:outline-none"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === idx ? 'w-6 bg-black' : 'w-1.5 bg-[#D6CBC1]'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
