import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContex';

function ProjectDetails() {
  const { id } = useParams();
  const { projects } = useContext(AppContext);
  const project = projects.find((element) => element._id === id);
  return (
    <div className="card-content-container open">
      <motion.div
        className="card-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        <motion.div
          className="title-container"
        >
          <h2>{project.title}</h2>
        </motion.div>
        <motion.div className="content-container" animate>
          {project.content}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectDetails;
