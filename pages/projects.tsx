import { GetStaticProps } from 'next';
import { FC } from 'react';

import { PortfolioLayout, ProjectsAll } from 'components';
import { getAllProjects } from 'database/dbProjects';
import { IProject } from 'interfaces';
import styles from 'styles/Projects.module.css';

interface Props {
  projects: IProject[];
}

const Projects: FC<Props> = ({ projects }) => {
  return (
    <PortfolioLayout title="Projects | YactayoC">
    <div className={styles.projectsAll}>
      <ProjectsAll projects={projects} />
    </div>
    </PortfolioLayout>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
    revalidate: 86400,
  };
};
export default Projects;
