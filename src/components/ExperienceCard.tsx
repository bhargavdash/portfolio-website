import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
  icon?: React.ReactNode;
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isVisible: boolean;
}

export function ExperienceCard({ experience, index, isVisible }: ExperienceCardProps) {
  return (
    <div
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="flex items-center mb-4 space-x-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
            {experience.icon || <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white">{experience.company}</h3>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm mt-1">
              <span className="font-medium">{experience.role}</span>
              <span>•</span>
              <MapPin className="w-4 h-4 inline-block mr-1 text-blue-500" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-xs mt-1">
              <Calendar className="w-4 h-4 inline-block mr-1" />
              <span>{experience.duration}</span>
            </div>
          </div>
        </div>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 text-sm">
          {experience.highlights.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 