import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Sachinkumar Nishad</h3>
            <p className="text-white/80">
              Computer Science Student | Passionate about learning and growth
            </p>
          </div>          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div><div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect</h3>            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/SachinX01" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="http://linkedin.com/in/sachinkumar-nishad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>              <a
                href="tel:+917738205133"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">Phone</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a
                href="mailto:sachinkumarnishad321@gmail.com"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80">© 2025 Sachinkumar Nishad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
