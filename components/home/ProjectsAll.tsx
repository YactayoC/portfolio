import { FC } from 'react';

import { IProject } from 'interfaces';
import Project from 'components/ui/Project';
import styles from 'styles/Projects.module.css';

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
