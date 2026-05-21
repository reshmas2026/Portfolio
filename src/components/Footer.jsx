import React from "react";

function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-md border-t border-blue-100 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* About */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            About Me
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            I’m Reshma, a Computer Engineering student passionate about web
            development, UI design, and building modern responsive applications.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 text-slate-700 text-lg">

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition flex items-center gap-2"
          >
            🔗 LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition flex items-center gap-2"
          >
            💻 GitHub
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition flex items-center gap-2"
          >
            📸 Instagram
          </a>

          {/* Email */}
          <a
            href="mailto:reshma@example.com"
            className="hover:text-red-500 transition flex items-center gap-2"
          >
            ✉️ Email
          </a>

          {/* Phone */}
          <a
            href="tel:+910000000000"
            className="hover:text-green-600 transition flex items-center gap-2"
          >
            📞 Phone
          </a>

        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-slate-500 mt-8">
          © {new Date().getFullYear()} Reshma. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;