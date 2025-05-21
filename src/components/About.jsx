import React from "react";

function About() {
  return (
    <div id="about" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm Sachinkumar Nishad.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           I am currently a student 😀
As a Computer Science student, I love learning new things and improve myself cause
'You learn something new every day'
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>        {/* Education Background */}
        <div id="education" className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Education
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600">BSC CS</h3>
                <p className="text-lg text-gray-700">Smt. Sushiladevi Deshmukh College of ASC</p>
              </div>
              <p className="text-lg text-gray-600">2025</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600">HSC Board (Class XII)</h3>
                <p className="text-lg text-gray-700">Smt. Sushiladevi Deshmukh Vidyalaya & Jr College</p>
              </div>
              <p className="text-lg text-gray-600">2022 (60%)</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600">SSC Board (Class X)</h3>
                <p className="text-lg text-gray-700">Mahatma Gandhi Hindi High School</p>
              </div>
              <p className="text-lg text-gray-600">2020 (91.60%)</p>
            </div>
          </div>
        </div>        {/* Projects Background */}
        <div id="projects" className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Projects
          </h2>
          <div className="space-y-8 text-left max-w-4xl mx-auto">
            <div className="border-l-4 border-indigo-500 pl-6 py-2">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Home Automation System (IoT)</h3>
              <p className="text-md text-gray-500 mb-3">Technologies: Raspberry Pi, Python, Flask, HTML, CSS</p>
              <p className="text-lg text-gray-600">
                Developed a Raspberry Pi home automation system with Flask web server, enabling remote control of devices via a 
                user-friendly interface. Implemented Python backend for hardware interfacing and device management, utilizing HTML/CSS for the frontend 
                design.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">Learning App for Kids</h3>
              <p className="text-md text-gray-500 mb-3">Technologies: Flutter, Java, JavaScript, Firebase</p>
              <p className="text-lg text-gray-600">
                Developed a learning app for kids using Flutter (Dart) with an engaging user interface and interactive learning 
                content. Implemented a Java backend for the admin panel and integrated Firebase as a real-time database solution for both the app and admin panel.
              </p>
            </div>
            
            <div className="border-l-4 border-teal-500 pl-6 py-2">
              <h3 className="text-2xl font-semibold text-teal-600 mb-2">Portfolio Website</h3>
              <p className="text-md text-gray-500 mb-3">Technologies: WordPress, Astra theme, Elementor</p>
              <p className="text-lg text-gray-600">
                Developed a personal portfolio website using WordPress, leveraging the Astra theme for a professional design.
                Utilized the Elementor plugin to create a responsive and interactive interface for showcasing projects
                and skills.
              </p>
            </div>
          </div>
        </div>        {/* Skills Grid */}
        <div id="skills" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              Programming Languages
            </h3>
            <p className="text-lg text-gray-600">
              Experienced with JAVA, SQL, and various frontend technologies for building modern applications
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              Technologies & OS
            </h3>
            <p className="text-lg text-gray-600">
              Working with IoT (Raspberry Pi), WINDOWS, LINUX, and various development environments
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              Tools & Libraries
            </h3>
            <p className="text-lg text-gray-600">
              Proficient with Git/Github, Wordpress, and various development tools for efficient project management
            </p>
          </div>
        </div>

        {/* Achievements & Roles */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Achievements & Volunteer Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Academic Achievements
              </h3>
              <p className="text-lg text-gray-600">
                First Position in Class, Second Semester BSc CS course and Second Position in Tech Expo, College IT Fest
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-600 font-semibold">
                NSS Volunteer
              </h3>
              <p className="text-lg text-gray-600">
                Volunteered from 2022-2024, completed a residential camp, led community service initiatives, and received the Best Teamwork Award
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                IT-Club Member
              </h3>
              <p className="text-lg text-gray-600">
                Active member since February 2024, organized I-FEST with the IT team and collaborated on various technical events
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Community Engagement
              </h3>
              <p className="text-lg text-gray-600">
                Spearheaded blood donation camps, participated in cybersecurity workshops, and explored tech's role in sustainability
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Looking for opportunities to collaborate on exciting projects and continue learning new technologies. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1SV19s5B8bdZKBRWmwWJifLD-yRx9_xRj/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            >
              View Resume
            </a>
          </div>
          
          {/* Social Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a 
              href="https://github.com/SachinX01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 transition-colors duration-200"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="http://linkedin.com/in/sachinkumar-nishad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 transition-colors duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:sachinkumarnishad321@gmail.com" 
              className="text-white hover:text-teal-200 transition-colors duration-200"
            >
              <span className="sr-only">Email</span>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
