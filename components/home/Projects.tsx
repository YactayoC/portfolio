import { FC } from 'react';
import Link from 'next/link';

import { IProject } from 'interfaces';
import Project from 'components/ui/Project';
import styles from 'styles/Projects.module.css';

interface Props {
  projects: IProject[];
}

const Projects: FC<Props> = ({ projects }) => {
  return (
    <section id="projects" className={styles.my__projects}>
      <h2>MY PROJECTS</h2>
      {/* {!showAll ? (
        <div className={styles.projects}>
          {projects
            .filter(project => project.salient === true)
            .map(project => (
              <Project key={project._id} project={project} />
            ))}
        </div>
      ) : (
        <div className={styles.projects}>
          {projects.map(project => (
            <Project key={project._id} project={project} />
          ))}
        </div>
      )}

      <div className={styles.projects__seeMore}>
        {showMore && (
          <Link href="/projects">
            <button>
              See more projects <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        )}
      </div> */}
    </section>
  );
};

export default Projects;
