import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h2 style={{color: 'yellow'}}>I'M a self taught developer skilled in Javascript, React and backend 
        technologies like Express and Mysql. I enjoy building apps that make life easier.</h2>
        <ul style={{color: 'yellow', fontSize: '18px'}}>
          <li>Frontend: React, Javascript, HTML, CSS</li>
          <li>Backend: Node.js, Express.js, Mysql</li>
          <li>Tools: Git, APIs, Authentication</li>
        </ul>
    </div>
  );
}

export default About;
