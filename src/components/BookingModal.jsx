import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PONDICHERRY_CONFIG = {
  screenTypes: [
    'ShowTime Max (up to 10 people) : Rs. 800 {New}',
    'ShowTime Mini (up to 6 people) : Rs. 500',
  ],
  events: [
    'Celebrations (Birthday, Anniversary, etc.)',
    'Movie Watching (Min 3 Hours)',
    'PS5 Gaming (Min 2 hours)',
    'IPL Watching',
  ],
  decorations: [
    'No Decoration',
    'Standard Decoration : Rs. 1500',
    'Standard Decoration & Photowall : Rs. 2000',
    'Premium Decoration : Rs. 2000',
    'Premium Decoration & Photowall : Rs. 2500',
    'Heart Decoration : Rs. 2500',
    'Heart Decoration & Photowall : Rs. 3000',
  ],
  features: [
    'Memory Photowall : Rs. 500',
    'Photo Reel Edit : Rs. 500',
    'Event Capture & Video Edit : Rs. 900',
    'Karaoke Fun : Rs. 350',
    'Professional Photography : Rs. 2900',
    'Fog Entry : Rs. 1990',
    'Guitar Performance : Rs. 3900',
    'Teddy Surprise : Rs. 1500',
  ],
  cakes: [
    'White Forest : Rs. 450',
    'Rose Milk : Rs. 550',
    'Choco Truffle : Rs. 500',
    'Red Velvet : Rs. 500',
    'Special Palkova : Rs. 690',
    'Heaven on Earth : Rs. 690',
    'Butterscotch : Rs. 600',
    'Choco Chip : Rs. 580',
    'Bento Cake : Rs. 199',
    'Customized cake (WhatsApp image)',
    'Cake not Needed',
  ],
  maxMembers: 14,
  membersNote: 'Max 14 people',
};

const MARTHANDAM_CONFIG = {
  events: [
    'Celebrations (Bday, Anniversary, etc)',
    'Movie Watching (Min 3 Hours)',
    'IPL Watching',
  ],
  decorations: [
    'Standard Decoration : Rs. 1500',
    'Standard Decoration & Photowall : Rs. 2000',
    'Premium Decoration : Rs. 2000',
    'Premium Decoration & Photowall : Rs. 2500',
    'Heart Decoration : Rs. 2500',
    'Heart Decoration & Photowall : Rs. 3000',
    'No Decoration (Movie Watch)',
  ],
  features: [
    'Photo Reel Edit : Rs. 500',
    'Professional Photography : Rs. 4000',
    'Teddy : Rs. 1200',
    'Fog Entry : Rs. 1990',
    'Event Capture and Reel Edit : Rs. 900',
    'Professional Videography : Rs. 4500',
  ],
  cakes: [
    'White Forest : Rs. 490',
    'Choco Truffle : Rs. 590',
    'Butterscotch : Rs. 550',
    'Choco Chip : Rs. 650',
    'Black Forest : Rs. 490',
    'Oreo Cake : Rs. 600',
    'Kitkat Cake : Rs. 750',
    'Vancho Cake : Rs. 650',
    'Bento Cake : Rs. 199',
    'Blueberry : Rs. 590',
    'Strawberry : Rs. 590',
    'Customized Cake (WhatsApp image)',
    'Cake Not Needed',
  ],
  maxMembers: 6,
  membersNote: 'Charges applicable if exceeds 6',
};

const AGE_CATEGORIES = ['Under 18', '18-25', '26-35', '36-50', 'Above 50'];
const OCCUPATIONS = ['Student', 'Employee', 'Business', 'Other'];

const NOTE_TEXT =
  'Outside cake, food, and alcohol are strictly prohibited. Poppers and harmful sprays not allowed. Your slot will be booked after paying 50% advance.';

const initialFormState = {
  name: '',
  mobile: '',
  date: '',
  time: '',
  ageCategory: '',
  occupation: '',
  hours: '',
  members: '',
  screenType: '',
  event: '',
  decoration: '',
  features: [],
  cake: '',
  nameOnCake: '',
  notes: '',
};

