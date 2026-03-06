import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Code2,
  Palette,
  ShoppingCart,
  TrendingUp,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Custom websites and web applications built with cutting-edge technologies for optimal performance and scalability.',
    features: ['React', 'Vue', 'Node.js', 'Python'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with functionality to create memorable digital experiences.',
    features: ['Wireframing', 'Prototyping', 'User Testing'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description:
      'Full-featured online stores that convert visitors into customers with seamless shopping experiences.',
    features: ['Shopify', 'WooCommerce', 'Custom'],
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description:
      'Data-driven strategies that improve visibility, drive organic traffic, and increase conversions.',
    features: ['Audit', 'Strategy', 'Content'],
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance',
    description:
      'Keep your website secure, updated, and performing at its best with our proactive care plans.',
    features: ['Security', 'Updates', 'Monitoring'],
  },
  {
    icon: MessageCircle,
    title: 'Consulting',
    description:
      'Strategic guidance to help you make informed decisions about your digital presence and technology stack.',
    features: ['Strategy', 'Architecture', 'Review'],
  },
];

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 lg:py-32 bg-gray">
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span
            className={`inline-block text-xs font-semibold tracking-widest text-lime uppercase mb-4 transition-all duration-400 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            What We Do
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-dark mb-6 transition-all duration-600 ease-expo-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Services Built for Growth
          </h2>
          <p
            className={`text-lg text-dark/60 leading-relaxed transition-all duration-500 ease-smooth ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            From stunning designs to robust development, we deliver solutions that
            scale with your business.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEvenRow = Math.floor(index / 3) % 2 === 1;
            const delay = 500 + index * 100;

            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 ease-spring hover:-translate-y-3 hover:border-lime border-2 border-transparent ${
                  gridVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                } ${isEvenRow ? 'lg:translate-y-8' : ''}`}
                style={{
                  transitionDelay: `${delay}ms`,
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gray rounded-xl text-dark group-hover:bg-lime group-hover:text-dark transition-all duration-300 ease-spring group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-3 py-1 bg-gray text-dark/70 text-xs font-medium rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      style={{
                        transitionDelay: `${fIndex * 50}ms`,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-lime rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-expo-out origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
