/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle2, Star, Sparkles, Send, Download, ExternalLink, Mic, Users, BookOpen } from 'lucide-react';

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ModalBase: React.FC<ModalBaseProps> = ({ isOpen, onClose, title, subtitle, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#FAF7F5] border border-[#DDD3CB] shadow-2xl p-6 sm:p-8 rounded-xs max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#6D645F] hover:text-black transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pb-4 border-b border-[#E8DFD7]">
          {subtitle && (
            <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#8A7D74] block mb-1">
              {subtitle}
            </span>
          )}
          <h3 className="font-editorial text-2xl sm:text-3xl uppercase tracking-wider text-[#22201E] font-medium">
            {title}
          </h3>
        </div>

        {children}
      </div>
    </div>
  );
};

// 1. Mastermind Application Modal
export const MastermindModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    stage: '10k-25k',
    goal: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={() => {
        setSubmitted(false);
        onClose();
      }}
      title="COACHING MASTERMIND"
      subtitle="APPLY FOR NEXT COHORT"
    >
      {submitted ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 rounded-full bg-[#E1F264] text-black flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-editorial text-xl uppercase font-semibold text-[#22201E] mb-2">
            APPLICATION RECEIVED
          </h4>
          <p className="text-xs sm:text-sm text-[#5D544E] leading-relaxed max-w-md mx-auto mb-6">
            Thank you, {formData.name || 'Visionary'}! Alex Bloom and our admissions council review each candidate personally. We will reach out within 48 business hours with next steps.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              onClose();
            }}
            className="px-6 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase bg-[#22201E] text-white hover:bg-black transition-colors"
          >
            RETURN TO SITE
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
          <div>
            <label className="block tracking-[0.16em] uppercase text-[#6B615B] font-semibold mb-1.5">
              FULL NAME
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3CB] focus:outline-none focus:border-black text-[#22201E]"
            />
          </div>

          <div>
            <label className="block tracking-[0.16em] uppercase text-[#6B615B] font-semibold mb-1.5">
              WORK EMAIL
            </label>
            <input
              type="email"
              required
              placeholder="you@yourcoachingbrand.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3CB] focus:outline-none focus:border-black text-[#22201E]"
            />
          </div>

          <div>
            <label className="block tracking-[0.16em] uppercase text-[#6B615B] font-semibold mb-1.5">
              COACHING NICHE & CURRENT MONTHLY REVENUE
            </label>
            <select
              value={formData.stage}
              onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3CB] focus:outline-none focus:border-black text-[#22201E]"
            >
              <option value="5k-10k">$5,000 – $10,000 / month</option>
              <option value="10k-25k">$10,000 – $25,000 / month</option>
              <option value="25k-50k">$25,000 – $50,000 / month</option>
              <option value="50k+">$50,000+ / month (Scaling Mastermind)</option>
            </select>
          </div>

          <div>
            <label className="block tracking-[0.16em] uppercase text-[#6B615B] font-semibold mb-1.5">
              WHAT IS YOUR BIGGEST SCALING PRIORITY THIS YEAR?
            </label>
            <textarea
              rows={3}
              required
              placeholder="Tell us about your offer, your vision, and how you want to expand your leadership..."
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3CB] focus:outline-none focus:border-black text-[#22201E] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#E8C5B8] text-[#241E1B] border border-[#D9B4A5] hover:bg-[#DEB8A8] transition-all shadow-xs"
          >
            SUBMIT APPLICATION FOR REVIEW
          </button>
        </form>
      )}
    </ModalBase>
  );
};

