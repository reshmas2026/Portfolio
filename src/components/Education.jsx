import React from "react";

function Education() {
  return (
    <div id="education" className="min-h-screen flex justify-center items-center p-12 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">

      <div className="w-full max-w-4xl">

        {/* Title */}
        <h2 className="text-6xl font-extrabold text-center text-blue-500 mb-16">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-400 ml-10 space-y-16">

          {/* Item 1 */}
          <div className="ml-10 relative">
            <div className="absolute -left-6 top-3 w-6 h-6 bg-blue-400 rounded-full shadow-lg"></div>

            <div className="bg-gradient-to-r from-blue-500 to-sky-400 text-white p-10 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-3xl font-bold">
                Diploma in Computer Engineering
              </h3>
              <p className="text-white/90 mt-3 text-lg">
                Currently Pursuing
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="ml-10 relative">
            <div className="absolute -left-6 top-3 w-6 h-6 bg-sky-400 rounded-full shadow-lg"></div>

            <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white p-10 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-3xl font-bold">
                ITI - EMECH
              </h3>
              <p className="text-white/90 mt-3 text-lg">
                Completed
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Education;