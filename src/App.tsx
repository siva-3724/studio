/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NoticeBar } from './components/NoticeBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Services } from './components/Services';
import { MeetAlex } from './components/MeetAlex';
import { FeaturedPodcasts } from './components/FeaturedPodcasts';
import { PressLogos } from './components/PressLogos';
import { MediaInquiries } from './components/MediaInquiries';
import { Testimonials } from './components/Testimonials';
import { MastermindSection } from './components/MastermindSection';
import { InstagramGrid } from './components/InstagramGrid';
import { NewsletterFooter } from './components/NewsletterFooter';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import {
  MastermindModal,
  GuestModal,
  AudienceModal,
  ReviewModal,
  StudioModal,
  SubscribeModal,
} from './components/Modals';
import { PodcastEpisode, EPISODES_DATA } from './data/siteData';

export default function App() {
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode | null>(null);
  
  // Modals state
  const [isMastermindOpen, setIsMastermindOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [isAudienceOpen, setIsAudienceOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  const handlePlayEpisode = (episode: PodcastEpisode) => {
    setCurrentEpisode(episode);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExplorePodcast = () => {
    const el = document.getElementById('podcast');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#22201E] selection:bg-[#E1F264] selection:text-black">
      {/* 1. Announcement Notice Bar */}
      <NoticeBar onPlayEpisode={handlePlayEpisode} />

      {/* 2. Primary Navigation Bar */}
      <Navbar onOpenMastermindModal={() => setIsMastermindOpen(true)} />

      {/* 3. Hero Section */}
      <main className="flex-1">
        <Hero
          onPlayEpisode={handlePlayEpisode}
          onExploreServices={handleExploreServices}
        />

        {/* 4. Manifesto / Vision Section */}
        <Manifesto />

        {/* 5. Our Services Section */}
        <Services
          onOpenMastermind={() => setIsMastermindOpen(true)}
          onExplorePodcast={handleExplorePodcast}
        />

        {/* 6. Meet Alex & A Few Of My Favorite Things */}
        <MeetAlex onLearnMoreStudio={() => setIsStudioOpen(true)} />

        {/* 7. Featured Podcasts */}
        <FeaturedPodcasts
          onPlayEpisode={handlePlayEpisode}
          onSubscribe={() => setIsSubscribeOpen(true)}
        />

        {/* 8. Press / Media Logos */}
        <PressLogos />

        {/* 9. Media Inquiries */}
        <MediaInquiries
          onOpenAudienceModal={() => setIsAudienceOpen(true)}
          onOpenReviewModal={() => setIsReviewOpen(true)}
          onOpenGuestModal={() => setIsGuestOpen(true)}
        />

        {/* 10. What Listeners Are Saying (Testimonial Carousel) */}
        <Testimonials />

        {/* 11. Head This Way! (Coaching Mastermind Section) */}
        <MastermindSection onOpenApplyModal={() => setIsMastermindOpen(true)} />

        {/* 12. Instagram Feed */}
        <InstagramGrid />
      </main>

      {/* 13. Newsletter & Footer */}
      <NewsletterFooter />

      {/* 14. Floating Persistent Audio Player */}
      <AudioPlayerBar
        currentEpisode={currentEpisode}
        onClose={() => setCurrentEpisode(null)}
      />

      {/* 15. Interactive Modals */}
      <MastermindModal
        isOpen={isMastermindOpen}
        onClose={() => setIsMastermindOpen(false)}
      />
      <GuestModal
        isOpen={isGuestOpen}
        onClose={() => setIsGuestOpen(false)}
      />
      <AudienceModal
        isOpen={isAudienceOpen}
        onClose={() => setIsAudienceOpen(false)}
      />
      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
      />
      <StudioModal
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
      />
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />
    </div>
  );
}
