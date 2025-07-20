import { Moon, Sun, Monitor, Github, Linkedin, Mail, Phone, MapPin, Code, Palette, Database, Globe, Zap, Users, Briefcase, X as XIcon } from 'lucide-react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { useTheme } from './contexts/ThemeContext';
import { TypewriterEffect } from './components/TypewriterEffect';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { ContactCard } from './components/ContactCard';
import { FloatingElements } from './components/FloatingElements';
import { ExperienceCard } from './components/ExperienceCard';
import React, { useState } from 'react';


const projects = [
  {
    id: 1,
    title: "DrawSync",
    description: "Real-time collaborative drawing application with live synchronization, multiple brush tools, and room-based collaboration features.",
    technologies: ["React", "Node.js", "ws-library", "TypeScript", "Canvas API", "prisma", "postgreSQL", "redis"],
    githubUrl: "https://github.com/bhargavdash/DrawSync",
    liveUrl: "https://drawsync-dusky.vercel.app/",
    gradient: "from-blue-500 to-purple-600",
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: 2,
    title: "StoryLens",
    description: "AI-powered application that generates creative stories from uploaded images using advanced machine learning algorithms.",
    technologies: ["Python", "Machine Learning", "React", "Gemini API", "FastAPI", "Pytorch"],
    githubUrl: "https://github.com/bhargavdash/story-from-images",
    liveUrl: "https://frontend-tau-gray-31.vercel.app/",
    gradient: "from-green-500 to-teal-600",
    icon: <Code className="w-6 h-6" />
  }
];

// Experience data
const experiences = [
  {
    company: 'Accenture',
    role: 'Associate Software Engineer Intern',
    location: 'Hybrid',
    duration: 'Feb 2025 - June 2025',
    highlights: [
      'Worked in the MOSOT team of McDonald’s project at Accenture, contributing to UI development for the MOSOT product',
      'Collaborated with the UI team to identify and resolve critical bugs in React.js-based user interface',
      'Developed proficiency in Python data analysis using Pandas and Matplotlib',
      'Analyzed raw transactional sales data into actionable business insights for strategic decision-making',
      'Participated in cross-functional collaboration between UI development and data engineering teams'
    ],
    icon: <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  },
  {
    company: 'Krescutis Technology Solutions (P) Ltd.',
    role: 'Software Engineer Intern',
    location: 'Remote',
    duration: 'April 2024 - June 2024',
    highlights: [
      'Worked on Spenowr, a social commerce platform empowering artists and creative entities',
      'Contributed to administrative panel development with dashboard reporting and email campaign management',
      'Participated in code reviews, debugging, and performance optimization'
    ],
    icon: <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
  }
];

