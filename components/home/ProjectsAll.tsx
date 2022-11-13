import { FC } from 'react';
import Link from 'next/link';

import { IProject } from 'interfaces';
import Project from 'components/ui/Project';
import styles from 'styles/Projects.module.css';

interface Props {
  projects: IProject[];
}

const ProjectsAll: FC<Props> = ({ projects }) => {
  return (
    <div className={styles.projectsAll}>
        <Link href="/" >
            <i className={"fa-solid fa-arrow-left " + styles["projectsAll-back"]}></i>
        </Link>
      <h2 className={styles['projectsAll-title']}>MY PROJECTS</h2>
      <div className={styles.projects}>
        {projects.map(project => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsAll;
