import React from 'react';
import { X, Mail, Phone, HeartHandshake } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">

        {/* ── Dark Header ── */}
        <div className="relative overflow-hidden px-6 pt-6 pb-5 text-white" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-30 pointer-events-none" style={{ background: '#1e3a8a', transform: 'translate(40%, -40%)' }}></div>

          <button onClick={onClose} className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-white/15 transition-colors cursor-pointer" aria-label="Close">
            <X size={16} className="text-white/70" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <HeartHandshake size={20} style={{ color: '#d97706' }} />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white leading-tight">Begin Your Journey</h3>
              <p className="text-slate-400 text-xs mt-0.5">We're here to support you.</p>
            </div>
          </div>
        </div>

        {/* ── Contact Rows ── */}
        <div className="bg-white px-5 py-4 space-y-2.5">
          <a href="mailto:student.wellness@visionias.in"
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:bg-brand-primary" style={{ background: 'rgba(30,58,138,0.08)', color: '#1e3a8a' }}>
              <Mail size={16} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Email</p>
              <p className="text-slate-800 text-sm font-medium">student.wellness@visionias.in</p>
            </div>
          </a>

          <a href="tel:9311799223"
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-200 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:bg-brand-accent" style={{ background: 'rgba(217,119,6,0.08)', color: '#d97706' }}>
              <Phone size={16} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Phone</p>
              <p className="text-slate-800 text-sm font-medium">9311799223</p>
            </div>
          </a>

          <p className="text-center text-[11px] text-slate-400 pt-1 pb-1">
            Mon–Sat &nbsp;·&nbsp; <span className="text-brand-primary font-semibold">10 AM – 6 PM</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactModal;
