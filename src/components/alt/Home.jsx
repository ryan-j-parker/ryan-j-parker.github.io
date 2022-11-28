import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="headshot-frame">
          <img src="/ryanparker34.png" className="headshot" />
        </div>
        <div className="statement">
          <p className="p1">Hi.</p>
          <p className="p2">my name is</p>
          <p className="p3">Ryan Parker</p>
        </div>
        <div className="make">
          <p className="p4">
            I&apos;m a creative software developer currently based in Vancouver, WA
          </p>
          <p className="p5">
            I build intuitive, responsive, and accessible apps with React and Express
          </p>
        </div>
      </div>
      <div className="apps"></div>
      <div className="tech-stack"></div>
    </div>
  );
}
