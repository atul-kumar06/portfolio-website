import React, { useState } from "react";
import ToggleButton from "../features/ToggleButton";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Projects", href: "#project" },
  { name: "Skills", href: "#skills" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-6 relative">
      {/* Brand Logo */}
      <a href="#hero" className="text-2xl font-bold text-primary text-glow">
        <span className="text-foreground">Atul</span> Portfolio
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item, idx) => (
          <a
            href={item.href}
            key={idx}
            className=" hover:text-primary transition-colors duration-300 nav-underline"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <ToggleButton />

        {/* Mobile Navigation Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden cursor-pointer h-10 w-10 relative flex items-center justify-center z-20"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <Menu
            className={`absolute transition-all duration-300 ease-in-out transform ${
              isMenuOpen
                ? "opacity-0 -rotate-90 scale-75 pointer-events-none"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            className={`absolute transition-all duration-300 ease-in-out transform ${
              isMenuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-75 pointer-events-none"
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center z-10 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-8 text-center text-xl">
          {navItems.map((item, idx) => (
            <a
              href={item.href}
              key={idx}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 nav-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
