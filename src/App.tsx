/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Workflow, 
  Bot, 
  BarChart3, 
  Zap, 
  Code2, 
  Globe, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  ChevronRight,
  ExternalLink,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-brand-border py-6' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-12 flex justify-between items-center">
        <a href="#" className="flex flex-col group">
          <span className="text-white font-bold tracking-tight text-xl uppercase leading-none group-hover:text-brand-purple transition-colors">Piolo Pagana</span>
          <span className="text-[10px] text-brand-purple uppercase tracking-[0.2em] font-semibold mt-1">Automation Specialist</span>
        </a>
        
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-widest font-medium text-brand-muted hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[11px] uppercase tracking-widest font-bold text-white hover:text-brand-purple transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 glow-mesh opacity-100 pointer-events-none" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-12 w-full grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-6xl sm:text-8xl mb-8 select-none"
          >
            🤖
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[64px] sm:text-[84px] md:text-[102px] leading-[0.88] font-bold text-white tracking-tighter"
          >
            I CREATE <br/>
            <span className="text-brand-purple">INTELLIGENT</span> <br/>
            SYSTEMS.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 text-xl text-brand-muted max-w-lg leading-relaxed"
          >
            Designing and building automation workflows that eliminate repetitive work, 
            streamline operations, and help modern businesses scale using AI.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-purple text-brand-dark font-bold text-sm uppercase tracking-wider rounded-sm hover:translate-y-[-2px] transition-all transform active:scale-95"
            >
              Let's Work Together
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-brand-border text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-brand-surface transition-all"
            >
              Explore Systems
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-12 lg:col-span-4 flex flex-col gap-6"
        >
          <div className="p-8 bg-brand-surface border border-brand-border rounded-lg">
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-full border border-brand-purple flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-brand-purple rounded-full animate-pulse"></div>
              </div>
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-tighter">SYSTEM STATUS: ACTIVE</span>
            </div>
            <div className="text-6xl font-bold text-white mb-2">40%</div>
            <div className="text-[11px] text-brand-muted uppercase tracking-widest font-semibold">Reduction in Manual Tasks</div>
            <div className="mt-8 h-[1px] bg-brand-border w-full"></div>
            <div className="mt-6 grid grid-cols-1 gap-3 text-[10px] text-white/40 font-mono">
              <div className="flex justify-between">
                <span>{">"} GPT-4_INTEGRATION</span>
                <span className="text-brand-purple">LIVE</span>
              </div>
              <div className="flex justify-between">
                <span>{">"} ZAPIER_WORKFLOW</span>
                <span className="text-brand-purple">SYNC</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-brand-surface border border-brand-border rounded-lg">
            <div className="text-[11px] text-brand-purple font-bold uppercase mb-6 tracking-widest">Core Stack</div>
            <div className="flex flex-wrap gap-2">
              {["Make.com", "n8n", "Airtable", "GoHighLevel", "OpenAI"].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-brand-dark text-[10px] rounded text-white border border-brand-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-12 flex items-center gap-4"
      >
        <div className="text-[10px] tracking-[0.3em] text-brand-muted uppercase font-bold">Scroll to explore</div>
        <div className="w-24 h-[1px] bg-brand-border" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden backdrop-blur-3xl">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold text-brand-purple tracking-[0.4em] uppercase mb-6">About Me</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-10 tracking-tighter">
              Strategist. <br/>
              <span className="text-white/40">Digital Architect.</span>
            </h3>
            <p className="text-xl text-brand-muted mb-8 leading-relaxed max-w-xl">
              I’m Piolo Pagana, a Digital Automation Specialist focused on helping businesses simplify operations 
              using AI-powered systems and workflow automation.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-brand-border">
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-widest mb-2 font-bold">Efficiency Gain</p>
                <p className="text-5xl font-display font-bold text-white mb-1">40%+</p>
              </div>
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-widest mb-2 font-bold">Task Reduction</p>
                <p className="text-5xl font-display font-bold text-white mb-1">30%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-brand-surface border border-brand-border p-12 flex items-center justify-center">
               <div className="w-full h-full border border-brand-purple/20 relative flex items-center justify-center">
                  <Workflow className="w-24 h-24 text-brand-purple/10" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-purple" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-purple" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills, icon: Icon, delay }: { title: string, skills: string[], icon: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-brand-surface border border-brand-border p-10 rounded-sm group hover:border-brand-purple transition-all"
  >
    <div className="w-12 h-12 rounded-sm border border-brand-border flex items-center justify-center mb-10 text-brand-purple group-hover:bg-brand-purple group-hover:text-brand-dark transition-all">
      <Icon size={24} />
    </div>
    <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">{title}</h4>
    <ul className="space-y-4">
      {skills.map((skill) => (
        <li key={skill} className="flex items-center gap-3 text-brand-muted group-hover:text-white transition-colors">
          <div className="w-1 h-1 rounded-full bg-brand-purple" />
          <span className="text-[11px] uppercase tracking-widest font-medium">{skill}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Automation",
      icon: Workflow,
      skills: ["Zapier", "n8n", "Make.com", "Airtable"]
    },
    {
      title: "Intelligence",
      icon: Bot,
      skills: ["ChatGPT", "Claude", "AI Agents", "ManyChat"]
    },
    {
      title: "Marketing",
      icon: BarChart3,
      skills: ["CRM Sync", "HubSpot", "E-mail Flows", "Lead Ops"]
    },
    {
      title: "System Design",
      icon: Code2,
      skills: ["Next.js", "TypeScript", "Tailwind", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-brand-dark border-y border-brand-border">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="mb-20">
          <h2 className="text-xs font-bold text-brand-purple tracking-[0.4em] uppercase mb-4">Toolkit</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">The System Stack.</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} {...cat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, desc, icon: Icon, tags, delay }: { title: string, desc: string, icon: any, tags: string[], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group relative h-[500px] overflow-hidden rounded-sm bg-brand-surface border border-brand-border flex flex-col justify-end p-10"
  >
    <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-dark/10 to-brand-dark/90 transition-all group-hover:scale-105" />
    
    <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-brand-purple/20 flex items-center justify-center text-brand-purple backdrop-blur-sm group-hover:border-brand-purple transition-all">
      <Icon size={20} />
    </div>

    <div className="relative z-10">
      <div className="flex gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 bg-white/5 border border-white/10 text-brand-muted">
            {tag}
          </span>
        ))}
      </div>
      <h4 className="text-3xl font-bold mb-4 tracking-tighter">{title}</h4>
      <p className="text-brand-muted text-sm leading-relaxed mb-8 max-w-xs">
        {desc}
      </p>
      <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-purple hover:text-white transition-colors">
        View System <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "AI Support",
      desc: "Multi-channel inquiry system using AI agents and workflow orchestration.",
      tags: ["AI", "n8n", "Airtable"],
      icon: Bot
    },
    {
      title: "FlowShop OS",
      desc: "High-volume fulfillment automation for premium Shopify brands.",
      tags: ["Ecommerce", "Zapier"],
      icon: Smartphone
    },
    {
      title: "LeadMagnet",
      desc: "Automated capture and multi-step follow-up for high-ticket sales.",
      tags: ["CRM", "Marketing"],
      icon: BarChart3
    },
    {
      title: "Nexus",
      desc: "Internal operating system for distributed team task management.",
      tags: ["Internal", "System"],
      icon: Cpu
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0C0C0C]">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-xs font-bold text-brand-purple tracking-[0.4em] uppercase mb-4">Works</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Case Studies.</h3>
          </div>
          <p className="max-w-xs text-sm text-brand-muted leading-relaxed font-medium uppercase tracking-wide">
            Automating the core of modern business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.title} {...proj} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="py-24 max-w-[1400px] mx-auto px-12">
       <div className="bg-brand-surface p-12 md:p-20 border border-brand-border rounded-sm relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8">
            <Globe className="text-brand-purple/5 w-64 h-64" />
         </div>
         <div className="relative z-10 max-w-4xl">
           <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[1px] bg-brand-purple" />
              <span className="text-xs font-bold text-brand-purple tracking-[0.4em] uppercase">Founder Experience</span>
           </div>
           <h3 className="text-4xl md:text-5xl font-display font-bold mb-10 tracking-tighter">Founder & CEO — Porpi Online Shop</h3>
           <div className="grid md:grid-cols-12 gap-12">
             <div className="md:col-span-7">
               <ul className="space-y-6">
                 {[
                   "Built AI-powered communication systems",
                   "Automated Shopify workflows using Zapier",
                   "Created CRM integrations for lead management",
                   "Designed automated appointment booking"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="mt-2 w-1.5 h-1.5 bg-brand-purple" />
                     <span className="text-lg text-brand-muted leading-tight">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="md:col-span-5 bg-brand-dark rounded-sm p-10 border border-brand-border">
                <p className="text-white text-lg font-medium mb-8 leading-relaxed italic opacity-80">"Systems and efficiency are the only true paths to scalable growth as a founder."</p>
                <div className="flex items-center gap-5">
                   <div className="w-12 h-12 rounded-sm border border-brand-purple flex items-center justify-center font-bold text-brand-purple">PP</div>
                   <div>
                     <p className="text-sm font-bold uppercase tracking-widest">Piolo Pagana</p>
                     <p className="text-[10px] text-brand-purple uppercase tracking-[0.2em] font-bold">Automation Architect</p>
                   </div>
                </div>
             </div>
           </div>
         </div>
       </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-brand-dark border-t border-brand-border">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] sm:text-[64px] md:text-[84px] font-display font-extrabold mb-12 tracking-tighter text-white"
          >
            LET'S BUILD <br/> 
            <span className="text-brand-purple">SMARTER</span> SYSTEMS.
          </motion.h3>
          
          <div className="flex flex-col items-center gap-10">
            <p className="max-w-md mx-auto text-brand-muted text-base uppercase tracking-widest font-bold">
              Open for strategic collaborations and automation projects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:ppiolopaolo@gmail.com" 
                className="px-10 py-5 bg-brand-purple text-brand-dark font-black uppercase tracking-widest text-[11px] rounded-sm hover:bg-white transition-all transform active:scale-95 shadow-[0_0_20px_rgba(194,164,255,0.2)]"
              >
                Direct Inquiry
              </a>
              <a 
                href="#" 
                className="px-10 py-5 border border-brand-border text-white font-black uppercase tracking-widest text-[11px] rounded-sm hover:bg-brand-surface transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-brand-border bg-[#0a090a]">
    <div className="max-w-[1400px] mx-auto px-12 flex flex-col md:flex-row justify-between items-start gap-16">
      <div className="flex gap-20">
        <div>
          <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-4 font-bold">Experience</div>
          <div className="text-sm text-white font-bold uppercase tracking-tight">Founder @ Porpi Shop</div>
        </div>
        <div>
          <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-4 font-bold">Location</div>
          <div className="text-sm text-white font-bold uppercase tracking-tight">Remote / Global</div>
        </div>
        <div>
          <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-4 font-bold">Availability</div>
          <div className="text-sm text-brand-purple font-bold uppercase tracking-tight">Q3 2024</div>
        </div>
      </div>
      
      <div className="flex items-center gap-6 self-end md:self-center">
        <div className="w-24 h-[1px] bg-brand-border hidden lg:block"></div>
        <div className="text-[10px] text-white/20 font-mono tracking-tighter uppercase font-bold">STAY_EFFICIENT_PIOLO_PAGANA_2024</div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative selection:bg-brand-purple selection:text-brand-dark overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-purple z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
