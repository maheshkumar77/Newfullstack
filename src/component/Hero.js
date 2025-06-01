import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white-10 opacity-10"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-white/20 rounded-full backdrop-blur-sm">
              New Feature Launch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Amazing Digital Experiences
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-lg">
              Our platform helps you create stunning websites and applications with ease. Get started today and transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right content - illustration */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute top-20 -right-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
              
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-1 shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Hero illustration" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;