export default function BookingModal({ isOpen, onClose }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [formData, setFormData] = useState(initialFormState);

  const handleClose = () => {
    setSelectedLocation(null);
    setFormData(initialFormState);
    onClose();
  };

  const handleBack = () => {
    setSelectedLocation(null);
    setFormData(initialFormState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      '🎬 SHOWTIME BOOKING REQUEST',
      `📍 Location: ${selectedLocation}`,
      `👤 Name: ${formData.name}`,
      `📱 Mobile: ${formData.mobile}`,
      `📅 Date: ${formData.date}`,
      `⏰ Time: ${formData.time}`,
      `⏱ Hours: ${formData.hours}`,
      `👥 Members: ${formData.members}`,
    ];

    if (selectedLocation === 'Pondicherry' && formData.screenType) {
      lines.push(`🖥 Screen: ${formData.screenType}`);
    }

    lines.push(`🎪 Event: ${formData.event}`);
    lines.push(`🎨 Decoration: ${formData.decoration || 'None'}`);
    lines.push(`🎂 Cake: ${formData.cake || 'None'}`);

    if (formData.nameOnCake) {
      lines.push(`✍️ Name on Cake: ${formData.nameOnCake}`);
    }

    if (formData.features.length > 0) {
      lines.push(`🎯 Features: ${formData.features.join(', ')}`);
    }

    if (formData.ageCategory) {
      lines.push(`🎂 Age: ${formData.ageCategory}`);
    }

    if (formData.occupation) {
      lines.push(`💼 Occupation: ${formData.occupation}`);
    }

    if (formData.notes) {
      lines.push(`📝 Notes: ${formData.notes}`);
    }

    const message = lines.join('\n');
    const url = `https://wa.me/919363799250?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const config =
    selectedLocation === 'Pondicherry' ? PONDICHERRY_CONFIG : MARTHANDAM_CONFIG;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-start justify-center overflow-y-auto py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-full max-w-lg mx-auto bg-surface-container rounded-3xl p-6 my-auto max-h-[90vh] overflow-y-auto relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {selectedLocation && (
                  <button
                    onClick={handleBack}
                    className="text-on-surface-variant hover:text-primary transition-colors"
                    aria-label="Back to location selection"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                )}
                <h2 className="font-sora text-2xl font-bold text-primary">
                  SHOWTIME
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="text-on-surface-variant hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {!selectedLocation ? (
                <motion.div
                  key="location-select"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Location Selection */}
                  <p className="font-manrope text-on-surface-variant text-center mb-8">
                    Select Your Location
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Pondicherry', 'Marthandam'].map((location) => (
                      <button
                        key={location}
                        onClick={() => setSelectedLocation(location)}
                        className="glass-surface p-8 rounded-2xl cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col items-center gap-4 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-primary-container group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span className="font-sora font-semibold text-on-surface text-sm">
                          {location}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="booking-form"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 30, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Booking Form */}
                  <p className="font-manrope text-on-surface-variant text-center mb-6">
                    Booking for{' '}
                    <span className="text-primary font-semibold">
                      {selectedLocation}
                    </span>
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                        placeholder="10 digit number"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Booking Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Booking Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Age Category */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Age Category
                      </label>
                      <select
                        name="ageCategory"
                        value={formData.ageCategory}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select age category</option>
                        {AGE_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Occupation */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Occupation
                      </label>
                      <select
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select occupation</option>
                        {OCCUPATIONS.map((occ) => (
                          <option key={occ} value={occ}>
                            {occ}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Booking Hours */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Booking Hours *
                      </label>
                      <input
                        type="number"
                        name="hours"
                        value={formData.hours}
                        onChange={handleChange}
                        required
                        min={1}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                        placeholder="Minimum 1 hour"
                      />
                    </div>

                    {/* Number of Members */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Number of Members *
                      </label>
                      <input
                        type="number"
                        name="members"
                        value={formData.members}
                        onChange={handleChange}
                        required
                        min={1}
                        max={config.maxMembers}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                        placeholder={`Number of members`}
                      />
                      <p className="text-xs text-on-surface-variant mt-1 font-manrope">
                        {config.membersNote}
                      </p>
                    </div>

                    {/* Screen Type (Pondicherry only) */}
                    {selectedLocation === 'Pondicherry' && (
                      <div>
                        <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                          Screen Type *
                        </label>
                        <select
                          name="screenType"
                          value={formData.screenType}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="">Select screen type</option>
                          {PONDICHERRY_CONFIG.screenTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Booking Event */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Booking Event *
                      </label>
                      <select
                        name="event"
                        value={formData.event}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select event type</option>
                        {config.events.map((evt) => (
                          <option key={evt} value={evt}>
                            {evt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Decoration */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Decoration
                      </label>
                      <select
                        name="decoration"
                        value={formData.decoration}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select decoration</option>
                        {config.decorations.map((dec) => (
                          <option key={dec} value={dec}>
                            {dec}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Other Features (Checkboxes) */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-2 block">
                        Other Features
                      </label>
                      <div className="space-y-2">
                        {config.features.map((feature) => (
                          <label
                            key={feature}
                            className="flex items-center gap-3 cursor-pointer font-manrope text-sm text-on-surface"
                          >
                            <input
                              type="checkbox"
                              checked={formData.features.includes(feature)}
                              onChange={() => handleFeatureToggle(feature)}
                              className="accent-primary-container w-4 h-4 rounded"
                            />
                            {feature}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Birthday Cake */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Birthday Cake
                      </label>
                      <select
                        name="cake"
                        value={formData.cake}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select cake</option>
                        {config.cakes.map((cake) => (
                          <option key={cake} value={cake}>
                            {cake}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name on Cake */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Name on Cake
                      </label>
                      <input
                        type="text"
                        name="nameOnCake"
                        value={formData.nameOnCake}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors"
                        placeholder="Name to write on cake"
                      />
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="font-space-grotesk text-xs uppercase tracking-wider text-on-surface-variant mb-1 block">
                        Notes
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white font-manrope focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Any special requests..."
                      />
                    </div>

                    {/* Important Note */}
                    <div className="bg-black/40 border border-primary/20 rounded-xl p-4">
                      <p className="text-xs text-on-surface-variant font-manrope leading-relaxed">
                        ⚠️ {NOTE_TEXT}
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-primary-container text-on-primary py-4 rounded-full font-bold font-sora electric-glow hover:scale-[1.02] active:scale-[0.98] transition-transform"
                    >
                      Book on WhatsApp
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
