/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, ArrowUpRight, Play } from 'lucide-react';
import { PodcastEpisode } from '../data/siteData';

interface HeroProps {
  onPlayEpisode: (ep: PodcastEpisode) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlayEpisode, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-[#EFEAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-12 relative">
          
          {/* Left Vertical Social Spine (Desktop) */}
          <div className="hidden lg:flex flex-col items-center justify-between self-stretch pr-4 py-6 border-r border-[#EFE8E2]">
            <div className="flex flex-col items-center gap-5 text-[#6B6460]">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="hover:text-black transition-colors hover:scale-110"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-black transition-colors hover:scale-110"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-black transition-colors hover:scale-110"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-black transition-colors hover:scale-110"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Rotated "CONNECT" text */}
            <div className="my-auto py-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C837D] font-medium [writing-mode:vertical-rl] rotate-180 select-none">
                CONNECT
              </span>
            </div>

            <div className="w-[1px] h-12 bg-[#DFD6CE]" />
          </div>

          {/* Left Main Editorial Title Column */}
          <div className="flex-1 flex flex-col justify-center max-w-2xl py-2 lg:py-6">
            <div className="inline-flex items-center gap-2 mb-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-[#7A716C]">
              <span>EPISODES · COACHING · COMMUNITY</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-[#22201E] font-medium mb-6 uppercase">
              PODCAST STUDIO
              <span className="block font-normal">AND EDUCATION</span>
              <span className="block font-normal">FOR FEMALE</span>
              <span className="relative inline-block mt-1 font-semibold">
                <span className="relative z-10">BUSINESS COACHES</span>
                {/* Lime highlighter bar exactly matching the image */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 bottom-1.5 w-[105%] -ml-1 h-3.5 sm:h-4.5 bg-[#E1F264] -z-0 opacity-90"
                />
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#615A56] leading-relaxed max-w-lg mb-8 font-light">
              We empower female founders and coaches to expand their authority, build high-converting podcast ecosystems, and scale sustainable 6-figure businesses with ease and purpose.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreServices();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase bg-[#22201E] text-white hover:bg-black transition-all active:scale-[0.98]"
              >
                <span>EXPLORE PROGRAMS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#podcast"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase bg-[#FAF7F5] border border-[#DDD3CB] text-[#2F2B28] hover:border-black transition-all active:scale-[0.98]"
              >
                <Play className="w-3 h-3 fill-current ml-0.5" />
                <span>LISTEN TO SHOW</span>
              </a>
            </div>

            {/* Mobile Social Bar */}
            <div className="flex lg:hidden items-center gap-5 mt-8 pt-6 border-t border-[#ECE5DE] text-[#69625E]">
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium">CONNECT:</span>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="flex-1 w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Background delicate offset accent */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 w-full h-full bg-[#EBE4F0] -z-10 rounded-sm"
              />
              
              <div className="relative overflow-hidden bg-white border border-[#E8DFD8] shadow-sm aspect-[4/3] group">
                <img
                  src="/src/assets/images/hero_female_coach_1790266564667.jpg"
                  alt="Alex Bloom in podcast studio with coffee and laptop on cozy cream sofa"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle bottom badge indicator */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1.5 border border-[#ECE5DF] text-[10px] tracking-[0.16em] uppercase font-semibold text-[#3C3633]">
                  STUDIO NO. 04 · RECORDING LIVE
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
