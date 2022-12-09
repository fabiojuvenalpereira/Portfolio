import React from 'react';
import { Link } from 'react-router-dom';
import Main from './styles';

function ProjectCard({
  id, images, title, abstractContent, skills,
}) {
  return (
    <Link to={`/${id}`}>
      <Main key={id}>
        <section className="background" />

        <section className="card-image">
          <img src={images[0]} alt="" />
        </section>

        <section className="card-content">
          <div className="title-card">
            <p>{title}</p>
          </div>
          <div className="resume-card">
            <p>{abstractContent}</p>
          </div>
          <div className="skills-card">
            {skills.map((skill) => (
              <div key={skill}>
                <p className="skill">{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </Main>
    </Link>
  );
}

export default ProjectCard;
