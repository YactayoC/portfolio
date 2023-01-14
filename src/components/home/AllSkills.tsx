import { FC, useState } from 'react';

import { en, es } from '@/i18n';
import { ITechnology } from '@/interfaces';
import Skill from './Skill';
import { useLang } from '@/hooks';
import styles from '@/styles/Home.module.css';

interface Props {
  technologies: ITechnology[];
}

const AllSkills: FC<Props> = ({ technologies }) => {
  const [index, setIndex] = useState<number>(0);
  const { isLangSpanish } = useLang();

  return (
    <section id="skills" className={styles.allSkills}>
      <h2 className={styles['allSkills-title']}>{isLangSpanish ? es.skills.title : en.skills.title}</h2>
      <div className={styles['allSkills-tabs']}>
        <div className={styles['allSkills-tabsList']}>
          <div
            className={index === 0 ? styles['tabsList_tabHeadActive'] : styles['tabsList_tabHead']}
            onClick={() => {
              setIndex(0);
            }}
          >
            {isLangSpanish ? es.skills.tab_1 : en.skills.tab_1}
          </div>
          <div
            className={index === 1 ? styles['tabsList_tabHeadActive'] : styles['tabsList_tabHead']}
            onClick={() => {
              setIndex(1);
            }}
          >
            {isLangSpanish ? es.skills.tab_2 : en.skills.tab_2}
          </div>
          <div
            className={index === 2 ? styles['tabsList_tabHeadActive'] : styles['tabsList_tabHead']}
            onClick={() => {
              setIndex(2);
            }}
          >
            {isLangSpanish ? es.skills.tab_3 : en.skills.tab_3}
          </div>
          <div
            className={index === 3 ? styles['tabsList_tabHeadActive'] : styles['tabsList_tabHead']}
            onClick={() => {
              setIndex(3);
            }}
          >
            {isLangSpanish ? es.skills.tab_4 : en.skills.tab_4}
          </div>
        </div>

        <div className={index !== 0 ? styles.tabContentHide : styles.tabContent}>
          {technologies
            .filter((technology) => technology.category === 'frontend')
            .map((technology) => (
              <Skill key={technology.name} technology={technology} />
            ))}
        </div>
        <div className={index !== 1 ? styles.tabContentHide : styles.tabContent}>
          {technologies
            .filter((technology) => technology.category === 'backend')
            .map((technology) => (
              <Skill key={technology.name} technology={technology} />
            ))}
        </div>
        <div className={index !== 2 ? styles.tabContentHide : styles.tabContent}>
          {technologies
            .filter((technology) => technology.category === 'database')
            .map((technology) => (
              <Skill key={technology._id} technology={technology} />
            ))}
        </div>
        <div className={index !== 3 ? styles.tabContentHide : styles.tabContent}>
          {technologies
            .filter((technology) => technology.category === 'others')
            .map((technology) => (
              <Skill key={technology._id} technology={technology} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AllSkills;
