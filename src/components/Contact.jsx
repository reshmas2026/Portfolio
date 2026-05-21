import React from "react";

function Contact() {
  return (
    <div id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 px-6 py-12">
      
      <div className="w-full max-w-lg bg-white/30 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-10 text-slate-800">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
            Contact
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="space-y-6">
          
          <div className="flex items-center gap-4 bg-gradient-to-r from-blue-400 to-sky-400 p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-white">
            <div className="text-3xl">📧</div>
            <div>
              <p className="text-sm opacity-80">Email</p>
              <p className="font-semibold text-lg">
                reshmasunitha04@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-r from-sky-400 to-blue-500 p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-white">
            <div className="text-3xl">📞</div>
            <div>
              <p className="text-sm opacity-80">Phone</p>
              <p className="font-semibold text-lg">
                +91 657329054
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-r from-blue-300 to-sky-300 p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-white">
            <div className="text-3xl">📍</div>
            <div>
              <p className="text-sm opacity-80">Location</p>
              <p className="font-semibold text-lg">
                Kerala, India
              </p>
            </div>
          </div>

        </div>

        {/* Footer Button */}
        <div className="text-center mt-10">
          <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
            Get in Touch
          </button>
        </div>

      </div>
    </div>
  );
}

export default Contact;