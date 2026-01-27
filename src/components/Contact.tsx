import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-dark-800 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-accent/5 blur-[100px]"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[100px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          <div className="max-w-xl">
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-brand-accent">
              Contact Us
            </span>

            <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl">
              Let&apos;s Talk About <br />
              Your <span className="text-brand-accent">Next Project</span>
            </h2>

            <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-400">
              We're here to help you grow. Get in touch and start building a winning digital strategy today.
            </p>

            <div className="space-y-8">
              <div className="group flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-brand-accent group-hover:text-dark-900">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Call Us</h4>
                  <p className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-brand-accent">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-brand-accent group-hover:text-dark-900">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Email Us</h4>
                  <p className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-brand-accent">
                    hello@vortex.com
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-brand-accent group-hover:text-dark-900">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Visit Us</h4>
                  <p className="text-sm text-gray-400">
                    22 Creative Avenue, Suite 12B
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 max-w-lg rounded-2xl border border-brand-accent/20 bg-gradient-to-br from-brand-accent/20 to-transparent p-6">
              <p className="font-display text-lg font-medium text-white">
                &quot;The best way to predict the future is to create it.&quot;
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rotate-1 rounded-3xl bg-white/5 backdrop-blur-xl"></div>
            <div className="relative rounded-3xl border border-white/10 bg-dark-900 p-8 shadow-2xl md:p-10">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Send us a message
              </h3>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-white/10 bg-dark-800 px-4 py-3 text-white outline-none transition-all focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-white/10 bg-dark-800 px-4 py-3 text-white outline-none transition-all focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <select className="w-full appearance-none rounded-lg border border-white/10 bg-dark-800 px-4 py-3 text-white outline-none transition-all focus:border-brand-accent focus:ring-1 focus:ring-brand-accent">
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Career</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-dark-800 px-4 py-3 text-white outline-none transition-all focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                  ></textarea>
                </div>

                <Button className="w-full justify-center group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
