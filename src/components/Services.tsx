/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, Headphones } from 'lucide-react';

interface ServicesProps {
  onOpenMastermind: () => void;
  onExplorePodcast: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenMastermind, onExplorePodcast }) => {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#FAF7F5] border-b border-[#EFEAE5]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-[#EBE3DC] p-6 sm:p-10 lg:p-12 shadow-xs rounded-xs">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-12">
            
            {/* Left Image */}
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="relative overflow-hidden bg-[#F4EDE8] border border-[#E7DDD5] aspect-[4/3] group">
                <img
                  src="/src/assets/images/services_desk_woman_1790266578507.jpg"
                  alt="Creative female coach working at minimalist desk with art prints"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase font-semibold text-[#48423E]">
                  CURATED OFFERINGS
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <div className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#887E77] mb-2">
                WHAT WE DO
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#22201E] font-medium mb-6">
                OUR SERVICES
              </h2>

              <p className="text-sm sm:text-base text-[#615A56] leading-relaxed font-light mb-8">
                Thoughtful entrepreneurship incubation; root work; comparative initiatives. A coverage e-entrepreneur, social impact program area; relief except counter-censorship print; foster-to-person powerful paradigm changemakers. Ecosystems, celebrate; social entrepreneurship data storytelling human-centered collaborative cities inspiration medical collective partner social intrapreneurship incubator compassion.
              </p>

              {/* Two Pastel CTA Buttons exactly matching image */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenMastermind}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase bg-[#E8C5B8] text-[#29221F] border border-[#D9B4A6] hover:bg-[#DEB8AB] transition-all active:scale-[0.98] shadow-2xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>COACHING MASTERMIND</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>

                <button
                  onClick={onExplorePodcast}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase bg-[#DDD5E3] text-[#2C2431] border border-[#CDC2D5] hover:bg-[#D2C8DB] transition-all active:scale-[0.98] shadow-2xs"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>THE ALEX BLOOM PODCAST</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
