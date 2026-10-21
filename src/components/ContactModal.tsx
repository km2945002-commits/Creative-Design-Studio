import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    serviceName?: string;
    tier?: string;
    estimatedCost?: number;
    estimatedDays?: number;
    addons?: string[];
  } | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [selectedService, setSelectedService] = useState('Websites & Apps Design');
  const [budget, setBudget] = useState('PKR 50,000 - 100,000');
  const [projectBrief, setProjectBrief] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    referenceId: string;
    timestamp: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialData?.serviceName) {
      setSelectedService(initialData.serviceName);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = 'Please enter your full name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!projectBrief.trim() || projectBrief.length < 10) {
      errors.projectBrief = 'Please provide a brief description (at least 10 characters).';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `CDS-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket({
        referenceId: generatedId,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 500);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Creative Design Studio!\n\n` +
      `My Name: ${fullName || 'Client'}\n` +
      `Required Service: ${selectedService}\n` +
      `Estimated Budget: ${budget}\n` +
      `Email: ${email || 'N/A'}\n` +
      `Brief: ${projectBrief || 'I would like to get a project quote.'}`
    );
    window.open(`https://wa.me/923199774681?text=${text}`, '_blank');
  };

  const handleCopyTicket = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket.referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedTicket(null);
    setFullName('');
    setEmail('');
    setWhatsapp('');
    setProjectBrief('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800 sticky top-0 bg-neutral-950/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-neutral-950 flex items-center justify-center font-bold text-xs">
              CDS
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                Get a Project Quote
              </h3>
              <span className="text-[10px] text-neutral-400 font-mono">
                Creative Design Studio · Suhan Islamabad
              </span>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submittedTicket ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-white">
                Project Quote Received
              </h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{fullName}</strong>. Your project specifications have been logged.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 max-w-md mx-auto text-left space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800 pb-2">
                <span>REFERENCE ID:</span>
                <span className="font-bold text-amber-400 text-sm">{submittedTicket.referenceId}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>SERVICE:</span>
                <span className="text-white">{selectedService}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>BUDGET:</span>
                <span className="text-emerald-400 font-bold">{budget}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleCopyTicket}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors inline-flex items-center gap-2 cursor-pointer border border-neutral-700"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Reference' : 'Copy Reference ID'}</span>
              </button>

              <button
                onClick={handleSendViaWhatsApp}
                className="px-5 py-2.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </button>
            </div>

            <button
              onClick={handleResetAndClose}
              className="text-xs text-neutral-400 hover:text-white underline block mx-auto pt-2 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span>Need immediate response?</span>
              </div>
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Direct WhatsApp (+92 319 9774681)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Mortaza Khan"
                  className={`w-full bg-neutral-900 border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 ${
                    formErrors.fullName ? 'border-red-500' : 'border-neutral-800'
                  }`}
                />
                {formErrors.fullName && (
                  <p className="text-[11px] text-red-400 mt-1">{formErrors.fullName}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className={`w-full bg-neutral-900 border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 ${
                    formErrors.email ? 'border-red-500' : 'border-neutral-800'
                  }`}
                />
                {formErrors.email && (
                  <p className="text-[11px] text-red-400 mt-1">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+92 319 9774681"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1">
                  Required Service *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Full Creative Suite">Full Creative Suite (Multiple Services)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1">
                Estimated Project Budget (PKR)
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="PKR 25,000 - 50,000">PKR 25,000 - 50,000</option>
                <option value="PKR 50,000 - 100,000">PKR 50,000 - 100,000</option>
                <option value="PKR 100,000 - 250,000">PKR 100,000 - 250,000</option>
                <option value="PKR 250,000+">PKR 250,000+ (Flagship Scope)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1">
                Project Description & Details *
              </label>
              <textarea
                rows={4}
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                placeholder="Describe your brand, website requirements, preferred design style, and timeline goals..."
                className={`w-full bg-neutral-900 border rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-amber-400 resize-none ${
                  formErrors.projectBrief ? 'border-red-500' : 'border-neutral-800'
                }`}
              />
              {formErrors.projectBrief && (
                <p className="text-[11px] text-red-400 mt-1">{formErrors.projectBrief}</p>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-neutral-400">
                Direct inquiry · Response within 24 hours
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="px-4 py-3 rounded-xl text-xs font-semibold text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Registering...' : 'Submit Quote Request'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
