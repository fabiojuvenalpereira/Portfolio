/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { getProjects } from '../../utils/requests';
import Main from './style';

function LastProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!projects.length) {
      const getData = async () => {
        const projectsData = await getProjects();
        setProjects(projectsData);
      };
      getData();
    }
  }, [projects]);

  const projectsCards = () => (
    projects.length ? (projects.map((project) => (
      <div className="main-project-card" key={project._id}>
        <div className="background" />
        <div className="project-image">
          <img src={project.images[0]} alt="" />
        </div>
        <div className="title-card-area">
          <p>{project.title}</p>
        </div>
        <div className="resume-card-area">
          <p>{project.abstractContent}</p>
        </div>
        <div className="skills-area">
          {
              project.skills.map((skill) => (
                <div key={skill}>
                  <p className="skill">{skill}</p>
                </div>
              ))
            }
        </div>
      </div>
    ))) : (<p> Não possível carregar os projetos </p>));

  return (
    <Main>
      <div>
        <h1 className="title">PROJETOS RECENTES</h1>
        <div className="cards">
          { projectsCards() }
        </div>
      </div>
    </Main>
  );
}

export default LastProjects;
