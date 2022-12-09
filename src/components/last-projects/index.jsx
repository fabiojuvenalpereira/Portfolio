import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContex';
import { getProjects } from '../../utils/requests';
import ProjectCard from '../project-card-component/project-card';
import Main from './style';

function LastProjects() {
  const { projects, setProjects } = useContext(AppContext);
  // const { selectedId } = useContext(AppContext);

  useEffect(() => {
    if (!projects.length) {
      const getData = async () => {
        const projectsData = await getProjects();
        setProjects(projectsData);
      };
      getData();
    }
  }, [projects]);

  return (
    <Main>
      <h1 className="title-section-page">PROJETOS RECENTES</h1>
      <ul className="cards">
        {
          projects.length ? (
            projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project._id}
                id={project._id}
                images={project.images}
                title={project.title}
                abstractContent={project.abstractContent}
                skills={project.skills}
              />
            ))) : (<p> Não possível carregar os projetos </p>)
        }
      </ul>
    </Main>
  );
}

export default LastProjects;
