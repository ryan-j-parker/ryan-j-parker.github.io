import React from 'react';
import About from '../About/About';
import { Portfolio } from '../Portfolio/Portfolio';
import Stack from '../Stack/Stack';
import './Main.css';

export default function Main() {
  return (
    <>
      <div className="App">
        <div className="about-wrap">
          <About />
        </div>
        <div className="wrap-box">
          <div className="projects-label">
            <a href="/scene">
              <h1 className="projects" title="
              Click to see why the page takes so long to load! 😂
              ~ work in progress ~
              ">
                Projects:
              </h1>
            </a>
          </div>
          <Portfolio />
          <p className="mark">&#169;2022 Ryan J. Parker</p>
        </div>
        <div className="stack-wrap">
          <Stack />
        </div>
      </div>
    </>
  );
}
