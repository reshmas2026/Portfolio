import React from 'react';

function Project() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 text-slate-800 py-16 px-6 flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-bold mb-10 tracking-wide uppercase text-blue-500">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* Admin Dashboard */}
        <div className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-xl hover:shadow-blue-100 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-300 to-sky-400"></div>
          <div className="text-3xl mb-4">🛡️</div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
            Doctor Appointment Booking System
          </h3>

          <p className="text-sm font-semibold tracking-wider text-blue-500 uppercase bg-blue-50 px-3 py-1 rounded-full inline-block">
            Admin Dashboard
          </p>
        </div>

        {/* Patient Dashboard */}
        <div className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-xl hover:shadow-blue-100 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-300 to-blue-400"></div>
          <div className="text-3xl mb-4">🧑‍⚕️</div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
            Doctor Appointment Booking System
          </h3>

          <p className="text-sm font-semibold tracking-wider text-sky-600 uppercase bg-sky-50 px-3 py-1 rounded-full inline-block">
            Patient Dashboard
          </p>
        </div>

        {/* Doctor Dashboard */}
        <div className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-xl hover:shadow-blue-100 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-200 to-sky-300"></div>
          <div className="text-3xl mb-4">👨‍⚕️</div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
            Doctor Appointment Booking System
          </h3>

          <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full inline-block">
            Doctor Dashboard
          </p>
        </div>

      </div>
    </section>
  );
}

export default Project;