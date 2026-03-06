import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Github,
  Dribbble,
  CheckCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Ezebuen25@gmail.com',
    href: 'mailto:Ezebuen25@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (672) 673 4658',
    href: 'tel:+16726734658',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Vancouver, BC',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri, 9AM-6PM PST',
    href: '#',
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Dribbble, href: '#', label: 'Dribbble' },
];

const projectTypes = [
  'Web Development',
  'UI/UX Design',
  'E-Commerce',
  'SEO Optimization',
  'Maintenance',
  'Consulting',
  'Other',
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
 

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>();

  // ✅ EMAILJS HANDLE SUBMIT REAL
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_4mlbadj',
      'template_34lih8p',
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        projectType: formData.projectType,
        message: formData.message,
      },
      '_pdy-KzAcNZfU8_Pv'
    );

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: '',
      });
    }, 3000);

  } catch (error) {
    console.error(error);
    setIsSubmitting(false);
    alert('Something went wrong. Please try again.');
  }
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="w-full px-6 lg:px-12">

        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <span className={`inline-block text-xs font-semibold tracking-widest text-lime uppercase mb-4 transition-all duration-400 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Get In Touch
          </span>

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-dark mb-6 transition-all duration-600 ease-expo-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            Let's Start Your Project
          </h2>

          <p className={`text-lg text-dark/60 leading-relaxed transition-all duration-500 ease-smooth ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '400ms' }}>
            Ready to transform your digital presence? Get in touch and let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">

          {/* CONTACT INFO */}
          <div ref={contentRef} className={`transition-all duration-600 ease-expo-out ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray transition-all duration-300">
                    <div className="w-12 h-12 bg-lime/10 rounded-xl flex items-center justify-center text-dark group-hover:bg-lime group-hover:scale-110 transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="block text-sm text-dark/50">{item.label}</span>
                      <span className="block font-medium text-dark">{item.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div>
              <span className="block text-sm text-dark/50 mb-4">Follow Us</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.label} href={social.href} className="w-11 h-11 rounded-full bg-gray flex items-center justify-center text-dark hover:bg-lime hover:scale-110 transition-all duration-300">
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 p-4 bg-lime/10 rounded-xl">
              <CheckCircle className="text-lime" size={24} />
              <span className="text-sm text-dark/70">
                We typically respond within 24 hours
              </span>
            </div>
          </div>

          {/* FORM */}
          <div ref={formRef} className={`bg-gray rounded-3xl p-8 lg:p-10 transition-all duration-600 ease-expo-out ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 bg-white rounded-xl border-2 border-transparent focus:border-lime outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 bg-white rounded-xl border-2 border-transparent focus:border-lime outline-none"
                />

              </div>

              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full py-3 px-4 bg-white rounded-xl border-2 border-transparent focus:border-lime outline-none"
              />

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full py-3 px-4 bg-white rounded-xl border-2 border-transparent focus:border-lime outline-none"
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full py-3 px-4 bg-white rounded-xl border-2 border-transparent focus:border-lime outline-none resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-lime text-dark hover:bg-dark hover:text-lime'
                }`}
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                {!isSubmitting && !isSubmitted && <Send size={18} />}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