// Categorized skills data
const categorizedSkills = [
  {
    category: 'Programming Languages',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'C', level: 70, icon: <Code className="w-6 h-6" /> },
      { name: 'C++', level: 80, icon: <Code className="w-6 h-6" /> },
      { name: 'JavaScript', level: 90, icon: <Code className="w-6 h-6" /> },
      { name: 'TypeScript', level: 85, icon: <Code className="w-6 h-6" /> },
      { name: 'Python', level: 80, icon: <Code className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Frameworks & Libraries',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'React.js', level: 90, icon: <Globe className="w-6 h-6" /> },
      { name: 'Next.js', level: 80, icon: <Globe className="w-6 h-6" /> },
      { name: 'Angular', level: 60, icon: <Globe className="w-6 h-6" /> },
      { name: 'Node.js', level: 85, icon: <Database className="w-6 h-6" /> },
      { name: 'Express.js', level: 80, icon: <Globe className="w-6 h-6" /> },
      { name: 'FastAPI', level: 65, icon: <Zap className="w-6 h-6" /> },
      { name: 'PyTorch', level: 60, icon: <Zap className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Databases',
    color: 'from-blue-700 to-purple-700',
    skills: [
      { name: 'MySQL', level: 75, icon: <Database className="w-6 h-6" /> },
      { name: 'PostgreSQL', level: 70, icon: <Database className="w-6 h-6" /> },
      { name: 'MongoDB', level: 75, icon: <Database className="w-6 h-6" /> },
      { name: 'Prisma ORM', level: 65, icon: <Database className="w-6 h-6" /> },
      { name: 'Redis', level: 60, icon: <Database className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-indigo-500 to-blue-700',
    skills: [
      { name: 'AWS (Lambda, API Gateway, Polly, GCP)', level: 60, icon: <Globe className="w-6 h-6" /> },
      { name: 'Vercel', level: 70, icon: <Globe className="w-6 h-6" /> },
      { name: 'Docker', level: 60, icon: <Globe className="w-6 h-6" /> },
      { name: 'Git', level: 85, icon: <Code className="w-6 h-6" /> },
    ]
  },
  {
    category: 'AI / ML',
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'PyTorch', level: 60, icon: <Zap className="w-6 h-6" /> },
      { name: 'Gemini API', level: 55, icon: <Zap className="w-6 h-6" /> },
      { name: 'Cursor AI', level: 50, icon: <Zap className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Other Tools',
    color: 'from-gray-600 to-gray-800',
    skills: [
      { name: 'WebSocket', level: 80, icon: <Zap className="w-6 h-6" /> },
      { name: 'JWT', level: 70, icon: <Code className="w-6 h-6" /> },
      { name: 'NextAuth.js', level: 60, icon: <Code className="w-6 h-6" /> },
      { name: 'BcryptJS', level: 60, icon: <Code className="w-6 h-6" /> },
      { name: 'Postman', level: 75, icon: <Code className="w-6 h-6" /> },
      { name: 'TurboRepo', level: 60, icon: <Code className="w-6 h-6" /> },
    ]
  }
];

function App() {

  const date = new Date();
  const currYear = date.getFullYear();
  
  const { theme, setTheme } = useTheme();

  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver();
  const { ref: aboutRef, isIntersecting: aboutInView } = useIntersectionObserver();
  const { ref: projectsRef, isIntersecting: projectsInView } = useIntersectionObserver();
  const { ref: skillsRef, isIntersecting: skillsInView } = useIntersectionObserver();
  const { ref: contactRef, isIntersecting: contactInView } = useIntersectionObserver();
  const { ref: experienceRef, isIntersecting: experienceInView } = useIntersectionObserver();

  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500">
      <FloatingElements />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-playfair text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BD
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-2 rounded-md transition-all ${theme === 'light' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-2 rounded-md transition-all ${theme === 'dark' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  <Moon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`p-2 rounded-md transition-all ${theme === 'system' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Bhargav Dash
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              <TypewriterEffect 
                texts={[
                  "Full Stack Developer",
                  "React Enthusiast",
                  "Problem Solver",
                  "Tech Explorer"
                ]}
              />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate Computer Science student crafting innovative web solutions with modern technologies. 
            Specialized in React, Node.js, and creating seamless user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Currently pursuing B.Tech in Computer Science & Engineering at Odisha University of Technology & Research with a CGPA of 9.01
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate developer with a strong foundation in computer science and a love for creating 
                  innovative web applications. My journey in tech started with curiosity and has evolved into 
                  building real-world solutions that make a difference.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-300">Bhubaneswar, Odisha</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-400 ${aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What I Do
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Frontend Development</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">React, TypeScript, Tailwind CSS</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Backend Development</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Express, MongoDB, PostgreSQL</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Real-time Applications</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Socket.io, WebRTC, Live Collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${experienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and internships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={exp.company} experience={exp} index={idx} isVisible={experienceInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorizedSkills.map((cat) => (
              <button
                key={cat.category}
                className={`w-full flex flex-col items-center justify-center p-10 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${openCategory === cat.category ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
                onClick={() => setOpenCategory(cat.category)}
                style={{ minHeight: '120px' }}
              >
                <span className={`inline-block w-2 h-8 rounded-full mb-3 bg-gradient-to-b ${cat.color}`}></span>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-playfair mb-2">{cat.category}</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Click to view skills</span>
              </button>
            ))}
          </div>

          {/* Modal/Popup for category details */}
          {openCategory && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 transition-all duration-500"
              onClick={() => setOpenCategory(null)}
              style={{ animation: 'fadeInBg 0.4s' }}
            >
              <div
                className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-10 flex flex-col items-center w-[80vw] max-w-3xl max-h-[80vh] overflow-y-auto animate-modalIn"
                style={{ minHeight: '60vh', minWidth: '60vw' }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white text-3xl font-bold focus:outline-none"
                  onClick={() => setOpenCategory(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                {categorizedSkills.filter(cat => cat.category === openCategory).map(cat => (
                  <div key={cat.category} className="w-full">
                    <div className="flex items-center mb-6">
                      <span className={`inline-block w-2 h-8 rounded-full mr-3 bg-gradient-to-b ${cat.color}`}></span>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white font-playfair">{cat.category}</h3>
                    </div>
                    <div className="space-y-6">
                      {cat.skills.map((skill, idx) => (
                        <SkillCard key={skill.name} skill={skill} index={idx} isVisible={true} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={projectsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200 dark:from-slate-900 dark:via-slate-800 dark:to-black text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              value="bhargavdash@gmail.com"
              href="mailto:bhargavdash@gmail.com"
              index={0}
              isVisible={contactInView}
            />
            <ContactCard
              icon={<Phone className="w-6 h-6" />}
              title="Phone"
              value="+91 7978782476"
              href="tel:+917978782476"
              index={1}
              isVisible={contactInView}
            />
            <ContactCard
              icon={<Linkedin className="w-6 h-6" />}
              title="LinkedIn"
              value="Connect with me"
              href="https://www.linkedin.com/in/bhargav-dash-439369259/"
              index={2}
              isVisible={contactInView}
            />
            <ContactCard
              icon={<Github className="w-6 h-6" />}
              title="GitHub"
              value="@bhargavdash"
              href="https://github.com/bhargavdash"
              index={3}
              isVisible={contactInView}
            />
          </div>
          
          <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <div className="bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block border border-gray-200 dark:border-white/10">
              <p className="text-slate-600 dark:text-slate-400 mb-4 font-medium">Also find me on:</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://leetcode.com/u/bhargavdash/"
                  className="flex flex-col items-center bg-blue-100 hover:bg-blue-200 dark:bg-white/5 dark:hover:bg-white/15 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-blue-200 dark:border-white/20 min-w-[70px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="w-6 h-6 text-blue-700 dark:text-blue-200 mb-1" />
                  <span className="text-xs text-blue-700 dark:text-blue-200 font-semibold">LeetCode</span>
                </a>
                <a 
                  href="#x-link"
                  className="flex flex-col items-center bg-blue-100 hover:bg-blue-200 dark:bg-white/5 dark:hover:bg-white/15 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-blue-200 dark:border-white/20 min-w-[70px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon className="w-6 h-6 text-blue-700 dark:text-blue-200 mb-1" />
                  <span className="text-xs text-blue-700 dark:text-blue-200 font-semibold">X</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {currYear} Bhargav Dash
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;