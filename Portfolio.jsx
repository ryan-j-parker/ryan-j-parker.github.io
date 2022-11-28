import React from 'react';
import { Projects } from '../Projects';
import './Portfolio.css';

export const Portfolio = () => {
  const card = Projects.map((project) => {
    return (
      <>
        <div key={project.id} className="card">
          <p className="name">{project.name}</p>
          <div className="image-box">
            <a className="github" href={project.github} rel="noreferrer" target="_blank">
              <img className="github-icon" src="../github-icon-white.png" />
            </a>
            <a className="netlify" href={project.netlify} rel="noreferrer" target="_blank">
              <img className="netlify-icon" src="../netlify-icon.png" />
            </a>
            <img src={`../previews/${project.image}.png`} className="proj-img" />
          </div>
          <p className="desc">{project.description}</p>
        </div>
      </>
    );
  });
  return <>{card}</>;
};
