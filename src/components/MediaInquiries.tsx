/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, Star, Mic, ArrowRight } from 'lucide-react';

interface MediaInquiriesProps {
  onOpenAudienceModal: () => void;
  onOpenReviewModal: () => void;
  onOpenGuestModal: () => void;
}

export const MediaInquiries: React.FC<MediaInquiriesProps> = ({
  onOpenAudienceModal,
  onOpenReviewModal,
  onOpenGuestModal,
}) => {
  return (
    <section id="media" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#F6EDE8] border-b border-[#ECE2DB]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-[#E9DFD8] p-6 sm:p-10 lg:p-12 shadow-xs rounded-xs relative">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-12">
            
            {/* Left Image */}
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="relative overflow-hidden aspect-[4/3] bg-[#F1E8E2] border border-[#E7DDD5] group">
                <img
                  src="/src/assets/images/media_inquiries_alex_1790266613083.jpg"
                  alt="Alex Bloom reviewing media notes on sofa"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase font-semibold text-[#48423E]">
                  PRESS & PARTNERSHIPS
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <span className="text-[11px] font-semibold tracking-[0.26em] uppercase text-[#88786F] mb-2 block">
                PRESS & COLLABORATIONS
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#22201E] font-medium mb-4">
                MEDIA INQUIRIES
              </h2>

              <p className="text-xs sm:text-sm text-[#615650] leading-relaxed font-light mb-7 max-w-xl">
                Looking to interview Alex Bloom, sponsor an upcoming episode, or feature our founder on your stage or publication? We love partnering with forward-thinking brands aligned with female empowerment, sustainable scaling, and entrepreneurial freedom.
              </p>

              {/* 3 Stacked Buttons matching image */}
              <div className="flex flex-col gap-3 max-w-md">
                <button
                  onClick={onOpenAudienceModal}
                  className="w-full inline-flex items-center justify-between px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase bg-[#E8C5B8] text-[#28211E] border border-[#D8B4A5] hover:bg-[#DEB8A8] transition-all active:scale-[0.99] shadow-2xs group"
                >
                  <span className="inline-flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#5A453C]" />
                    ABOUT OUR AUDIENCE
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={onOpenReviewModal}
                  className="w-full inline-flex items-center justify-between px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase bg-[#DDD5E3] text-[#29222E] border border-[#CDC1D5] hover:bg-[#D2C8DB] transition-all active:scale-[0.99] shadow-2xs group"
                >
                  <span className="inline-flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 text-[#584961]" />
                    LEAVE A REVIEW
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={onOpenGuestModal}
                  className="w-full inline-flex items-center justify-between px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase bg-[#E1F264] text-black border border-[#C5D849] hover:bg-[#D5E652] transition-all active:scale-[0.99] shadow-2xs group"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mic className="w-3.5 h-3.5" />
                    BE A GUEST ON OUR PODCAST
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              </div>

              {/* Script flourish signature matching the screenshot */}
              <div className="mt-8 flex justify-end">
                <span className="script-accent text-3xl sm:text-4xl text-[#3A322E] font-normal transform -rotate-3 select-none">
                  Thanks for tuning in!
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
