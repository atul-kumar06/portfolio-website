import React, { useEffect, useState } from "react";
import ToggleButton from "../features/ToggleButton";
import { href } from "react-router";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
];

const Nav = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky w-full py-5 transition-all duration-300 flex items-center justify-evenly px-8 bg-white/30 backdrop-blur-md h-20">
      <a
        href="#hero"
        className="text-2xl font-bold text-primary flex items-center"
      >
        <span>
          <span className="text-glow text-foreground">Atul</span> Kumar
        </span>
      </a>
      <div className="hidden md:flex items-center space-x-5 font-bold text-glow">
        {navItems.map((value, idx) => (
          <a key={idx} href={value.href}>
            {value.name}
          </a>
        ))}
      </div>
      <ToggleButton />
      {/* Nav Bar for mobile */}
      <button
        onClick={() => {
          setisMenuOpen((prev) => !prev);
        }}
        className="md:hidden p-2 text-foreground z-50"
        aria-label={isMenuOpen ? "close" : "open"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40  flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setisMenuOpen(false)}
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
