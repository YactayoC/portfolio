import Image from 'next/image';
import styles from 'styles/ui/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['navbar-desktop']}></div>

      <div className={styles['navbar-mobile']}>
        <a href="#about">
          <Image src="https://cdn-icons-png.flaticon.com/512/157/157933.png" alt="about" width={40} height={40} />
        </a>
        <a href="#skills">
          <Image src="https://cdn-icons-png.flaticon.com/512/711/711284.png" alt="skills" width={40} height={40} />
        </a>
        <a href="#projects">
          <Image src="https://cdn-icons-png.flaticon.com/512/7964/7964620.png" alt="projects" width={40} height={40} />
        </a>
        <a href="#contact">
          <Image src="https://cdn-icons-png.flaticon.com/512/2767/2767188.png" alt="contact" width={40} height={40} />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
