import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-expo-out ${
        isScrolled
          ? 'glass py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-dark tracking-tight animate-fade-in"
            style={{ animationDelay: '0ms' }} >
            Noah Digital<span className="text-lime">_</span>Labs
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="relative text-sm font-medium text-dark/80 hover:text-dark transition-colors duration-250 group animate-slide-down"
                style={{ animationDelay: `${100 + index * 80}ms` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-lime transition-all duration-250 ease-expo-out group-hover:w-full group-hover:left-0" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-lime text-dark text-sm font-semibold rounded-full hover:bg-dark hover:text-lime transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:shadow-glow animate-scale-in"
            style={{ animationDelay: '400ms' }}
          >
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-expo-out ${
            isMobileMenuOpen ? 'max-h-80 mt-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-dark/80 hover:text-dark font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-lime text-dark text-sm font-semibold rounded-full mt-2"
            >
              Get a Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
