import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FC, useEffect } from 'react';

import { en, es } from '@/i18n';
import { AllSkills, Contact, PortfolioLayout, ProjectsSalient } from '@/components';
import { getAllTechnologies, getSalientProjects } from '@/database';
import { changeText } from '@/utils';
import { IProject, ITechnology } from '@/interfaces';
import { useLang } from '@/hooks';
import styles from '@/styles/Home.module.css';

interface Props {
  technologies: ITechnology[];
  projects: IProject[];
}

const Home: FC<Props> = ({ technologies, projects }) => {
  const router = useRouter();
  const { isLangSpanish } = useLang();

  useEffect(() => {
    const interval = changeText(router);
    return () => clearInterval(interval);
  }, [router]);

  return (
    <PortfolioLayout title="YactayoC">
      <header>
        <nav className={styles.nav}>
          <div className={styles['navbar-desktop']}>
            <div className={styles['navbar-desktop-logo']}>
              <a href="#present">{'<YactayoC/>'}</a>
            </div>
            <div className={styles['navbar-desktop-links']}>
              <a href="#about"> {isLangSpanish ? es.navbar.about : en.navbar.about}</a>
              <a href="#skills"> {isLangSpanish ? es.navbar.skills : en.navbar.skills}</a>
              <a href="#projects"> {isLangSpanish ? es.navbar.projects : en.navbar.projects}</a>
              <a href="#contact"> {isLangSpanish ? es.navbar.contact : en.navbar.contact}</a>
            </div>
          </div>

          <div className={styles['navbar-mobile']}>
            <a href="#about" title="About me">
              <i className="fa-solid fa-circle-info"></i>
            </a>
            <a href="#skills" title="Skills">
              <i className="fa-solid fa-code"></i>
            </a>
            <a href="#projects" title="Projects">
              <i className="fa-solid fa-rocket"></i>
            </a>
            <a href="#contact" title="Contact">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </nav>

        <div id="present" className={styles.hero}>
          <h1 className={styles['hero-title']}>
            {isLangSpanish ? es.hero.fullname : en.hero.fullname}
            <br />
            <span id="dynamic-text" className={styles.first__text}>
              {isLangSpanish ? es.hero.developerF : en.hero.developerF}
            </span>
          </h1>
          <a className={styles['hero-cv']} href="CV.pdf" download>
            {isLangSpanish ? es.hero.buttonCV : en.hero.buttonCV} <i className="fa-solid fa-download"></i>
          </a>
          <div className={styles['hero-buttons_social']}>
            <a href="https://github.com/YactayoC" target="_blank" rel="noreferrer">
              <Image
                src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659586588/portfolio/Icons/github_rrg1nf.png"
                alt="github"
                width={40}
                height={40}
              />
            </a>
            <a href="https://twitter.com/yactayo_aron" target="_blank" rel="noreferrer">
              <Image
                src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659586588/portfolio/Icons/twitter_zo7piv.png"
                alt="twitter"
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.linkedin.com/in/sebastianyactayocrisostomo/" target="_blank" rel="noreferrer">
              <Image
                src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659586588/portfolio/Icons/linkedin_sntgoj.png"
                alt="linkedin"
                width={40}
                height={40}
              />
            </a>
          </div>
          <a href="#about" className={styles.low}>
            <Image src="/imgs/low.gif" alt="low gif" width={120} height={100} />
          </a>
        </div>
      </header>
      <main className="container">
        <div className="two-content">
          <section id="about" className={styles.about}>
            <h2 className={styles['about-title']}>{isLangSpanish ? es.about.title : en.about.title}</h2>
            <p className={styles['about-text']}>
              {isLangSpanish ? es.about.description_me : en.about.description_me}
              <br /> <br />
              {isLangSpanish ? es.about.description_skills : en.about.description_skills}
              <br /> <br />
              {isLangSpanish ? es.about.description_abilities : en.about.description_abilities}
            </p>
          </section>
          <AllSkills technologies={technologies} />
        </div>
        <ProjectsSalient projects={projects} />
        <Contact />
      </main>
    </PortfolioLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
