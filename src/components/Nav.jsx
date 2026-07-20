import React, { useEffect, useState } from "react";
import ToggleButton from "../features/ToggleButton";
import { href } from "react-router";
import { Menu, TurkishLira, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
];

const Nav = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(true);

  const NavItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Projects", href: "#project" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <nav className="flex items-center justify-evenly">
      <a href="#hero" className="text-2xl font-bold text-primary text-glow">
        <span className="text-foreground">Atul</span> Portfolio
      </a>
      <div className="hidden md:flex space-x-6">
        {NavItems.map((value, idx) => (
          <a href={value.href} key={idx}>
            {value.name}
          </a>
        ))}
      </div>
      {/* mobile_navigation */}
      <button
        onClick={() => setisMenuOpen(!isMenuOpen)}
        className="md:hidden  cursor-pointer h-18 w-18 relative flex items-center justify-center"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        <Menu
          className={`absolute transition-all duration-300 text-glow ease-in-out transform ${isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75 pointer-events-none"}`}
        />
        <X
          className={`absolute transition-all duration-300 text-glow ease-in-out transform ${isMenuOpen ? "opacity-0 rotate-90 scale-75 pointer-events-none" : "opacity-100 rotate-0 scale-100"}`}
        />
      </button>

      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          !isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-8">
          {NavItems.map((value, idx) => (
            <a
              href={value.href}
              key={idx}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setisMenuOpen(true)}
            >
              {value.name}
            </a>
          ))}
        </div>
      </div>
      <ToggleButton />
    </nav>
  );
};

export default Nav;
