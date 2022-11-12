import { FC, useState } from 'react';

import { ITechnology } from 'interfaces';
import Skill from 'components/ui/Skill';
import styles from 'styles/AboutSkills.module.css';

interface Props {
  technologies: ITechnology[];
}

const AllSkills: FC<Props> = ({ technologies }) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <section id="skills" className={styles.allSkills}>
      <h2 className={styles['allSkills-title']}>MY SKILLS</h2>
      <div className={styles['allSkills-tabs']}>
        <div className={styles['allSkills-tabsList']}>
          <div
            className={index === 0 ? styles['tabsList_tabHeadActive'] : styles['tabsList_tabHead']}
            onClick={() => {
              setIndex(0);
            }}
          >
            Frontend
          </div>
          <div
            className={index === 1 ? styles['tabsList_tabHeadActive'] : styles['tabsList_tabHead']}
            onClick={() => {
              setIndex(1);
            }}
          >
            Backend
          </div>
          <div
            className={index === 2 ? styles['tabsList_tabHeadActive'] : styles['tabsList_tabHead']}
            onClick={() => {
              setIndex(2);
            }}
          >
            Database
          </div>
          <div
            className={index === 3 ? styles['tabsList_tabHeadActive'] : styles['tabsList_tabHead']}
            onClick={() => {
              setIndex(3);
            }}
          >
            Others
          </div>
        </div>

        <div className={index !== 0 ? styles.tabContentHide : styles.tabContent}>
          {technologies
            .filter(technology => technology.category === 'frontend')
            .map(technology => (
              <Skill key={technology.name} technology={technology} />
            ))}
        </div>
        <div className={index !== 1 ? styles.tabContentHide : styles.tabContent}>
          {technologies
            .filter(technology => technology.category === 'backend')
            .map(technology => (
              <Skill key={technology.name} technology={technology} />
            ))}
        </div>
        <div className={index !== 2 ? styles.tabContentHide : styles.tabContent}>
          {technologies
            .filter(technology => technology.category === 'database')
            .map(technology => (
              <Skill key={technology._id} technology={technology} />
            ))}
        </div>
        <div className={index !== 3 ? styles.tabContentHide : styles.tabContent}>
          {technologies
            .filter(technology => technology.category === 'others')
            .map(technology => (
              <Skill key={technology._id} technology={technology} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AllSkills;
