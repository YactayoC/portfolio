import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import { PortfolioLayout, ProjectsAll } from 'components';
import { getAllProjects, getAllProjectsExternalAPI, getAllProjectsOwnAPI } from 'database/dbProjects';
import { IProject } from 'interfaces';
import styles from 'styles/Projects.module.css';

interface Props {
  projectsAll: IProject[];
  projectsExternalAPI: IProject[];
  projectsOwnAPI: IProject[];
}

const Projects: FC<Props> = ({ projectsAll, projectsExternalAPI, projectsOwnAPI }) => {
  const [projectsFilter, setProjectsFilter] = useState('all');
  const [projectsResult, setProjectsResult] = useState<IProject[]>(projectsAll);
  // const [projectsSearch, setProjectsSearch] = useState('');

  useEffect(() => {
    if (projectsFilter === 'external') setProjectsResult(projectsExternalAPI);
    if (projectsFilter === 'own') setProjectsResult(projectsOwnAPI);
    if (projectsFilter === 'all') setProjectsResult(projectsAll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsFilter, setProjectsFilter]);

  return (
    <PortfolioLayout title="Projects | YactayoC">
      <div className={styles.projectsAll}>
        <Link href="/">
          <i className={'fa-solid fa-arrow-left ' + styles['projectsAll-back']}></i>
        </Link>
        <h2 className={styles['projectsAll-title']}>MY PROJECTS</h2>
        <form className={styles['projects-form']}>
          {/* <input
            type="text"
            defaultValue={projectsSearch}
            placeholder="Search project"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProjectsSearch(e.target.value)}
          /> */}
          <select
            className={styles['projects-filter']}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setProjectsFilter(e.target.value)}
          >
            <option value="all">All Projects</option>
            <option value="external">External Apis</option>
            <option value="own">Own Apis</option>
            {/* <option value="layouts">Layouts</option> */}
          </select>
        </form>
        <ProjectsAll projects={projectsResult} />
      </div>
    </PortfolioLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const projectsAll = await getAllProjects();
  const projectsExternalAPI = await getAllProjectsExternalAPI();
  const projectsOwnAPI = await getAllProjectsOwnAPI();

  return {
    props: {
      projectsAll,
      projectsExternalAPI,
      projectsOwnAPI,
    },
    revalidate: 86400,
  };
};
export default Projects;
