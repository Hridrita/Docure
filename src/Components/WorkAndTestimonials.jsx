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
    <section ref={ref} className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-bold mb-16 text-center text-[#4A6B6F] ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
          Book an appointment in 3 steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((step, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl bg-[#DDE6D8] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${inView ? `animate__animated animate__fadeInUp ${ANIMATE_DELAYS[i]}` : 'opacity-0'}`}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold mb-6 text-xl bg-[#4A6B6F] text-white shadow-lg">
                {step.num}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-bold text-xl mb-3 text-[#4A6B6F]">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
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
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-bold mb-16 text-center text-[#4A6B6F] ${inView ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
          What our patients say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 border border-gray-100 bg-[#F9FAFB] shadow-lg flex flex-col gap-6 ${inView ? `animate__animated animate__zoomIn ${ANIMATE_DELAYS[i]}` : 'opacity-0'}`}
            >
              <div className="text-yellow-400 text-lg">{'★'.repeat(t.stars)}</div>
              <p className="text-gray-700 italic flex-1 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold bg-[#4A6B6F] text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#4A6B6F]">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};