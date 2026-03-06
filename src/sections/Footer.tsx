import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Instagram,
  ArrowUp,
  Facebook,
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Web Development', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'SEO Optimization', href: '#services' },
    { label: 'Maintenance', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Documentation', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61588540993135', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/noahdigitallabs?igsh=aGVwbWFreTdwMmQ0', label: 'Instagram' },
];

export function Footer() {
  const { ref: footerRef, isVisible: footerVisible } = useScrollReveal<HTMLElement>();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="bg-dark text-white pt-20 pb-8"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          {/* Logo & Description */}
          <div
            className={`lg:col-span-2 transition-all duration-500 ease-expo-out ${
              footerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <a href="#" className="inline-block text-2xl font-bold mb-4">
              Noah Digital<span className="text-lime">_</span>Labs Inc.
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Transforming ideas into digital reality. We build exceptional web
              experiences that drive results.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-lime hover:text-dark hover:scale-110 hover:rotate-6 transition-all duration-300 ease-spring ${
                      footerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${800 + index * 50}ms` }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div
            className={`transition-all duration-500 ease-expo-out ${
              footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-300 ease-expo-out ${
                    footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 text-sm hover:text-lime hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div
            className={`transition-all duration-500 ease-expo-out ${
              footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-300 ease-expo-out ${
                    footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 text-sm hover:text-lime hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div
            className={`transition-all duration-500 ease-expo-out ${
              footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-300 ease-expo-out ${
                    footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  style={{ transitionDelay: `${600 + index * 50}ms` }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 text-sm hover:text-lime hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div
            className={`transition-all duration-500 ease-expo-out ${
              footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-300 ease-expo-out ${
                    footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  style={{ transitionDelay: `${700 + index * 50}ms` }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 text-sm hover:text-lime hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div
              className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-white/50 transition-all duration-400 ease-smooth ${
                footerVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <span>© 2026 Noah Digital Labs, Inc. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>Made with passion in Vancouver, Canada.</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className={`group flex items-center gap-2 text-sm text-white/50 hover:text-lime transition-all duration-300 ${
                footerVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1100ms' }}
            >
              Back to top
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-lime group-hover:text-dark transition-all duration-300">
                <ArrowUp size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
