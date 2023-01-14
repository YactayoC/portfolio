/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Link from 'next/link';

import { en, es } from '@/i18n';
import { IProject } from '@/interfaces';
import { useLang } from '@/hooks';
import styles from '@/styles/Projects.module.css';

interface Props {
  project: IProject;
}

const Project: FC<Props> = ({ project }) => {
  const { isLangSpanish } = useLang();

  const playVideo = (e: any) => {
    e.target?.play();
  };

  const pauseVideo = (e: any) => {
    e.target?.pause();
  };

  return (
    <div className={styles.project}>
      <video
        className={styles.project__video}
        src={project.video}
        muted
        loop
        poster={project.images[0]}
        onMouseOver={playVideo}
        onMouseOut={pauseVideo}
      ></video>
      <div className={styles.project__details}>
        <p>{project.title}</p>
        <Link href={`/project/${project.title}`}>
          <p>
            {isLangSpanish ? es.projects.details : en.projects.details} <i className="fa-solid fa-arrow-right"></i>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
