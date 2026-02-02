'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: 'Methane Emissions Monitoring',
      category: 'Sustainability · Data Visualization',
      description: 'Global satellite data dashboard for real-time methane tracking',
      tags: ['Enterprise', 'Data Viz', 'Sustainability'],
    },
    {
      title: 'Green Tech Carbon Platform',
      category: 'Climate Tech · Analytics',
      description: 'Code & cloud analysis platform for carbon footprint reduction',
      tags: ['SaaS', 'Analytics', 'Climate'],
    },
    {
      title: 'AR/VR Asset Health',
      category: 'Emerging Tech · HoloLens',
      description: 'Mixed reality solution for transformer infrastructure monitoring',
      tags: ['AR/VR', 'Industrial', 'IoT'],
    },
    {
      title: 'Metaverse Hiring Platform',
      category: 'Emerging Tech · HR Tech',
      description: 'Immersive onboarding and recruitment in virtual environments',
      tags: ['Metaverse', 'HR Tech', 'Innovation'],
    },
    {
      title: 'Construction ERP',
      category: 'Enterprise · Construction',
      description: 'End-to-end platform for construction project management',
      tags: ['ERP', 'Enterprise', 'Workflow'],
    },
    {
      title: 'Vendor Ecosystem Dashboard',
      category: 'Enterprise · Supply Chain',
      description: 'Complex vendor relationship and performance management system',
      tags: ['Dashboard', 'B2B', 'Analytics'],
    },
  ];

  const experience = [
    {
      company: 'Ernst & Young (EY)',
      role: 'Supervising Associate',
      period: 'Nov 2021 — Present',
      highlights: [
        'Lead designer on global enterprise projects with international stakeholders',
        'Owned UX on projects without product managers',
        'Led UX across phased releases from concept to handoff',
        'Partnered with engineering teams of 4—9 members',
      ],
    },
    {
      company: 'Flying Cursor',
      role: 'Senior Art Director',
      period: 'Mar 2017 — Oct 2021',
      highlights: [
        'Led UI for Disney India, Reliance Mart, Mahindra',
        'Created interactive digital experiences and games',
        'Designed Women of Worth microsite for Outlook Business',
        'Mentored junior designers',
      ],
    },
    {
      company: 'Liqvd Asia',
      role: 'Senior Graphic Designer',
      period: 'Dec 2014 — Feb 2017',
      highlights: [
        'Digital campaigns for Indiabulls, Kalpataru, Mufti',
        'Interactive Facebook Canvas ads',
        'Multi-industry brand design',
      ],
    },
  ];

  const awards = [
    'AI Tech Award — Team Award (2025)',
    'APAC Innovation Award — Oceania (2022)',
    'Nordics WEX Hackathon Winner (2023)',
    'Promax India Gold — Disney India',
  ];

  return (
    <div className="bg-warmCream text-charcoal min-h-screen relative">
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="mesh-gradient"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-warmCream/80 border-b border-warmTan/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display text-xl tracking-tight font-semibold">
            SG
          </div>
          <div className="flex gap-8 text-sm font-body">
            <a href="#work" className="hover:text-terracotta transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-terracotta transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-terracotta transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div
          className="relative z-10 max-w-5xl text-center"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 leading-none">
            Shanta
            <br />
            <span className="text-terracotta">Gaitonde</span>
          </h1>

          <p className="font-body text-lg sm:text-xl md:text-2xl text-warmBrown max-w-3xl mx-auto mb-8 leading-relaxed">
            Senior Product Designer crafting enterprise platforms, data
            narratives, and emerging tech experiences for the past 13 years
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center items-center text-xs sm:text-sm text-warmBrown/70 font-body flex-wrap">
            <span>Bengaluru, India</span>
            <span className="w-1 h-1 rounded-full bg-warmBrown/30" />
            <span>13+ Years</span>
            <span className="w-1 h-1 rounded-full bg-warmBrown/30" />
            <span>Enterprise · Data · Emerging Tech</span>
          </div>

          <div className="mt-12 flex gap-4 justify-center flex-wrap">
            <a
              href="#work"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-charcoal text-warmCream rounded-full text-sm font-body hover:bg-terracotta transition-all duration-300 hover:scale-105"
            >
              View Selected Work
            </a>
            <a
              href="mailto:shantagaitonde@gmail.com"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-charcoal text-charcoal rounded-full text-sm font-body hover:bg-charcoal hover:text-warmCream transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          style={{
            opacity: Math.max(0, 1 - scrollY / 300),
          }}
        >
          <div className="w-6 h-10 border-2 border-warmBrown/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-terracotta rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-24 sm:py-32 px-6 bg-gradient-to-b from-transparent to-warmSand/30 z-10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-charcoal">
                Design leader for complex systems
              </h2>
              <div className="w-20 h-1 bg-terracotta mb-8" />
              <p className="font-body text-base sm:text-lg text-warmBrown leading-relaxed mb-6">
                I specialize in enterprise platforms, data-heavy dashboards,
                sustainability tools, and emerging technologies like AR/VR and
                Metaverse.
              </p>
              <p className="font-body text-base sm:text-lg text-warmBrown leading-relaxed">
                My strength lies in owning UX end-to-end, especially in
                ambiguous problem spaces where formal product ownership doesn't
                exist. I bridge the gap between vision and execution.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-warmTan/20 hover:shadow-xl transition-all duration-300">
                <h3 className="font-display text-xl sm:text-2xl mb-4 text-charcoal">
                  Recognition
                </h3>
                <div className="space-y-3">
                  {awards.map((award, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-warmBrown"
                    >
                      <span className="text-terracotta mt-1">→</span>
                      <span className="text-sm font-body">{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-warmTan/20 hover:shadow-xl transition-all duration-300">
                <h3 className="font-display text-xl sm:text-2xl mb-4 text-charcoal">
                  Certifications
                </h3>
                <div className="space-y-3 text-warmBrown font-body text-sm">
                  <p>• Certified Usability Analyst (CUA) — HFI</p>
                  <p>• Design Thinking — IIM Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="relative py-24 sm:py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light mb-6">
              Selected Work
            </h2>
            <p className="font-body text-base sm:text-lg text-warmBrown max-w-2xl mx-auto">
              Enterprise platforms and emerging tech experiences that solve
              complex problems
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="relative py-24 sm:py-32 px-6 bg-gradient-to-b from-warmSand/30 to-transparent z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light mb-16 sm:mb-20 text-center">
            Experience
          </h2>

          <div className="space-y-12 sm:space-y-16">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="relative pl-8 sm:pl-12 border-l-2 border-terracotta/20 hover:border-terracotta transition-colors duration-300"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-terracotta rounded-full" />

                <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-warmTan/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-charcoal">
                        {exp.company}
                      </h3>
                      <p className="font-body text-terracotta">{exp.role}</p>
                    </div>
                    <span className="font-body text-sm text-warmBrown/70">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-warmBrown font-body text-sm"
                      >
                        <span className="text-terracotta mt-1 flex-shrink-0">
                          →
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talks & Mentorship */}
      <section className="relative py-24 sm:py-32 px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-terracotta/5 to-warmSand/30 rounded-3xl p-8 sm:p-12 md:p-16 border border-terracotta/10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light mb-8">
              Talks & Mentorship
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl text-terracotta">
                    01
                  </span>
                  <div>
                    <p className="font-body text-sm text-warmBrown/70 mb-1">
                      2024
                    </p>
                    <p className="font-body text-charcoal">
                      ATMA — Using AI while creating presentations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl text-terracotta">
                    02
                  </span>
                  <div>
                    <p className="font-body text-sm text-warmBrown/70 mb-1">
                      2024
                    </p>
                    <p className="font-body text-charcoal">
                      EY Women's Day — Using AI in daily design work
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl text-terracotta">
                    03
                  </span>
                  <div>
                    <p className="font-body text-sm text-warmBrown/70 mb-1">
                      2023
                    </p>
                    <p className="font-body text-charcoal">
                      IEDC Summit, Trivandrum — UX Masterclass
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-24 sm:py-32 px-6 bg-gradient-to-b from-transparent to-charcoal text-warmCream z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-light mb-8">
            Let's create something
            <br />
            <span className="text-terracotta">meaningful together</span>
          </h2>

          <p className="font-body text-base sm:text-lg mb-12 text-warmCream/70">
            Open to select projects and collaborations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
            <a
              href="mailto:shantagaitonde@gmail.com"
              className="font-body text-base sm:text-lg hover:text-terracotta transition-colors"
            >
              shantagaitonde@gmail.com
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-warmCream/30" />
            <a
              href="tel:+919833825799"
              className="font-body text-base sm:text-lg hover:text-terracotta transition-colors"
            >
              +91 98338 25799
            </a>
          </div>

          <div className="flex gap-6 justify-center font-body">
            <a
              href="#"
              className="text-sm hover:text-terracotta transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm hover:text-terracotta transition-colors"
            >
              Behance
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-charcoal text-warmCream/50 py-8 px-6 text-center border-t border-warmCream/10 z-10">
        <p className="font-body text-sm">
          © 2024 Shanta Gaitonde. Crafted with care.
        </p>
      </footer>
    </div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 20;
    const tiltY = (centerX - x) / 20;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="group relative bg-white/60 backdrop-blur-sm rounded-2xl border border-warmTan/20 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
          isHovered ? 'scale(1.02)' : 'scale(1)'
        }`,
        transition: 'transform 0.3s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 to-warmSand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 sm:p-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta rounded-full text-xs font-body mb-3">
            {project.category}
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-2 group-hover:text-terracotta transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-body text-sm text-warmBrown leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-warmSand/40 text-warmBrown rounded-full text-xs font-body"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-terracotta font-body text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
          <span>View Case Study</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}