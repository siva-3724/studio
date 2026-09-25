/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Play, Pause, X, Volume2, VolumeX, SkipBack, SkipForward, Radio } from 'lucide-react';
import { PodcastEpisode } from '../data/siteData';

interface AudioPlayerBarProps {
  currentEpisode: PodcastEpisode | null;
  onClose: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({ currentEpisode, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(24);
  const [isMuted, setIsMuted] = useState(false);
  const [speed, setSpeed] = useState<number>(1);

  useEffect(() => {
    if (!currentEpisode) return;
    setIsPlaying(true);
    setProgress(15);
  }, [currentEpisode]);

  // Simulated progress timer when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!currentEpisode) return null;

  const cycleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    setSpeed(speeds[nextIdx]);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#22201E] text-white border-t border-[#3B3632] px-4 py-3 sm:px-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Episode Info */}
        <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
          <div className="relative w-11 h-11 shrink-0 bg-neutral-800 overflow-hidden border border-neutral-700 rounded-xs">
            <img
              src={currentEpisode.imageUrl}
              alt={currentEpisode.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {isPlaying && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E1F264] animate-ping" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-[0.2em] text-[#E1F264] uppercase">
              <Radio className="w-3 h-3" />
              <span>NOW STREAMING · {currentEpisode.number}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold truncate text-[#FAF7F5] max-w-[280px] sm:max-w-xs md:max-w-md">
              {currentEpisode.title}
            </p>
          </div>
        </div>

        {/* Playback Controls & Scrubber */}
        <div className="flex flex-col items-center gap-1.5 w-full sm:w-1/2 max-w-md">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setProgress((p) => Math.max(0, p - 10))}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Skip back 10 seconds"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 rounded-full bg-[#E1F264] text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-sm"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={() => setProgress((p) => Math.min(100, p + 10))}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Skip forward 10 seconds"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full flex items-center gap-2">
            <span className="text-[10px] font-mono text-neutral-400">
              {Math.floor((progress * 0.45))}m
            </span>
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                setProgress((clickX / rect.width) * 100);
              }}
              className="relative flex-1 h-1.5 bg-neutral-700 cursor-pointer rounded-full overflow-hidden group"
            >
              <div
                className="h-full bg-[#E1F264] rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-neutral-400">
              {currentEpisode.duration}
            </span>
          </div>
        </div>

        {/* Secondary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={cycleSpeed}
            className="text-[11px] font-mono px-2 py-1 rounded-xs bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700"
          >
            {speed}x
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors ml-2"
            aria-label="Close audio player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="sm:hidden absolute top-2 right-2 text-neutral-400 hover:text-white"
          aria-label="Close audio player"
        >
          <X className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
