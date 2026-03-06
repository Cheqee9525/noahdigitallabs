import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years Experience' },
];

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Modern office collaboration"
          className={`w-full h-full object-cover transition-all duration-1200 ease-expo-out ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6">
            <span
              className={`block transition-all duration-800 ease-expo-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Transforming Ideas
            </span>
            <span
              className={`block transition-all duration-800 ease-expo-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              Into{' '}
              <span className="text-gradient bg-gradient-to-r from-lime to-yellow-300 bg-clip-text text-transparent">
                Digital
              </span>
            </span>
            <span
              className={`block transition-all duration-800 ease-expo-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Reality
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed transition-all duration-600 ease-smooth ${
              isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            Premium web development services that elevate your brand and drive
            measurable results. From concept to launch, we build experiences that
            matter.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-500 ease-spring ${
              isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime text-dark font-semibold rounded-full hover:bg-white transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:shadow-glow-lg"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="group inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:border-lime hover:text-lime transition-all duration-300"
            >
              <Play size={18} />
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap gap-8 md:gap-12 transition-all duration-400 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
            style={{ transitionDelay: '1300ms' }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 animate-fade-in"
                style={{ animationDelay: `${1400 + index * 100}ms` }}
              >
                <CheckCircle className="text-lime" size={20} />
                <div>
                  <span className="text-white font-bold text-lg">{stat.value}</span>
                  <span className="text-white/60 text-sm ml-2">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray to-transparent" />
      
      {/* Floating accent dots */}
      <div
        className={`absolute top-1/4 right-1/4 w-3 h-3 bg-lime rounded-full animate-float transition-opacity duration-1000 ${
          isLoaded ? 'opacity-60' : 'opacity-0'
        }`}
        style={{ animationDelay: '0s' }}
      />
      <div
        className={`absolute bottom-1/3 right-1/3 w-2 h-2 bg-lime rounded-full animate-float transition-opacity duration-1000 ${
          isLoaded ? 'opacity-40' : 'opacity-0'
        }`}
        style={{ animationDelay: '2s' }}
      />
      <div
        className={`absolute top-1/2 right-12 w-4 h-4 bg-lime/30 rounded-full animate-float transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ animationDelay: '4s' }}
      />
    </section>
  );
}
