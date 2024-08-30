import React from "react";
import theme_pattern from ".././assets/theme_pattern.svg";
import salman from "../assets/salman.png";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={salman} alt="" />
        </div>
        <div className="about-right">
          <p>
            I'm a dedicated front-end web developer skilled in HTML, CSS,
            JavaScript, and React. I specialize in building responsive,
            user-friendly websites and web applications. With a focus on clean
            code and modern design, I strive to create visually appealing and
            efficient digital experiences.
          </p>

          <div className="about-skills">
            <ul>
              <li>
                <p>HTML</p>
                <hr style={{ width: "58%" }} />
              </li>
              <li>
                <p>CSS</p>
                <hr style={{ width: "42%" }} />
              </li>
              <li>
                <p>JavaScript</p>
                <hr style={{ width: "98%" }} />
              </li>
              <li>
                <p>React</p>
                <hr style={{ width: "57%" }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects completed</p>
        </div>
      </div>
    </div>
  );
}

export default About;
