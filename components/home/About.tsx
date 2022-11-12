import styles from 'styles/AboutSkills.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles['about-title']}>ABOUT ME</h2>
      <p className={styles['about-text']}>
        👋 Hello, I am a web developer, I like to make web pages in addition to applying good practices for the
        development of these, I also like to learn new technologies and find different ways to solve some kind of
        problem.
        <br /> <br />
        🚀 I handle technologies like HTML, CSS, JavaScript, ReactJS, NodeJS, among others. But llend me more on the
        frontend side.
        <br /> <br />
        👨‍💻 As for my skills, I am responsible, I adapt to changes and I have good communication when working in a team.
      </p>
    </section>
  );
};
export default About;
