/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';

import { changeText } from 'utils';
import styles from 'styles/Hero.module.css';

const Hero = () => {
  useEffect(() => {
    const interval = changeText();

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="present" className={styles.hero}>
      <h1 className={styles['hero-title']}>
        Hi, I’m Sebastian Yactayo
        <br />
        <span id="dynamic-text" className={styles.first__text}>
          Frontend Developer
        </span>
      </h1>
      <a className={styles['hero-cv']} href="CV.pdf" download>
        Download CV <i className="fa-solid fa-download"></i>
      </a>
      <div className={styles['hero-buttons_social']}>
        <a href="https://github.com/YactayoC" target="_blank" rel="noreferrer">
          <img
            src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659586588/portfolio/Icons/github_rrg1nf.png"
            alt="github"
          />
        </a>
        <a href="https://twitter.com/yactayo_aron" target="_blank" rel="noreferrer">
          <img
            src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659586588/portfolio/Icons/twitter_zo7piv.png"
            alt="twitter"
          />
        </a>
        <a href="https://www.linkedin.com/in/sebastianyactayocrisostomo/" target="_blank" rel="noreferrer">
          <img
            src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659586588/portfolio/Icons/linkedin_sntgoj.png"
            alt="linkedin"
          />
        </a>
      </div>
      <a href="#about" className={styles.low}>
        <img src="/imgs/low.gif" alt="low" />
      </a>
    </div>
  );
};
export default Hero;
