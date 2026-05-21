import React from "react";

function About() {
  return (
    <div id="about" className="min-h-screen flex justify-center items-center p-12 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">

      <div className="max-w-3xl w-full bg-gradient-to-br from-blue-500 to-sky-400 text-white p-16 rounded-3xl shadow-2xl">

        <h2 className="text-5xl font-extrabold mb-8 text-center">
          About Me
        </h2>

        <p className="text-xl text-white/90 text-center leading-loose">
          I am <span className="font-semibold">Reshma</span> from Thiruvananthapuram.  
          Currently pursuing <b>Diploma in Computer Engineering</b>.  
          I am passionate about modern web development, UI design, and continuously improving my coding skills.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="px-8 py-3 bg-white/20 border border-white/30 rounded-full text-sm shadow-lg">
            Web Developer • UI Designer • Tech Enthusiast
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;