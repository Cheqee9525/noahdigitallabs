import { useEffect, useRef, useState } from 'react';
import { useScrollReveal, useCountUp } from '@/hooks/useScrollReveal';
import { ArrowRight, Award, Users, Calendar, Briefcase } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: 150, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 50, suffix: '+', label: 'Happy Clients' },
  { icon: Calendar, value: 5, suffix: '+', label: 'Years Experience' },
  { icon: Award, value: 1, suffix: '', label: 'Team Members' },
];

function StatItem({
  stat,
  isVisible,
}: {
  stat: (typeof stats)[0];
  isVisible: boolean;
}) {
  const { count, startAnimation } = useCountUp(stat.value, 2000);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isVisible && !hasStarted.current) {
      hasStarted.current = true;
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  const Icon = stat.icon;

  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-lime/10 rounded-xl text-lime mb-3">
        <Icon size={24} />
      </div>
      <span className="text-3xl md:text-4xl font-bold text-dark mb-1">
        {count}
        {stat.suffix}
      </span>
      <span className="text-sm text-dark/60">{stat.label}</span>
    </div>
  );
}

export function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>();
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-800 ease-expo-out ${
              sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about-team.jpg"
                  alt="Our team collaborating"
                  className={`w-full aspect-[4/5] object-cover transition-all duration-1000 ${
                    imageLoaded ? 'scale-100' : 'scale-110'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lime rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-lime rounded-2xl -z-10" />

              {/* Experience Badge */}
              <div
                className={`absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-xl transition-all duration-600 ease-spring ${
                  sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center">
                    <Calendar className="text-dark" size={24} />
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-dark">5+</span>
                    <span className="text-sm text-dark/60">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SVG Decorative Line */}
            <svg
              className="absolute top-1/2 -right-10 w-20 h-40 hidden lg:block"
              viewBox="0 0 80 160"
              fill="none"
            >
              <path
                d="M0 80 Q 40 0, 80 80 Q 40 160, 0 80"
                stroke="#d4e123"
                strokeWidth="2"
                fill="none"
                className={`transition-all duration-1000 ease-expo-out ${
                  sectionVisible ? 'stroke-dashoffset-0' : ''
                }`}
                style={{
                  strokeDasharray: 300,
                  strokeDashoffset: sectionVisible ? 0 : 300,
                  transitionDelay: '400ms',
                }}
              />
            </svg>
          </div>

          {/* Content Column */}
          <div ref={contentRef}>
            <span
              className={`inline-block text-xs font-semibold tracking-widest text-lime uppercase mb-4 transition-all duration-400 ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              About Us
            </span>

            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-dark mb-6 leading-tight transition-all duration-600 ease-expo-out ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Crafting Digital Excellence Since 2022
            </h2>

            <div
              className={`space-y-4 mb-8 transition-all duration-500 ease-smooth ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-dark/70 leading-relaxed">
                We're a team of passionate developers, designers, and digital
                strategists dedicated to creating exceptional web experiences. Our
                approach combines technical expertise with creative innovation to
                deliver solutions that not only look great but perform exceptionally.
              </p>
              <p className="text-dark/70 leading-relaxed">
                Every project we undertake is an opportunity to push boundaries and
                set new standards. We believe in building lasting relationships with
                our clients, becoming partners in their success rather than just
                service providers.
              </p>
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-400 ease-expo-out ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-dark text-dark font-semibold rounded-full hover:bg-dark hover:text-white transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          ref={statsRef}
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 bg-gray rounded-2xl p-6 lg:p-8 transition-all duration-600 ease-expo-out ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative ${
                index < stats.length - 1 ? 'md:after:content-[""] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-px md:after:h-12 md:after:bg-dark/10' : ''
              }`}
            >
              <StatItem stat={stat} isVisible={statsVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
