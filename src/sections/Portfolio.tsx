import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'New Way Forming',
    category: 'High Performance',
    description:
      'Designed for speed and efficiency, featuring a modern architecture that leverages Reacts optimized rendering and Vites ultra-fast bundling.',
    tags: ['React', 'Node.js', 'TypeScritp', 'TailwindCSS', 'Vite', 'Framer Motion'],
    image: '/newway.png',
    color: '#3b82f6',
    link: 'https://newwayforming-demo.netlify.app/version3',
  },
  {
    title: 'Café Orso',
    category: 'E-Commerce',
    description:
      'Premium coffee shop with pre-order system and integrated payment gateway.',
    tags: ['React', 'TypeScript', 'Stripe', 'TailwindCSS'],
    image: '/cafeorsoo.png',
    color: '#d4e123',
    link: 'https://cafe-orso.vercel.app/', 
  },
  {
    title: 'Nebula Homes',
    category: 'Real State',
    description:
      'Luxury home builder website with project portfolio, 3D visualizations, and client management system.',
    tags: ['React', 'TypeScript', 'Three.js', 'TailwindCSS', 'Sanity CMS'],
    image: '/nebulaa.png',
    color: '#10b981',
    link: 'https://nebulahomes-demo.netlify.app/version2',
  },
  {
  title: 'Acuyo Restaurant',
  category: 'Food & Beverage',
  description: 'Mexican restaurant with table reservation system, digital menu, and real-time availability management.',
  tags: ['React', 'TypeScript', 'Node.js', 'TailwindCSS', 'Framer Motion'],
  image: '/acuyo.png',
  color: '#f59e0b',
  link: 'https://acuyorestaurant-demo.netlify.app/',
  },
  {
  title: 'Tutto Belle',
  category: 'Food & Beverage',
  description: 'Artisan gelato shop with interactive flavor gallery, location-based menus, and immersive candy-themed animations.',
  tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion'],
  image: '/tuttobelle.png',
  color: '#f59e0b',
  link: 'https://tuttobelle.netlify.app/',
  },
  {
  title: 'Toshis Sushi',
  category: 'Food & Beverage',
  description: 'Modern Japanese restaurant with interactive expandable menu cards, horizontal image gallery, and fluid Framer Motion animations.',
  tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
  image: '/toshisushi.png',
  color: '#dc2626',
  link: 'https://toshissushi.netlify.app/',
  },
  ];

export function Portfolio() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-dark">
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
            Our Work
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 transition-all duration-600 ease-expo-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Featured Projects
          </h2>
          <p
            className={`text-lg text-white/60 leading-relaxed transition-all duration-500 ease-smooth ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Explore our latest work and see how we've helped businesses transform
            their digital presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => {
            const delay = 500 + index * 100;
            const isLarge = index === 0 || index === 3;

            return (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-lime/50 transition-all duration-500 ease-expo-out ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                } ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{
                  transitionDelay: `${delay}ms`,
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* View Project Button */}
                  {/* View Project Button - AHORA FUNCIONAL */}
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 z-20"
                    >
                   <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime text-dark text-sm font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
                    View Project
                    <ExternalLink size={16} />
                  </span>
                  </a>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-lime transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-white/40 group-hover:text-lime transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 border border-white/20 text-white/70 text-xs rounded-full hover:border-lime hover:text-lime transition-colors duration-250"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-500 ease-expo-out ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <button className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:border-lime hover:text-lime transition-all duration-300">
            View All Projects
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
