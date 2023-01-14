import Link from 'next/link';
import { FC } from 'react';

import { en, es } from '@/i18n';
import { IProject } from '@/interfaces';
import { Project } from '../ui';
import { useLang } from '@/hooks';
import styles from '@/styles/Projects.module.css';

interface Props {
  projects: IProject[];
}

const ProjectsSalient: FC<Props> = ({ projects }) => {
  const { isLangSpanish, locale } = useLang();

  return (
    <section id="projects" className={styles.projectsSalient}>
      <h2 className={styles['projectsSalient-title']}> {isLangSpanish ? es.projects.title : en.projects.title}</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
      <div className={styles['projectsSalient-seeMore']}>
        <Link href={`${locale}/projects`}>
          <button>
            {isLangSpanish ? es.projects.button : en.projects.button} <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSalient;
