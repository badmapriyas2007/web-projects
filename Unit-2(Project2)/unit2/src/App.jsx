import React from "react";
import "./App.css";

import TravellingImage from "./assets/Travelling.png";
import musicImage from "./assets/music.jpg";
import DancingImage from "./assets/Dance.avif";

function App() {
  const hobbies = [
    {
      image: TravellingImage,
      title: "Travelling",
      description:
        "I love travelling and exploring new places. It helps me discover different cultures, meet new people, and create beautiful memories.",
        tag:"Exploring",
      level: "Intermediate",
    },
    {
      image: musicImage,
      title: "Music",
      description:
        "Listening to music helps me relax and enjoy my free time.",
      tag: "Entertainment",
      level: "Advanced",
    },
    {
      image: DancingImage,
      title: "Dancing",
      description:
        "I love dancing because it allows me to express my emotions and creativity. It makes me feel happy, energetic, and confident while helping me stay active and refreshed.",
      tag: "Enjoying",
      level: "Beginner",
    },
  ];

  return (
    <div className="app">
      <h1 className="main-title">My Hobbies</h1>

      <p className="main-description">
        Things I love doing in my free time
      </p>

      <div className="hobby-container">
        {hobbies.map((hobby, index) => (
          <div className="hobby-card" key={index}>

            <img
              src={hobby.image}
              alt={hobby.title}
              className="hobby-image"
            />

            <h2 className="hobby-title">
              {hobby.title}
            </h2>

            <p className="hobby-description">
              {hobby.description}
            </p>

            <span className="hobby-tag">
              {hobby.tag}
            </span>

            <div className="hobby-footer">
              <span className="hobby-level">
                {hobby.level}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;