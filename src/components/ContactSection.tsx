import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [requiredService, setRequiredService] = useState('Websites & Apps Design');
  const [budget, setBudget] = useState('PKR 50,000 - 100,000');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{ id: string; timestamp: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const budgetOptions = [
    'PKR 25,000 - 50,000',
    'PKR 50,000 - 100,000',
    'PKR 100,000 - 250,000',
    'PKR 250,000+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !description) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const ticketId = `CDS-${Math.floor(100000 + Math.random() * 900000)}`;
      const newTicket = {
        id: ticketId,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      // Save to local storage for persistence
      try {
        const stored = JSON.parse(localStorage.getItem('cds_quotes') || '[]');
        stored.push({
          ticketId,
          fullName,
          email,
          whatsapp,
          requiredService,
          budget,
          description,
          createdAt: new Date().toISOString()
        });
        localStorage.setItem('cds_quotes', JSON.stringify(stored));
      } catch {
        // ignore storage errors
      }

      setSubmittedTicket(newTicket);
      setIsSubmitting(false);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Creative Design Studio! My name is ${fullName || 'Client'}.\n\n` +
      `Required Service: ${requiredService}\n` +
      `Budget: ${budget}\n` +
      `Email: ${email || 'N/A'}\n` +
      `Project Details: ${description || 'I would like to discuss a project quote.'}`
    );
    window.open(`https://wa.me/923199774681?text=${text}`, '_blank');
  };

  const handleCopyTicket = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(
        `Creative Design Studio Reference: ${submittedTicket.id} | Name: ${fullName} | Service: ${requiredService}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 border-b border-neutral-800 relative overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-purple-900/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-amber-900/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Contact & Get a Quote
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Ready to initiate a website, logo, packaging, business card, or flex banner project? Complete the form below for an itemized proposal, or reach out instantly via WhatsApp or direct email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact Channels & WhatsApp Action (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl border border-neutral-800 bg-neutral-900/60 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-white">
                Studio Communications
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                We respond to all project inquiries within 24 hours. For immediate assistance or instant voice/chat discussions, connect directly on WhatsApp.
              </p>

              {/* Direct WhatsApp Callout Button */}
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </button>

              <div className="space-y-4 pt-3 border-t border-neutral-800">
                <div className="flex items-start gap-3.5 text-xs">
                  <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase block">Studio Address</span>
                    <strong className="text-white text-xs">Suhan Islamabad, Pakistan</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs">
                  <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-pink-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase block">Email Address</span>
                    <a href="mailto:km2945002@gmail.com" className="text-white hover:text-amber-300 font-medium transition-colors">
                      km2945002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs">
                  <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase block">WhatsApp / Phone</span>
                    <a href="https://wa.me/923199774681" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-300 font-medium transition-colors">
                      +92 319 9774681
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time & Inclusions Box */}
            <div className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 text-xs text-neutral-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>What Happens Next?</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                1. We review your requirements and target timeline.<br />
                2. You receive an itemized proposal with clear milestones in PKR.<br />
                3. We begin the discovery phase upon mutual project confirmation.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Project Quote Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/60 rounded-2xl border border-neutral-800 p-7 sm:p-9 shadow-2xl">
            {submittedTicket ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Project Quote Request Received</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{fullName}</strong>. Your inquiry has been registered. Our lead designer will review your specifications and contact you shortly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 max-w-md mx-auto text-left font-mono text-xs space-y-2">
                  <div className="flex justify-between text-neutral-400 border-b border-neutral-800 pb-2">
                    <span>REFERENCE ID:</span>
                    <strong className="text-amber-400 font-bold">{submittedTicket.id}</strong>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>SERVICE:</span>
                    <span className="text-white">{requiredService}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>BUDGET:</span>
                    <span className="text-emerald-400">{budget}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleCopyTicket}
                    className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors inline-flex items-center gap-2 cursor-pointer border border-neutral-700"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied Details' : 'Copy Reference'}</span>
                  </button>

                  <button
                    onClick={handleSendViaWhatsApp}
                    className="px-4 py-2.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </button>
                </div>

                <button
                  onClick={() => setSubmittedTicket(null)}
                  className="text-xs text-neutral-400 hover:text-white underline pt-3 block mx-auto cursor-pointer"
                >
                  Submit Another Quote Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Mortaza Khan"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. yourname@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-medium">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+92 319 9774681"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Required Service */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-medium">
                      Required Service *
                    </label>
                    <select
                      value={requiredService}
                      onChange={(e) => setRequiredService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Budget */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-medium">
                    Estimated Project Budget (PKR)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setBudget(opt)}
                        className={`py-2.5 px-2 rounded-lg text-xs font-mono transition-all border cursor-pointer text-center ${
                          budget === opt
                            ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                            : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-medium">
                    Project Description & Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell us about your business, website or design goals, target audience, and any preferred features or deadlines..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                {/* Action Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-neutral-400">
                    Your information is kept private. We will reply via email or WhatsApp.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Registering Quote...' : 'Submit Quote Request'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
