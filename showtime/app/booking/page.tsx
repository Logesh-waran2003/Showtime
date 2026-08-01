'use client';

import { useState } from 'react';
import Link from 'next/link';

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#333333',
  border: '1px solid #2a2a2a',
  borderRadius: '8px',
  color: '#ffffff',
  padding: '12px 16px',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};

const timeSlots = [
  { id: 'morning', label: 'Morning Show', time: '9:00 AM', icon: '🌅' },
  { id: 'afternoon', label: 'Afternoon Show', time: '1:00 PM', icon: '☀️' },
  { id: 'evening', label: 'Evening Show', time: '5:00 PM', icon: '🌆' },
  { id: 'night', label: 'Night Show', time: '9:00 PM', icon: '🌙' },
];

const addOns = [
  { id: 'cake', label: 'Cake', description: 'Custom birthday / celebration cake', price: 500, icon: '🎂' },
  { id: 'decoration', label: 'Decoration', description: 'Theme-based balloon & floral décor', price: 800, icon: '🎉' },
  { id: 'flowers', label: 'Flowers / Bouquet', description: 'Fresh flower arrangement', price: 300, icon: '💐' },
  { id: 'gift', label: 'Surprise Gift', description: 'Wrapped premium surprise gift', price: 400, icon: '🎁' },
];

const BASE_PRICE = 1999;

