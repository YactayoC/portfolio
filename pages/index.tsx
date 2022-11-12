/* eslint-disable @next/next/no-img-element */
import { About, AllSkills, Contact, Hero, Navbar, PortfolioLayout, Projects } from 'components';

export default function Home({technologies}: any) {
  return (
    <PortfolioLayout title="Sebastian Yactayo">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="container">
        <div>
          <About />
          <AllSkills technologies={technologies} />
        </div>
        <Projects projects={[]}/>
        <Contact />
      </main>
    </PortfolioLayout>
  );
}

import { GetStaticProps } from 'next'
import { getAllTechnologies } from 'database/dbTechonologies';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const technologies = await  getAllTechnologies();

  return {
    props: {
      technologies
    }
  }
}
