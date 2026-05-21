import React from "react";

function Skills() {
  return (
    <div id="skills" className="min-h-screen flex justify-center items-center p-8 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">

      <div className="w-full max-w-2xl bg-gradient-to-br from-blue-500 to-sky-400 p-10 rounded-3xl shadow-xl text-center text-white">

        <h2 className="text-4xl font-extrabold mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          <span className="px-5 py-2 bg-white/20 border border-white/30 rounded-full shadow">
            C
          </span>

          <span className="px-5 py-2 bg-white/20 border border-white/30 rounded-full shadow">
            Java
          </span>

          <span className="px-5 py-2 bg-white/20 border border-white/30 rounded-full shadow">
            HTML
          </span>

          <span className="px-5 py-2 bg-white/20 border border-white/30 rounded-full shadow">
            CSS
          </span>

          <span className="px-5 py-2 bg-white/20 border border-white/30 rounded-full shadow">
            JavaScript
          </span>

          <span className="px-5 py-2 bg-white/20 border border-white/30 rounded-full shadow">
            React
          </span>

        </div>

      </div>

    </div>
  );
}

export default Skills;