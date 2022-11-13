import { FC } from 'react';
import Link from 'next/link';

import { IProject } from 'interfaces';
import Project from 'components/ui/Project';
import styles from 'styles/Projects.module.css';

interface Props {
  projects: IProject[];
}

const ProjectsSalient: FC<Props> = ({ projects }) => {
  return (
    <section id="projects" className={styles.projectsSalient}>
      <h2 className={styles["projectsSalient-title"]}>MY PROJECTS</h2>
      <div className={styles.projects}>
        {projects.map(project => (
          <Project key={project._id} project={project} />
        ))}
      </div>
      <div className={styles["projectsSalient-seeMore"]}>
        <Link href="/projects">
          <button>
            See more projects <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSalient;
