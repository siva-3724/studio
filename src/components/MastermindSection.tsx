/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, CheckCircle2, Calendar, Users, Award } from 'lucide-react';

interface MastermindSectionProps {
  onOpenApplyModal: () => void;
}

export const MastermindSection: React.FC<MastermindSectionProps> = ({ onOpenApplyModal }) => {
  return (
    <section id="mastermind" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#FAF7F5] border-b border-[#ECE2DB]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#8B8077] block mb-2">
            LOOKING FOR OUR COACHING MASTERMIND?
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-[#22201E] font-medium">
            HEAD THIS WAY!
          </h2>
          <div className="w-12 h-[1px] bg-[#D4C8BE] mx-auto mt-4" />
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Tablet iPad Mockup with Cover Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Tablet Frame */}
              <div className="bg-[#24211F] p-3.5 sm:p-4 rounded-[28px] shadow-xl border border-[#443F3C]">
                {/* Camera dot */}
                <div className="w-2 h-2 rounded-full bg-[#111] mx-auto mb-2 border border-white/10" />
                
                {/* Screen */}
                <div className="relative overflow-hidden rounded-[18px] bg-white aspect-[3/4] border border-[#2B2724]">
                  <img
                    src="/src/assets/images/mastermind_ipad_cover_1790266683214.jpg"
                    alt="Coaching Mastermind curriculum playbook mockup"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Glass shimmer overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none"
                  />
                </div>

                {/* Bottom Home indicator */}
                <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-3" />
              </div>
            </div>
          </div>

          {/* Right: Mastermind Overview & Application Trigger */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3 text-[10px] font-semibold tracking-[0.22em] uppercase text-[#7E736A]">
              <Calendar className="w-3.5 h-3.5 text-[#A5887C]" />
              <span>COHORT INTAKE NOW OPEN · 12 VISIONARY SEATS</span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl uppercase tracking-tight text-[#221F1D] font-medium mb-4">
              THE 6-FIGURE AUTHORITY MASTERMIND
            </h3>

            <p className="text-xs sm:text-sm text-[#615650] leading-relaxed font-light mb-6">
              A rich information sheet about your offer does the heavy, generous delivery business design fully critical PR. Inspiring leaders scale and impart program areas; low-hanging fruit powerful thought leadership. 14-impact incubator changemakers ready to expand opportunity, empower communities where re-invested. Master, economic change models framework executive education.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs text-[#48403B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C766C] shrink-0" />
                <span>Bi-weekly Strategic Mentorship Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C766C] shrink-0" />
                <span>Full Podcast Studio Launch Blueprint</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C766C] shrink-0" />
                <span>Private In-Person Luxury Retreat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C766C] shrink-0" />
                <span>High-Ticket Offer Funnel Architecture</span>
              </div>
            </div>

            {/* Apply Button matching the image */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenApplyModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#E8C5B8] text-[#28211E] border border-[#D9B4A5] hover:bg-[#DEB8A8] transition-all active:scale-[0.98] shadow-xs"
              >
                <span>APPLY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] tracking-[0.14em] uppercase text-[#8A7D74] font-light">
                APPLICATION REVIEWED WITHIN 48 HOURS
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
