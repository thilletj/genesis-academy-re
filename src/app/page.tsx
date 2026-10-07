import React from 'react';
import { Phone, Calendar, Clock, CheckCircle, BookOpen, Monitor, HelpCircle, Headphones, ArrowRight, User, Globe } from 'lucide-react';

export default function AcademyLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              {/* 1:1 Academy Logo */}
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-6 h-6 border-t-4 border-l-4 border-r-4 border-yellow-400 rotate-45 translate-y-[-2px]" style={{ width: '12px', height: '12px', borderBottom: 'none' }} />
                  <div className="w-4 h-3 bg-yellow-400 mt-[-2px]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none tracking-tighter text-slate-900">GENESIS ACADEMY</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Of Real Estate</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-slate-600">
              <a href="#schedule" className="hover:text-yellow-500 transition-colors">Schedule</a>
              <a href="#pricing" className="hover:text-yellow-500 transition-colors">Pricing</a>
              <a href="#features" className="hover:text-yellow-500 transition-colors">Curriculum</a>
              <button onClick={() => window.location.href = '/enroll'} className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black hover:bg-yellow-500 transition-all shadow-sm">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mirroring the Flyer Layout */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-block px-4 py-1 bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest mb-4 border-l-4 border-yellow-400">
            Florida State Approved
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-6 uppercase tracking-tighter">
            Real Estate <br />
            <span className="text-yellow-500">Sales Associate</span>
          </h1>
          <div className="bg-yellow-400 text-slate-900 px-4 py-2 inline-block font-black text-xl uppercase mb-8 shadow-sm">
            63-Hour Pre-Licensing Course
          </div>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
            Start your career in Florida Real Estate with the most comprehensive and supportive
            pre-licensing program. Expert-led training designed to get you licensed and earning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => window.location.href = '/enroll'} className="px-8 py-4 bg-slate-900 text-white rounded-xl font-black text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
              Reserve Your Spot
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-black text-lg hover:border-yellow-400 transition-all">
              View Schedule
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          {/* Profile Image Placeholder - Mirroring the Flyer's Man in Suit */}
          <div className="relative z-10 aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
             <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                <User className="w-32 h-32 opacity-20" />
             </div>
          </div>
          {/* Background Gold Accent */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20 -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20 -z-10" />
        </div>
      </section>

      {/* Course Schedule Section */}
      <section id="schedule" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight">Course Schedule</h2>
              <div className="space-y-6">
                {[
                  { icon: <Calendar className="w-6 h-6" />, title: "Starts", detail: "Monday, November 2nd" },
                  { icon: <Clock className="w-6 h-6" />, title: "Days & Hours", detail: "Monday – Friday | 6:00 PM – 10:00 PM (4 hrs/day)" },
                  { icon: <BookOpen className="w-6 h-6" />, title: "Duration", detail: "3 Weeks | Total of 63 Hours" },
                  { icon: <CheckCircle className="w-6 h-6" />, title: "Flexibility", detail: "Makeup slots available for missed classes (via Zoom)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-yellow-400 transition-all shadow-sm">
                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-wider">{item.title}</h4>
                      <p className="text-slate-600 font-medium">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Globe className="w-32 h-32" />
              </div>
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Why Genesis Academy?</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Florida Approved Curriculum",
                  "Live Via Zoom Interactive Learning",
                  "Exam Prep & Math Logic Support",
                  "Dedicated Makeup Slots Available"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 text-xs">✓</div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - High Contrast like the Flyer */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="bg-yellow-400 lg:w-2/3 p-10 lg:p-20 text-slate-900 flex flex-col justify-center items-center text-center">
            <span className="font-black uppercase tracking-widest text-sm mb-4">Special limited price</span>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-7xl md:text-9xl font-black tracking-tighter">$200</span>
              <div className="flex flex-col text-right">
                <span className="text-slate-600 line-through font-bold text-xl">$300</span>
                <span className="font-black text-xs uppercase">Regular Price</span>
              </div>
            </div>
            <p className="font-bold text-lg max-w-md mx-auto opacity-80">
              Get licensed for a fraction of the cost without sacrificing quality.
            </p>
          </div>
          <div className="bg-slate-800 lg:w-1/3 p-10 lg:p-20 text-white flex flex-col justify-center">
            <div className="bg-yellow-400/10 border border-yellow-400/30 p-6 rounded-2xl">
              <h4 className="text-yellow-400 font-black text-xl uppercase mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" /> Bonus Included
              </h4>
              <p className="text-2xl font-black leading-tight mb-4">FREE 4-HOUR CRAM CLASS</p>
              <p className="text-slate-400 text-sm">
                A $150 value. That's $450 of total value for just $200.
              </p>
            </div>
            <button onClick={() => window.location.href = '/enroll'} className="mt-10 w-full py-4 bg-yellow-400 text-slate-900 rounded-xl font-black text-lg hover:bg-yellow-500 transition-all uppercase tracking-wide">
              Claim Special Price
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid - Mirroring the bottom strip of the flyer */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <BookOpen className="w-6 h-6" />, title: "Florida Approved", detail: "Approved Curriculum" },
            { icon: <Monitor className="w-6 h-6" />, title: "Live via Zoom", detail: "Interactive Sessions" },
            { icon: <HelpCircle className="w-6 h-6" />, title: "Exam Prep", detail: "Math Logic Support" },
            { icon: <Headphones className="w-6 h-6" />, title: "Makeup Slots", detail: "Available (Live Zoom)" },
          ].map((item, i) => (
            <div key={i} className="p-6 border-2 border-slate-100 rounded-2xl text-center group hover:border-yellow-400 transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-600 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors">
                {item.icon}
              </div>
              <h5 className="font-black text-slate-900 text-xs uppercase tracking-tighter mb-1">{item.title}</h5>
              <p className="text-slate-500 text-[10px] font-bold uppercase leading-tight">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Footer - Direct mirror of the Flyer's gold bar */}
      <section className="sticky bottom-0 w-full z-40 bg-yellow-400 py-6 px-4 shadow-2xl border-t-4 border-yellow-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-2xl md:text-4xl font-black tracking-tighter uppercase">Call or Text</span>
          </div>
          <a href="tel:407-967-9690" className="text-3xl md:text-5xl font-black tracking-tighter hover:scale-105 transition-transform cursor-pointer">
            407-967-9690
          </a>
        </div>
      </section>
    </div>
  );
}
