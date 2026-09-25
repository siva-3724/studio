/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, Disc3, ExternalLink } from 'lucide-react';
import { EPISODES_DATA, PodcastEpisode } from '../data/siteData';

interface FeaturedPodcastsProps {
  onPlayEpisode: (episode: PodcastEpisode) => void;
  onSubscribe: () => void;
}

export const FeaturedPodcasts: React.FC<FeaturedPodcastsProps> = ({ onPlayEpisode, onSubscribe }) => {
  const largeFeatured = EPISODES_DATA.find((ep) => ep.isFeaturedLarge) || EPISODES_DATA[0];
  const gridEpisodes = EPISODES_DATA.filter((ep) => !ep.isFeaturedLarge).slice(0, 4);

  return (
    <section id="podcast" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#FAF7F5] border-b border-[#ECE3DB]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#887F78] block mb-2">
            AUDIO CLASSROOM
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-[#22201E] font-medium">
            FEATURED PODCASTS
          </h2>
          <div className="w-12 h-[1px] bg-[#D6CBC1] mx-auto mt-4" />
        </div>

        {/* Content Layout: 2x2 Grid on Left, Marquee Featured Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gridEpisodes.map((ep) => (
              <div
                key={ep.id}
                onClick={() => onPlayEpisode(ep)}
                className="group cursor-pointer flex flex-col bg-white border border-[#E9DFD7] p-3.5 shadow-2xs hover:shadow-xs hover:border-[#D1C3B8] transition-all"
              >
                {/* Episode Thumbnail */}
                <div className="relative overflow-hidden aspect-square bg-[#F3EDE8] mb-3">
                  <img
                    src={ep.imageUrl}
                    alt={ep.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Hover Play Scrim */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </span>
                  </div>
                  <span className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-xs text-white text-[9px] tracking-[0.16em] uppercase px-2 py-0.5 font-mono">
                    {ep.duration}
                  </span>
                </div>

                {/* Episode Meta & Title */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-[#2B2724] group-hover:text-black line-clamp-2 leading-snug">
                      {ep.number} | {ep.title.replace(`${ep.number} | `, '')}
                    </h3>
                    <p className="text-[11px] text-[#736A64] line-clamp-2 mt-1.5 font-light leading-relaxed">
                      {ep.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#F2ECE7] flex items-center justify-between text-[10px] tracking-[0.16em] uppercase text-[#8A7F77]">
                    <span className="inline-flex items-center gap-1 font-medium group-hover:text-black">
                      <Play className="w-2.5 h-2.5 fill-current" />
                      LISTEN NOW
                    </span>
                    <span>{ep.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Large Featured Spotlight Episode */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              onClick={() => onPlayEpisode(largeFeatured)}
              className="group cursor-pointer bg-white border border-[#E7DDD4] p-4 sm:p-5 shadow-xs flex-1 flex flex-col justify-between transition-all hover:border-[#CFBFA] hover:shadow-sm"
            >
              {/* Marquee Image */}
              <div className="relative overflow-hidden aspect-square bg-[#F7EFE9] mb-4">
                <img
                  src={largeFeatured.imageUrl}
                  alt={largeFeatured.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#E1F264] text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-black text-[#E1F264] px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  SPOTLIGHT EPISODE
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-4">
                <h3 className="font-editorial text-xl sm:text-2xl uppercase tracking-wide text-[#231F1D] font-medium leading-tight group-hover:text-black">
                  {largeFeatured.number} | {largeFeatured.title.replace(`${largeFeatured.number} | `, '')}
                </h3>
                <p className="text-xs sm:text-sm text-[#5D554F] leading-relaxed mt-2 font-light">
                  {largeFeatured.description}
                </p>
              </div>

              {/* Bottom Interactive Area with Tune-In Stamp, Platforms, and Subscribe */}
              <div className="pt-4 border-t border-[#EFE8E2]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  
                  {/* Tune-In Circular Stamp matching the image */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-12 h-12 rounded-full border border-dashed border-[#8E7E73] flex items-center justify-center p-1 text-center animate-[spin_25s_linear_infinite]">
                      <Disc3 className="w-5 h-5 text-[#6D5E53]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] tracking-[0.24em] uppercase text-[#8F8177] font-semibold">STREAM ON</span>
                      <div className="flex items-center gap-2 text-[10px] tracking-[0.14em] uppercase font-medium text-[#483F39]">
                        <a href="https://podcasts.apple.com" target="_blank" rel="noreferrer" className="hover:underline">ITUNES</a>
                        <span>·</span>
                        <a href="https://spotify.com" target="_blank" rel="noreferrer" className="hover:underline">SPOTIFY</a>
                        <span>·</span>
                        <a href="https://podcasts.google.com" target="_blank" rel="noreferrer" className="hover:underline">APPLE</a>
                      </div>
                    </div>
                  </div>

                  {/* Primary Lime Subscribe Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSubscribe();
                    }}
                    className="px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase bg-[#E1F264] text-black border border-[#C5D849] hover:bg-[#D5E652] transition-all active:scale-[0.98] shadow-xs"
                  >
                    SUBSCRIBE
                  </button>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
