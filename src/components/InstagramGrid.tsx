/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, Heart } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/siteData';

export const InstagramGrid: React.FC = () => {
  return (
    <section className="bg-[#FAF7F5] border-b border-[#ECE2DB]">
      <div className="text-center py-6 border-b border-[#EFE8E2]">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase text-[#6E635C] hover:text-black transition-colors"
        >
          <Instagram className="w-3.5 h-3.5" />
          <span>FOLLOW @ALEXBLOOMPODCAST ON INSTAGRAM</span>
        </a>
      </div>

      {/* 6 Square Grid exactly matching bottom image feed */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-[#EBE2DA]">
        {INSTAGRAM_POSTS.map((post) => (
          <a
            key={post.id}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden aspect-square block bg-[#F0E8E1]"
          >
            <img
              src={post.img}
              alt={post.caption}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Hover overlay with likes and Instagram glyph */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-white text-center">
              <Instagram className="w-5 h-5 mb-1.5" />
              <div className="flex items-center gap-1 text-[11px] font-medium font-mono">
                <Heart className="w-3.5 h-3.5 fill-current text-[#E1F264]" />
                <span>{post.likes}</span>
              </div>
              <p className="text-[10px] line-clamp-2 mt-1 opacity-90 font-light">
                {post.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
