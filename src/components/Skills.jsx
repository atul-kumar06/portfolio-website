import { useState } from "react";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc"; // Using VscCode for guaranteed stability

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: SiHtml5 },
  { name: "JavaScript", category: "frontend", icon: SiJavascript },
  { name: "React", category: "frontend", icon: SiReact },
  { name: "TypeScript", category: "frontend", icon: SiTypescript },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },
  // { name: "Next.js", category: "frontend", icon: SiNextdotjs },

  // Backend
  { name: "Node.js", category: "backend", icon: SiNodedotjs },
  { name: "Express", category: "backend", icon: SiExpress },
  { name: "MongoDB", category: "backend", icon: SiMongodb },
  // { name: "PostgreSQL", category: "backend", icon: SiPostgresql },
  // { name: "GraphQL", category: "backend", icon: SiGraphql },

  // Tools
  { name: "Git/GitHub", category: "tools", icon: SiGit },
  // { name: "Docker", category: "tools", icon: SiDocker },
  // { name: "Figma", category: "tools", icon: SiFigma },
  { name: "VS Code", category: "tools", icon: VscCode },
];

const categories = ["all", "frontend", "backend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section className="py-24 px-4 relative" id="skills">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm font-medium ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`}
              onClick={() => setActiveCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {filteredSkills.map((skills) => {
            const Icon = skills.icon;
            return (
              <div
                key={skills.name}
                className="bg-card p-6 rounded-xl border border-border/50 shadow-xs flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-primary/50 hover:scale-105"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-base text-center">
                  {skills.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
