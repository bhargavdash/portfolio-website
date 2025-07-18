import React from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  index: number;
  isVisible: boolean;
}

export function ContactCard({ icon, title, value, href, index, isVisible }: ContactCardProps) {
  return (
    <div 
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <a 
        href={href}
        target={href.startsWith('mailto:') || href.startsWith('tel:') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        className="block bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-100 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-white/20"
      >
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 dark:bg-white/20 p-3 rounded-lg border border-blue-200 dark:border-white/20">
            {icon}
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">{title}</h3>
            <p className="text-blue-700 dark:text-blue-100 text-sm">{value}</p>
          </div>
        </div>
      </a>
    </div>
  );
}