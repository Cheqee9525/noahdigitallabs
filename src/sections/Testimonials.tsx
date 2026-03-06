import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechStart',
    avatar: '/avatar-1.jpg',
    content:
      'Working with this team was an absolute game-changer for our business. They delivered a website that exceeded our expectations in every way. The attention to detail and responsiveness throughout the project was outstanding.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Founder, GrowthLabs',
    avatar: '/avatar-2.jpg',
    content:
      'The attention to detail and technical expertise is unmatched. They transformed our vision into a stunning reality. Our new platform has helped us acquire 40% more customers in just three months.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandCo',
    avatar: '/avatar-3.jpg',
    content:
      'Professional, responsive, and incredibly talented. Our new website has significantly improved our conversion rates. I highly recommend their services to anyone looking for top-tier web development.',
    rating: 5,
  },
  {
    name: 'Michael Foster',
    role: 'CTO, DataSync',
    avatar: '/avatar-4.jpg',
    content:
      'From start to finish, the process was seamless. They understood our complex requirements and delivered perfectly. The ongoing support has been exceptional, making them a true technology partner.',
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollReveal<HTMLDivElement>();

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-gray overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span
            className={`inline-block text-xs font-semibold tracking-widest text-lime uppercase mb-4 transition-all duration-400 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-dark mb-6 transition-all duration-600 ease-expo-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            What Our Clients Say
          </h2>
          <p
            className={`text-lg text-dark/60 leading-relaxed transition-all duration-500 ease-smooth ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className={`relative max-w-4xl mx-auto transition-all duration-700 ease-spring ${
            carouselVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          {/* Main Card */}
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-card">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 lg:left-12">
              <div className="w-12 h-12 bg-lime rounded-xl flex items-center justify-center">
                <Quote className="text-dark" size={24} />
              </div>
            </div>

            {/* Content */}
            <div className="pt-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`transition-all duration-500 ease-expo-out ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-lime text-lime"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-dark leading-relaxed mb-8">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <span className="block font-semibold text-dark">
                        {testimonial.name}
                      </span>
                      <span className="text-sm text-dark/60">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center text-dark hover:bg-lime hover:text-dark transition-all duration-300 ease-spring hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-lime w-8'
                      : 'bg-dark/20 hover:bg-dark/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center text-dark hover:bg-lime hover:text-dark transition-all duration-300 ease-spring hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
