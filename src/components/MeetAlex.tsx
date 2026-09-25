/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { FAVORITES_DATA } from '../data/siteData';

interface MeetAlexProps {
  onLearnMoreStudio: () => void;
}

export const MeetAlex: React.FC<MeetAlexProps> = ({ onLearnMoreStudio }) => {
  const [selectedFavorite, setSelectedFavorite] = useState<number | null>(null);

  return (
    <section id="about" className="border-b border-[#ECE3DB] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: MEET ALEX (Soft Lavender Background) */}
        <div className="lg:col-span-4 bg-[#EBE4F0] p-8 sm:p-12 lg:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#DECEDF]">
          <div className="max-w-md mx-auto lg:mx-0">
            <span className="text-[10px] font-semibold tracking-[0.26em] uppercase text-[#73637A] mb-2 block">
              THE FOUNDER
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl uppercase tracking-tight text-[#251E28] font-medium mb-5">
              MEET ALEX
            </h2>

            <p className="text-sm sm:text-[14.5px] text-[#4E4453] leading-relaxed font-light mb-8">
              A coverage e-entrepreneur, social impact program area; relief except counter-censorship print; foster-to-person powerful paradigm changemakers. Ecosystems, celebrate; social entrepreneurship data storytelling human-centered collaborative cities inspiration medical collective partner social intrapreneurship incubator our work compassion.
            </p>

            <button
              onClick={onLearnMoreStudio}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase bg-[#E1F264] text-black border border-[#C5D849] hover:bg-[#D5E652] transition-all active:scale-[0.98] shadow-xs"
            >
              <span>MORE ABOUT THE STUDIO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center Column: Portrait of Alex sitting on floor */}
        <div className="lg:col-span-4 bg-[#EBE4F0] lg:bg-transparent flex items-center justify-center p-6 sm:p-8 lg:p-0">
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] overflow-hidden group">
            <img
              src="/src/assets/images/alex_portrait_floor_1790266589116.jpg"
              alt="Alex Bloom sitting on parquet floor with laptop and journal"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Subtle floating quote badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3 border border-[#E7DFD8] text-center">
              <p className="font-editorial text-xs italic text-[#3B3430]">
                "Building sustainable wealth with feminine intuition and strategic grit."
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: A FEW OF MY FAVORITE THINGS (Soft Sand / Peach Background) */}
        <div id="favorites" className="lg:col-span-4 bg-[#F8EFEA] p-8 sm:p-12 lg:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#EADFD8]">
          <div className="max-w-md mx-auto lg:mx-0 w-full">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E8DDD5]">
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#887870]">
                A FEW OF MY FAVORITE THINGS
              </span>
              <Heart className="w-3.5 h-3.5 text-[#A5887C] fill-current opacity-70" />
            </div>

            <div className="flex flex-col divide-y divide-[#EFE5DE]">
              {FAVORITES_DATA.map((item, idx) => {
                const isOpen = selectedFavorite === idx;
                return (
                  <div
                    key={item.label}
                    onClick={() => setSelectedFavorite(isOpen ? null : idx)}
                    className="py-4 cursor-pointer group transition-colors hover:bg-white/40 px-2 rounded-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-editorial text-xl sm:text-2xl uppercase tracking-wider text-[#2D2421] font-medium group-hover:text-black transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-[11px] tracking-[0.2em] uppercase text-[#8C7A70] font-light mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 text-[#A8988F] transition-transform duration-200 group-hover:translate-x-1 ${
                          isOpen ? 'rotate-90 text-black' : ''
                        }`}
                      />
                    </div>

                    {isOpen && (
                      <p className="mt-2.5 text-xs text-[#5D524C] leading-relaxed pl-1 pt-1 border-t border-[#EAE0D7] animate-in fade-in duration-200">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DDD5] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#96867E]">
              <span>CURATED LIFE · STUDIO ESSENTIALS</span>
              <Sparkles className="w-3 h-3 text-[#A5887C]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
