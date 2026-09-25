/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play } from 'lucide-react';
import { EPISODES_DATA, PodcastEpisode } from '../data/siteData';

interface NoticeBarProps {
  onPlayEpisode: (episode: PodcastEpisode) => void;
}

export const NoticeBar: React.FC<NoticeBarProps> = ({ onPlayEpisode }) => {
  const latestEpisode = EPISODES_DATA.find((e) => e.number === 'EP 46') || EPISODES_DATA[0];

  return (
    <aside aria-label="Announcement" className="w-full bg-[#F3E8EC] border-b border-[#E8DCE1] py-2 px-4 transition-colors hover:bg-[#EFE2E7]">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-center">
        <button
          onClick={() => onPlayEpisode(latestEpisode)}
          className="group inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-medium tracking-[0.16em] uppercase text-[#3C3437] hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22201E]"
        >
          <span className="font-semibold">LATEST EPISODE:</span>
          <span className="truncate max-w-[280px] sm:max-w-md md:max-w-xl">
            EP 46 / TOP 5 THINGS TO DO WHEN PREPARING FOR THE NEXT QUARTER
          </span>
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[#7A6D73] group-hover:border-black group-hover:scale-110 transition-transform">
            <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-[#3C3437] group-hover:text-black" />
          </span>
        </button>
      </div>
    </aside>
  );
};
