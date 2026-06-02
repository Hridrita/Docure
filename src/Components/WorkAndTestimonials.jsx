'use client';

import 'animate.css';
import { useInView } from 'react-intersection-observer';

const HOW_IT_WORKS = [
  { num: "01", icon: "🩺", title: "Find a doctor", desc: "Browse specialists by category or search by name." },
  { num: "02", icon: "📅", title: "Book a slot", desc: "Pick a date and time that works for you." },
  { num: "03", icon: "✅", title: "Get consultation", desc: "Show up at the clinic on time." }
];

const TESTIMONIALS = [
  { initials: "RU", name: "Rahim Uddin", location: "Dhaka", stars: 5, quote: "Booking was so easy. Highly recommend." },
  { initials: "SN", name: "Sultana Nahar", location: "Chittagong", stars: 5, quote: "Finally an app where I can see the doctor's fee." },
  { initials: "KH", name: "Karim Hossain", location: "Sylhet", stars: 4, quote: "Got an appointment within hours." }
];

const ANIMATE_DELAYS = ['', 'animate__delay-1s', 'animate__delay-2s'];

export const HowItWorks = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #e8efe5 0%, #f0f5ee 40%, #dfe9e9 100%)',
      }}
    >
      {/* dot-grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #4A6B6F22 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2
          className={`text-4xl font-bold mb-16 text-center text-[#3a5559] ${
            inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'
          }`}
        >
          <span className="italic font-serif ml-3">Book Appointments in 3 Steps</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((step, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl border border-[#4A6B6F26] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden ${
                inView ? `animate__animated animate__fadeInUp ${ANIMATE_DELAYS[i]}` : 'opacity-0'
              }`}
              style={{ background: 'rgba(255,255,255,0.72)' }}
            >
              {/* bottom accent stripe */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl"
                style={{ background: 'linear-gradient(90deg, #4A6B6F, #7aadaa)' }}
              />

              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-medium mb-6 text-sm text-white"
                style={{
                  background: '#4A6B6F',
                  boxShadow: '0 3px 10px rgba(74,107,111,0.35)',
                }}
              >
                {step.num}
              </div>

              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-medium text-lg mb-3 text-[#3a5559]">{step.title}</h3>
              <p className="text-[#5a7070] leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #f7faf9 0%, #eef4f1 50%, #f4f7f4 100%)',
      }}
    >
      {/* diagonal hatch overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #4A6B6F0a 0px, #4A6B6F0a 1px, transparent 1px, transparent 20px)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2
          className={`text-4xl font-bold mb-16 text-center text-[#3a5559] ${
            inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'
          }`}
        >
          <span className="italic font-serif ml-3">What Our Patients Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 border border-[#4A6B6F1f] flex flex-col gap-4 relative overflow-hidden ${
                inView ? `animate__animated animate__zoomIn ${ANIMATE_DELAYS[i]}` : 'opacity-0'
              }`}
              style={{
                background: 'rgba(255,255,255,0.80)',
                boxShadow: '0 2px 16px rgba(74,107,111,0.08)',
              }}
            >
              {/* decorative quote mark */}
              <span
                className="absolute top-4 right-5 font-serif text-6xl leading-none pointer-events-none select-none"
                style={{ color: '#DDE6D8' }}
              >
                "
              </span>

              <div className="text-yellow-500 text-base tracking-widest">
                {'★'.repeat(t.stars)}
              </div>

              <p className="italic flex-1 leading-relaxed text-sm text-[#4a6060] font-serif">
                "{t.quote}"
              </p>

              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: 'rgba(74,107,111,0.12)' }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-medium text-white flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #4A6B6F, #6a9b9f)',
                    boxShadow: '0 2px 8px rgba(74,107,111,0.3)',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-medium text-sm text-[#3a5559]">{t.name}</p>
                  <p className="text-xs text-[#7a9090]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};