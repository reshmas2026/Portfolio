import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg border-b border-blue-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-500">
          Reshma
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-slate-700">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-blue-100 px-6 py-4">
          <ul className="flex flex-col gap-4 text-slate-700 font-medium">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;