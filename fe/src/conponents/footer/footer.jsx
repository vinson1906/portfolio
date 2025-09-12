'use client'
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              Joseph Vinson Samuel M
            </h3>
            <p className="text-gray-400">
              Full-Stack Software Developer
            </p>
          </div>

          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>

         
          <div className="mb-8">
            <p className="text-lg text-gray-300 italic max-w-2xl mx-auto">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <p className="text-purple-400 mt-2">- Cory House</p>
          </div>

          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
              Made with 
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              and
              <Code size={16} className="text-purple-400" />
              by Joseph Vinson Samuel M
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-6 group inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Back to Top
            <div className="transform group-hover:-translate-y-1 transition-transform">
              ↑
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;