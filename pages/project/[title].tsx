import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import { PortfolioLayout, Skill, SlideImages } from 'components';
import { getAllProjects, getProjectByTitle } from 'database/dbProjects';
import { IProject } from 'interfaces';
import styles from "styles/ProjectDetail.module.css";
import { useRouter } from 'next/router';

interface Props {
  project: IProject;
}

const ProjectTitle: FC<Props> = ({ project }) => {
  const router = useRouter();

  return (
    <PortfolioLayout title={`${project.title} | YactayoC`}>
      <div className={styles.detail}>
        <div onClick={() => router.back()}>
          <button className={styles.back}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div className={styles.detail__content}>
          <div className={styles.content__text}>
            <h1>{project.title}</h1>
            <div className={styles.content__buttons}>
              <a href={project.url} target="_blank" rel="noreferrer">
                <button className={styles.button__one}>
                  <span>View Website</span> <i className="fa-regular fa-eye"></i>
                </button>
              </a>
              <a href={project.repository} target="_blank" rel="noreferrer">
                <button className={styles.button__two}>
                  <span>View Code</span> <i className="fa-brands fa-github"></i>
                </button>
              </a>
            </div>
            <div className={styles.content__description}>
              <h4>About this project</h4>
              <p>{project.description}</p>
            </div>
            <div className={styles.content__technologies}>
              <h4>Technologies</h4>
              <div className={styles.technologies__icons}>
                {project.technologies.map(technology => (
                  <Skill key={technology.name} technology={technology} />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.content__image}>
            <SlideImages images={project.images} />
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getAllProjects();

  const projectsTitles = projects!.map(project => ({
    params: { title: project.title },
  }));

  return {
    paths: projectsTitles,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { title } = params as { title: string };
  const project = await getProjectByTitle(title);

  if (!project) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      project,
    },
    revalidate: 86400,
  };
};
export default ProjectTitle;
