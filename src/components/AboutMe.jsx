import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const aboutmedata = [
  {
    name: "Web Development",
    Logo: <Code className="w-6 h-6 text-primary" />,
    text: "Creating responsive websites and web applications with modern frameworks.",
  },
  {
    name: "UI/UX Design",
    Logo: <User className="w-6 h-6 text-primary" />,
    text: "Designing intuitive user interfaces and seamless user experiences.",
  },
  {
    name: "Project Management",
    Logo: <Briefcase className="w-6 h-6 text-primary" />,
    text: "Leading projects from conception to completion with agile methodologies.",
  },
];

const AboutMe = () => {
  console.log(<Code />);
  return (
    <section id="about" className="min-h-screen text-foreground px-4 py-24">
      <h3 className="text-3xl md:text-5xl font-bold py-8">
        About <span className="text-primary">Me</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2  container items-center gap-12">
        <div className="space-y-6">
          <h4 className="text-xl md:text-3xl font-bold">
            Passionate Web Developer & Tech Creator
          </h4>
          <p className="text-foreground md:text-xl tracking-wide">
            With over 2 years of experience in web development, I specialize in
            creating responsive, accessible, and performant web applications
            using modern technologies.
          </p>
          <p className="text-foreground md:text-xl tracking-wide">
            I'm passionate about creating elegant solutions to complex problems,
            and I'm constantly learning new technologies and techniques to stay
            at the forefront of the ever-evolving web landscape.
          </p>
          <div className="flex justify-evenly py-7">
            <a href="#contact" className="cosmic-button2 md:cosmic-button">
              Get in touch
            </a>
            <a href="" className="cosmic-button">
              Download CV
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {" "}
          {aboutmedata.map((item, idx) => (
            <div className="" key={idx}>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 ">
                    {item.Logo}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