// 2. Podcast Guest Inquiry Modal
export const GuestModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={() => {
        setSubmitted(false);
        onClose();
      }}
      title="BE A GUEST ON OUR PODCAST"
      subtitle="MEDIA & INTERVIEW PITCHES"
    >
      {submitted ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 rounded-full bg-[#E1F264] text-black flex items-center justify-center mx-auto mb-4">
            <Mic className="w-6 h-6" />
          </div>
          <h4 className="font-editorial text-xl uppercase font-semibold text-[#22201E] mb-2">
            PITCH SUBMITTED!
          </h4>
          <p className="text-xs sm:text-sm text-[#5D544E] leading-relaxed max-w-md mx-auto mb-6">
            Our editorial production team reviews episode pitches on the 1st and 15th of each month. If your framework is a strong fit for our audience of female coaches, we will schedule a pre-interview call.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              onClose();
            }}
            className="px-6 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase bg-[#22201E] text-white hover:bg-black transition-colors"
          >
            CLOSE
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col gap-4 text-xs"
        >
          <div>
            <label className="block tracking-[0.16em] uppercase text-[#6B615B] font-semibold mb-1.5">
              YOUR NAME & TITLE
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Maya Collins, Founder & Author"
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3CB] focus:outline-none focus:border-black text-[#22201E]"
            />
          </div>

          <div>
            <label className="block tracking-[0.16em] uppercase text-[#6B615B] font-semibold mb-1.5">
              PROPOSED TOPIC / PROPRIETARY FRAMEWORK
            </label>
            <input
              type="text"
              required
              placeholder="e.g. How to Build a $100k Retreat in 60 Days"
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3CB] focus:outline-none focus:border-black text-[#22201E]"
            />
          </div>

          <div>
            <label className="block tracking-[0.16em] uppercase text-[#6B615B] font-semibold mb-1.5">
              WHY OUR AUDIENCE OF FEMALE BUSINESS COACHES NEEDS THIS CONVERSATION
            </label>
            <textarea
              rows={3}
              required
              placeholder="Key actionable takeaways and unique perspectives you will bring..."
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3CB] focus:outline-none focus:border-black text-[#22201E] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#E1F264] text-black border border-[#C5D849] hover:bg-[#D5E652] transition-all shadow-xs"
          >
            SEND GUEST PITCH
          </button>
        </form>
      )}
    </ModalBase>
  );
};

// 3. About Our Audience Modal
export const AudienceModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      title="ABOUT OUR AUDIENCE"
      subtitle="DEMOGRAPHICS & SPONSORSHIP DATA"
    >
      <div className="flex flex-col gap-5 text-xs text-[#48403B]">
        <p className="leading-relaxed font-light text-sm">
          The Alex Bloom Podcast reaches an exceptionally engaged community of female coaches, agency founders, and service providers who invest actively in high-ticket mentorship, premium software, and lifestyle excellence.
        </p>

        {/* Metric cards */}
        <div className="grid grid-cols-2 gap-3 my-2">
          <div className="bg-white border border-[#E4DCD5] p-3.5 rounded-xs">
            <span className="text-2xl font-editorial font-bold text-[#22201E] block">48,000+</span>
            <span className="text-[10px] tracking-[0.16em] uppercase text-[#887C74]">Monthly Downloads</span>
          </div>
          <div className="bg-white border border-[#E4DCD5] p-3.5 rounded-xs">
            <span className="text-2xl font-editorial font-bold text-[#22201E] block">87%</span>
            <span className="text-[10px] tracking-[0.16em] uppercase text-[#887C74]">Female Entrepreneurs</span>
          </div>
          <div className="bg-white border border-[#E4DCD5] p-3.5 rounded-xs">
            <span className="text-2xl font-editorial font-bold text-[#22201E] block">$120k</span>
            <span className="text-[10px] tracking-[0.16em] uppercase text-[#887C74]">Avg. Household Income</span>
          </div>
          <div className="bg-white border border-[#E4DCD5] p-3.5 rounded-xs">
            <span className="text-2xl font-editorial font-bold text-[#22201E] block">Top 2%</span>
            <span className="text-[10px] tracking-[0.16em] uppercase text-[#887C74]">Global Business Podcasts</span>
          </div>
        </div>

        <div className="bg-[#EBE4F0] p-4 border border-[#DECEDF] rounded-xs">
          <h4 className="font-semibold tracking-[0.14em] uppercase text-[#342738] mb-1">
            SPONSORSHIP CATEGORIES
          </h4>
          <p className="text-[11px] text-[#55465A] leading-relaxed">
            Mid-roll audio integration, newsletter spotlight feature, Instagram collaboration, and VIP Mastermind retreat gift inclusions.
          </p>
        </div>

        <button
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-[#E8C5B8] text-[#28211E] border border-[#D9B4A5] hover:bg-[#DEB8A8] transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{downloaded ? 'MEDIA KIT DOWNLOADED!' : 'DOWNLOAD COMPLETE MEDIA KIT (PDF)'}</span>
        </button>
      </div>
    </ModalBase>
  );
};

