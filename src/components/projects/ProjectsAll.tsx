import { FC } from 'react';

import { IProject } from '@/interfaces';

import styles from '@/styles/Projects.module.css';
import { Project } from '../ui';

interface Props {
  projects: IProject[];
}

const ProjectsAll: FC<Props> = ({ projects }) => {
  return (
    <div className={styles.projectsAll}>
      <div className={styles.projects}>
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsAll;
