import { Moon, Sun, Monitor, Github, Linkedin, Mail, Phone, MapPin, Code, Palette, Database, Globe, Zap, Users } from 'lucide-react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { useTheme } from './contexts/ThemeContext';
import { TypewriterEffect } from './components/TypewriterEffect';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { ContactCard } from './components/ContactCard';
import { FloatingElements } from './components/FloatingElements';


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

const skills = [
  { name: "React", level: 90, icon: <Globe className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
  { name: "Node.js", level: 85, icon: <Database className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
  { name: "TypeScript", level: 80, icon: <Code className="w-6 h-6" />, color: "from-blue-600 to-indigo-600" },
  { name: "MongoDB", level: 75, icon: <Database className="w-6 h-6" />, color: "from-green-600 to-teal-600" },
  { name: "Socket.io", level: 85, icon: <Zap className="w-6 h-6" />, color: "from-yellow-500 to-orange-500" },
  { name: "Express", level: 80, icon: <Globe className="w-6 h-6" />, color: "from-gray-600 to-gray-800" },
  { name: "Python", level: 75, icon: <Code className="w-6 h-6" />, color: "from-yellow-600 to-red-600" },
  { name: "PostgreSQL", level: 70, icon: <Database className="w-6 h-6" />, color: "from-blue-700 to-purple-700" }
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                isVisible={skillsInView}
              />
            ))}
          </div>
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
              <p className="text-slate-600 dark:text-slate-400 mb-4">Also find me on:</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://leetcode.com/u/bhargavdash/"
                  className="bg-blue-100 hover:bg-blue-200 dark:bg-white/5 dark:hover:bg-white/15 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-blue-200 dark:border-white/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="w-5 h-5 text-blue-700 dark:text-white" />
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