// 4. Leave A Review Modal
export const ReviewModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [stars, setStars] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={() => {
        setSubmitted(false);
        onClose();
      }}
      title="LEAVE A REVIEW"
      subtitle="WE CHERISH YOUR FEEDBACK"
    >
      {submitted ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 rounded-full bg-[#E1F264] text-black flex items-center justify-center mx-auto mb-4">
            <HeartIcon />
          </div>
          <h4 className="font-editorial text-xl uppercase font-semibold text-[#22201E] mb-2">
            THANK YOU FOR YOUR LOVE!
          </h4>
          <p className="text-xs sm:text-sm text-[#5D544E] leading-relaxed max-w-md mx-auto mb-6">
            Your words inspire our team and help other female business coaches discover the show. We often read listener reviews on our live airwaves!
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              onClose();
            }}
            className="px-6 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase bg-[#22201E] text-white hover:bg-black transition-colors"
          >
            DONE
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col gap-4 text-xs"
        >
          <div className="text-center py-2">
            <span className="block text-[11px] tracking-[0.2em] uppercase text-[#736862] mb-2">
              SELECT RATING
            </span>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setStars(star)}
                  className="p-1 focus:outline-none hover:scale-125 transition-transform"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= stars ? 'fill-[#DCA735] text-[#DCA735]' : 'text-neutral-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block tracking-[0.16em] uppercase text-[#6B615B] font-semibold mb-1.5">
              YOUR NAME & COACHING SPECIALTY
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Courtney Davis · Executive Mindset Coach"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3CB] focus:outline-none focus:border-black text-[#22201E]"
            />
          </div>

          <div>
            <label className="block tracking-[0.16em] uppercase text-[#6B615B] font-semibold mb-1.5">
              YOUR REVIEW
            </label>
            <textarea
              rows={3}
              required
              placeholder="What episode or framework resonated most with your journey?"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3CB] focus:outline-none focus:border-black text-[#22201E] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#DDD5E3] text-[#28212D] border border-[#CDC1D5] hover:bg-[#D2C8DB] transition-all shadow-xs"
          >
            SUBMIT REVIEW
          </button>
        </form>
      )}
    </ModalBase>
  );
};

// 5. Studio Information Modal
export const StudioModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      title="MORE ABOUT THE STUDIO"
      subtitle="OUR VALUES & CRAFT"
    >
      <div className="flex flex-col gap-4 text-xs text-[#524943] leading-relaxed font-light">
        <p className="text-sm text-[#24201E]">
          Alex Bloom Studio is an educational sanctuary created to equip women in business with sustainable broadcast media skills and scalable business architecture.
        </p>
        <p>
          Founded on principles of intentional luxury, ethical growth, and genuine community building, our physical recording suite and online programs bridge the gap between soulful intuition and high-performance revenue.
        </p>
        <div className="border-t border-[#E8DFD7] pt-4 mt-2">
          <h4 className="font-semibold tracking-[0.16em] uppercase text-[#231F1D] mb-2">
            OUR THREE PILLARS
          </h4>
          <ul className="list-disc pl-4 space-y-1.5 text-[#5D534D]">
            <li><strong>Intimacy over Algorithmic Noise:</strong> Creating deep podcasts that build lifelong customer trust.</li>
            <li><strong>Sovereign Wealth:</strong> Structuring offers that honor your boundaries and lifestyle.</li>
            <li><strong>Collaborative Ecosystems:</strong> Lifting fellow women entrepreneurs through cross-pollination.</li>
          </ul>
        </div>
      </div>
    </ModalBase>
  );
};

// 6. Subscribe Modal
export const SubscribeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      title="SUBSCRIBE TO THE SHOW"
      subtitle="NEVER MISS AN EPISODE"
    >
      <div className="flex flex-col gap-3 text-xs">
        <p className="text-sm text-[#5D534D] mb-2 font-light">
          Listen every Tuesday on your favorite streaming destination:
        </p>
        <a
          href="https://podcasts.apple.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-3.5 bg-white border border-[#DDD3CB] hover:border-black transition-colors"
        >
          <span className="font-semibold tracking-[0.14em] uppercase text-[#22201E]">APPLE PODCASTS</span>
          <ExternalLink className="w-4 h-4 text-[#8C8077]" />
        </a>
        <a
          href="https://spotify.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-3.5 bg-white border border-[#DDD3CB] hover:border-black transition-colors"
        >
          <span className="font-semibold tracking-[0.14em] uppercase text-[#22201E]">SPOTIFY</span>
          <ExternalLink className="w-4 h-4 text-[#8C8077]" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-3.5 bg-white border border-[#DDD3CB] hover:border-black transition-colors"
        >
          <span className="font-semibold tracking-[0.14em] uppercase text-[#22201E]">YOUTUBE VIDEO PODCAST</span>
          <ExternalLink className="w-4 h-4 text-[#8C8077]" />
        </a>
        <a
          href="https://overcast.fm"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-3.5 bg-white border border-[#DDD3CB] hover:border-black transition-colors"
        >
          <span className="font-semibold tracking-[0.14em] uppercase text-[#22201E]">OVERCAST</span>
          <ExternalLink className="w-4 h-4 text-[#8C8077]" />
        </a>
      </div>
    </ModalBase>
  );
};

function HeartIcon() {
  return (
    <svg className="w-6 h-6 text-black fill-current" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}
