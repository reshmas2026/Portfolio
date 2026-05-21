import React from "react";

function Home() {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 p-6">

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="space-y-6">

          <h1 className="text-6xl font-extrabold text-slate-800">
            Hi, I’m <span className="text-blue-500">Reshma</span>
          </h1>

          <h2 className="text-2xl font-semibold text-sky-600">
            Computer Engineering Student
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Passionate about coding, web development & building clean UI.
          </p>

          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition shadow-md">
            Explore My Work
          </button>

        </div>

        {/* Right Side (Image Card) */}
        <div className="bg-white/40 backdrop-blur-md border border-blue-100 p-10 rounded-3xl text-center shadow-xl">

          <div className="flex justify-center mb-6">
            <img
              src="/images/women.png"
              alt="Reshma - Computer Engineering Student"
              className="w-48 h-48 object-cover rounded-2xl border-4 border-blue-400 shadow-md"
            />
          </div>

          

        </div>

      </div>
    </div>
  );
}

export default Home;