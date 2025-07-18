import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
  isVisible: boolean;
}

export function SkillCard({ skill, index, isVisible }: SkillCardProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div 
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400">
                {skill.icon}
              </div>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              {skill.name}
            </h3>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedLevel}%` }}
          />
        </div>
      </div>
    </div>
  );
}