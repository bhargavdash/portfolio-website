import React from 'react';

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-teal-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-indigo-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 transform rotate-45 animate-float"></div>
      <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-500 transform rotate-12 animate-float" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
}