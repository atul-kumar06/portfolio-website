import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center container mt-52 space-y-11"
      id="hero"
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        <span className="opacity-0 animate-fade-in">Hii I'm</span>{" "}
        <span className="text-primary opacity-0 animate-fade-in-delay-1">
          Atul
        </span>
        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
          👋
        </span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-center">
        Turning complex ideas into high-performance web applications. As a
        full-stack developer
      </p>
      <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-center">
        I build engaging, user-centric interfaces from the ground up.
      </p>
      <button className="pt-4 opacity-0 animate-fade-in-delay-4">
        <a href="#projects" className="cosmic-button">
          View My Work
        </a>
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
