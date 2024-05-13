import React from 'react';

function Hero() {
  return (
    <div
      className="text-white relative"
      style={{
        height: '100vh', // Altezza della hero section
        backgroundImage: 'url("https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=3184&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto h-full flex items-center">
        <div className="pl-6 pr-20 py-12 rounded-lg" style={{ backdropFilter: 'blur(5px)' }}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to Glide
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            Join us to transform your lifestyle and achieve your fitness goals!
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
