import styles from 'styles/ui/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['navbar-desktop']}>
        <div className={styles['navbar-desktop-logo']}>
          <a href="#present">{'<YactayoC/>'}</a>
        </div>
        <div className={styles['navbar-desktop-links']}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className={styles['navbar-mobile']}>
        <a href="#about" title='About me'>
          <i className="fa-solid fa-circle-info"></i>
        </a>
        <a href="#skills" title='Skills'>
          <i className="fa-solid fa-code"></i>
        </a>
        <a href="#projects" title='Projects'>
          <i className="fa-solid fa-rocket"></i>
        </a>
        <a href="#contact" title='Contact'>
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