function StepIndicator({ step }: { step: number }) {
  const steps = ['Location', 'Date & Time', 'Add-ons', 'Summary'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: '48px', flexWrap: 'wrap' }}>
      {steps.map((label, i) => {
        const num = i + 1;
        const isActive = num === step;
        const isDone = num < step;
        return (
          <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                backgroundColor: isDone ? '#3a8dde' : isActive ? '#3a8dde' : '#262626',
                border: `2px solid ${isDone || isActive ? '#3a8dde' : '#2a2a2a'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#ffffff', fontSize: '15px', fontWeight: 700,
                transition: 'all 0.3s',
              }}>
                {isDone ? '✓' : num}
              </div>
              <span style={{
                fontSize: '12px', fontWeight: isActive ? 600 : 400,
                color: isActive ? '#ffffff' : '#555555',
                whiteSpace: 'nowrap',
              }}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                width: '60px', height: '2px', marginBottom: '20px',
                backgroundColor: isDone ? '#3a8dde' : '#2a2a2a',
                transition: 'background-color 0.3s',
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [booked, setBooked] = useState(false);

  const addOnTotal = addOns
    .filter(a => selectedAddOns.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0);
  const total = BASE_PRICE + addOnTotal;
  const deposit = Math.ceil(total * 0.5);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const cardStyle = (selected: boolean): React.CSSProperties => ({
    backgroundColor: selected ? 'rgba(58,141,222,0.1)' : '#262626',
    border: `2px solid ${selected ? '#3a8dde' : '#2a2a2a'}`,
    borderRadius: '12px',
    padding: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  });

  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      {/* Hero banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0d0d0d 0%, #0d1a2e 60%, #0d0d0d 100%)',
        padding: '56px 24px',
        borderBottom: '1px solid #2a2a2a',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
            <span style={{ color: '#3a8dde', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
              RESERVE YOUR EXPERIENCE
            </span>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#3a8dde' }} aria-hidden="true" />
          </div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, margin: '0 0 12px' }}>
            Book Your Private Theatre
          </h1>
          <p style={{ color: '#aaaaaa', fontSize: '16px', margin: 0 }}>
            Complete the steps below to secure your celebration
          </p>
        </div>
      </section>

      <section style={{ padding: '56px 24px 80px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {booked ? (
            <div style={{
              backgroundColor: '#1a1a1a', borderRadius: '16px',
              padding: '56px 40px', textAlign: 'center',
              border: '1px solid #3a8dde',
              boxShadow: '0 12px 48px rgba(58,141,222,0.15)',
            }}>
              <div style={{ fontSize: '56px', marginBottom: '20px' }}>🎬</div>
              <h2 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>
                Booking Request Sent!
              </h2>
              <p style={{ color: '#aaaaaa', fontSize: '16px', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 32px' }}>
                Our team will contact you within 2 hours to confirm availability and share payment details for the ₹{deposit.toLocaleString('en-IN')} deposit.
              </p>
              <Link href="/" style={{
                display: 'inline-block',
                backgroundColor: '#3a8dde', color: '#ffffff',
                padding: '12px 32px', borderRadius: '8px',
                textDecoration: 'none', fontSize: '15px', fontWeight: 600,
              }}>
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              <StepIndicator step={step} />

              {/* Step 1: Location */}
              {step === 1 && (
                <div>
                  <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                    Select Location
                  </h2>
                  <p style={{ color: '#aaaaaa', fontSize: '15px', marginBottom: '28px' }}>
                    Choose the city where you&apos;d like to book your private theatre.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {/* Pondicherry */}
                    <div
                      onClick={() => {}}
                      style={{
                        backgroundColor: 'rgba(58,141,222,0.1)',
                        border: '2px solid #3a8dde',
                        borderRadius: '12px',
                        padding: '24px',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎭</div>
                      <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>Pondicherry</h3>
                      <p style={{ color: '#aaaaaa', fontSize: '13px', margin: '0 0 12px' }}>Now Open</p>
                      <span style={{
                        display: 'inline-block',
                        backgroundColor: '#3a8dde', color: '#ffffff',
                        fontSize: '11px', fontWeight: 700,
                        padding: '3px 10px', borderRadius: '20px',
                      }}>
                        ✓ Selected
                      </span>
                    </div>
                    {/* Coming soon */}
                    <div style={{
                      backgroundColor: '#1a1a1a',
                      border: '2px dashed #2a2a2a',
                      borderRadius: '12px',
                      padding: '24px',
                      opacity: 0.5,
                      cursor: 'not-allowed',
                    }}>
                      <div style={{ fontSize: '32px', marginBottom: '12px' }}>🌆</div>
                      <h3 style={{ color: '#aaaaaa', fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>More Cities</h3>
                      <p style={{ color: '#555555', fontSize: '13px', margin: 0 }}>Coming Soon</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    style={{
                      marginTop: '32px',
                      backgroundColor: '#3a8dde', color: '#ffffff',
                      padding: '14px 40px', borderRadius: '8px',
                      border: 'none', fontSize: '16px', fontWeight: 600,
                      cursor: 'pointer', transition: 'background-color 0.2s',
                      width: '100%',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#61b6ff')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3a8dde')}
                  >
                    Continue →
                  </button>
                </div>
              )}

              {/* Step 2: Date + Time Slot */}
              {step === 2 && (
                <div>
                  <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                    Select Date &amp; Time
                  </h2>
                  <p style={{ color: '#aaaaaa', fontSize: '15px', marginBottom: '28px' }}>
                    Pick your preferred date and a time slot for your private theatre experience.
                  </p>

                  {/* Date picker */}
                  <div style={{ marginBottom: '28px' }}>
                    <label htmlFor="booking-date" style={{ display: 'block', color: '#aaaaaa', fontSize: '13px', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Date *
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      required
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={e => setSelectedDate(e.target.value)}
                      style={{ ...inputStyle, colorScheme: 'dark' }}
                      onFocus={e => (e.target.style.borderColor = '#3a8dde')}
                      onBlur={e => (e.target.style.borderColor = '#2a2a2a')}
                    />
                  </div>

                  {/* Time slots */}
                  <div>
                    <div style={{ color: '#aaaaaa', fontSize: '13px', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Time Slot *
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      {timeSlots.map(slot => (
                        <div
                          key={slot.id}
                          onClick={() => setSelectedSlot(slot.id)}
                          style={cardStyle(selectedSlot === slot.id)}
                        >
                          <div style={{ fontSize: '24px', marginBottom: '8px' }}>{slot.icon}</div>
                          <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '15px' }}>{slot.label}</div>
                          <div style={{ color: selectedSlot === slot.id ? '#61b6ff' : '#aaaaaa', fontSize: '14px', marginTop: '4px' }}>{slot.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                    <button
                      onClick={() => setStep(1)}
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent', color: '#ffffff',
                        padding: '14px', borderRadius: '8px',
                        border: '2px solid #2a2a2a', fontSize: '15px', fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => { if (selectedDate && selectedSlot) setStep(3); }}
                      disabled={!selectedDate || !selectedSlot}
                      style={{
                        flex: 2,
                        backgroundColor: selectedDate && selectedSlot ? '#3a8dde' : '#262626',
                        color: selectedDate && selectedSlot ? '#ffffff' : '#555555',
                        padding: '14px', borderRadius: '8px',
                        border: 'none', fontSize: '15px', fontWeight: 600,
                        cursor: selectedDate && selectedSlot ? 'pointer' : 'not-allowed',
                        transition: 'background-color 0.2s',
                      }}
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Add-ons */}
              {step === 3 && (
                <div>
                  <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                    Add-On Services
                  </h2>
                  <p style={{ color: '#aaaaaa', fontSize: '15px', marginBottom: '28px' }}>
                    Enhance your experience with our optional extras. All items are pre-arranged before you arrive.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {addOns.map(addon => {
                      const selected = selectedAddOns.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddOn(addon.id)}
                          style={{
                            ...cardStyle(selected),
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                          }}
                        >
                          <div style={{ fontSize: '28px', flexShrink: 0 }}>{addon.icon}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '16px' }}>{addon.label}</div>
                            <div style={{ color: '#aaaaaa', fontSize: '13px', marginTop: '2px' }}>{addon.description}</div>
                          </div>
                          <div style={{ textAlign: 'right', flexShrink: 0 }}>
                            <div style={{ color: '#3a8dde', fontWeight: 700, fontSize: '16px' }}>
                              +₹{addon.price}
                            </div>
                            <div style={{
                              marginTop: '6px',
                              width: '22px', height: '22px',
                              borderRadius: '50%',
                              border: `2px solid ${selected ? '#3a8dde' : '#555555'}`,
                              backgroundColor: selected ? '#3a8dde' : 'transparent',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              marginLeft: 'auto',
                            }}>
                              {selected && <span style={{ color: '#ffffff', fontSize: '12px', fontWeight: 700 }}>✓</span>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Running total */}
                  {selectedAddOns.length > 0 && (
                    <div style={{
                      marginTop: '20px',
                      backgroundColor: 'rgba(58,141,222,0.08)',
                      border: '1px solid rgba(58,141,222,0.2)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <span style={{ color: '#aaaaaa', fontSize: '14px' }}>Add-ons selected: {selectedAddOns.length}</span>
                      <span style={{ color: '#3a8dde', fontWeight: 700, fontSize: '16px' }}>+₹{addOnTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                    <button
                      onClick={() => setStep(2)}
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent', color: '#ffffff',
                        padding: '14px', borderRadius: '8px',
                        border: '2px solid #2a2a2a', fontSize: '15px', fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      style={{
                        flex: 2,
                        backgroundColor: '#3a8dde', color: '#ffffff',
                        padding: '14px', borderRadius: '8px',
                        border: 'none', fontSize: '15px', fontWeight: 600,
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#61b6ff')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3a8dde')}
                    >
                      Review Booking →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Summary + Payment */}
              {step === 4 && (
                <div>
                  <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                    Booking Summary
                  </h2>
                  <p style={{ color: '#aaaaaa', fontSize: '15px', marginBottom: '28px' }}>
                    Review your order and pay the 50% deposit to confirm.
                  </p>

                  <div style={{
                    backgroundColor: '#1a1a1a', borderRadius: '12px',
                    border: '1px solid #2a2a2a', overflow: 'hidden',
                    marginBottom: '24px',
                  }}>
                    {/* Location row */}
                    <div style={{ padding: '18px 24px', borderBottom: '1px solid #2a2a2a', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#aaaaaa', fontSize: '14px' }}>Location</span>
                      <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>Pondicherry</span>
                    </div>
                    {/* Date row */}
                    <div style={{ padding: '18px 24px', borderBottom: '1px solid #2a2a2a', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#aaaaaa', fontSize: '14px' }}>Date</span>
                      <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>
                        {selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }) : '—'}
                      </span>
                    </div>
                    {/* Time slot row */}
                    <div style={{ padding: '18px 24px', borderBottom: '1px solid #2a2a2a', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#aaaaaa', fontSize: '14px' }}>Time Slot</span>
                      <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>
                        {timeSlots.find(s => s.id === selectedSlot)?.label} · {timeSlots.find(s => s.id === selectedSlot)?.time}
                      </span>
                    </div>
                    {/* Base price */}
                    <div style={{ padding: '18px 24px', borderBottom: selectedAddOns.length > 0 ? '1px solid #2a2a2a' : 'none', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#aaaaaa', fontSize: '14px' }}>Private Theatre Session</span>
                      <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>₹{BASE_PRICE.toLocaleString('en-IN')}</span>
                    </div>
                    {/* Add-ons */}
                    {addOns.filter(a => selectedAddOns.includes(a.id)).map(addon => (
                      <div key={addon.id} style={{ padding: '12px 24px', borderBottom: '1px solid #2a2a2a', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#aaaaaa', fontSize: '14px' }}>{addon.icon} {addon.label}</span>
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>₹{addon.price}</span>
                      </div>
                    ))}
                    {/* Total */}
                    <div style={{ padding: '18px 24px', backgroundColor: '#262626', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700 }}>Total Amount</span>
                      <span style={{ color: '#3a8dde', fontSize: '20px', fontWeight: 800 }}>₹{total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Deposit box */}
                  <div style={{
                    backgroundColor: 'rgba(58,141,222,0.08)',
                    border: '1px solid rgba(58,141,222,0.3)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    marginBottom: '28px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600 }}>50% Advance Deposit</span>
                      <span style={{ color: '#61b6ff', fontSize: '22px', fontWeight: 800 }}>₹{deposit.toLocaleString('en-IN')}</span>
                    </div>
                    <p style={{ color: '#aaaaaa', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                      Pay 50% now to confirm your booking. The remaining ₹{(total - deposit).toLocaleString('en-IN')} is due on arrival. Advance is non-refundable.
                    </p>
                  </div>

                  {/* Payment placeholder */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      onClick={() => setStep(3)}
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent', color: '#ffffff',
                        padding: '14px', borderRadius: '8px',
                        border: '2px solid #2a2a2a', fontSize: '15px', fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => setBooked(true)}
                      style={{
                        flex: 2,
                        backgroundColor: '#3a8dde', color: '#ffffff',
                        padding: '14px', borderRadius: '8px',
                        border: 'none', fontSize: '16px', fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#61b6ff')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3a8dde')}
                    >
                      Pay ₹{deposit.toLocaleString('en-IN')} Now
                    </button>
                  </div>

                  <p style={{ color: '#555555', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>
                    🔒 Secure payment · UPI / Card / Net Banking accepted
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
