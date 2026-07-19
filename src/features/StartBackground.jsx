import React, { useEffect, useState } from "react";

const StartBackground = () => {
  const [stars, setstars] = useState([]);
  const [meteors, setmeteors] = useState([]);

  useEffect(() => {
    generateMeteors();
    generateStars();
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000,
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
      setstars(newStars);
    }
  };

  const generateMeteors = () => {
    const numberOfMeteors = 10;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setmeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((stars) => (
        <div
          key={stars.id}
          className="star animate-pulse-subtle"
          style={{
            width: stars.size + "px",
            height: stars.size + "px",
            left: stars.x + "%",
            top: stars.y + "%",
            opacity: stars.opacity,
            animationDuration: stars.animationDuration + "s",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StartBackground;
