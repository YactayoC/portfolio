import { GetStaticProps } from 'next';
import { FC } from 'react';

import { getAllTechnologies } from 'database/dbTechonologies';
import { getSalientProjects } from 'database/dbProjects';
import { About, AllSkills, Contact, Hero, Navbar, PortfolioLayout, ProjectsSalient } from 'components';
import { IProject, ITechnology } from 'interfaces';

interface Props {
  technologies: ITechnology[];
  projects: IProject[];
}

const Home: FC<Props> = ({ technologies, projects }) => {
  return (
    <PortfolioLayout title="Sebastian Yactayo">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="container">
        <div className="two-content">
          <About />
          <AllSkills technologies={technologies} />
        </div>
        <ProjectsSalient projects={projects} />
        <Contact />
      </main>
    </PortfolioLayout>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  const technologies = await getAllTechnologies();
  const projects = await getSalientProjects();

  return {
    props: {
      technologies,
      projects,
    },
    revalidate: 86400,
  };
};

export default Home;
