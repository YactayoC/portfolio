import { FC } from 'react';

import { ITechnology } from '@/interfaces';
import styles from '@/styles/Home.module.css';

interface Props {
  technology: ITechnology | any;
}

const Skill: FC<Props> = ({ technology }) => {
  return (
    <figure className={styles.skill__figure}>
      <picture className={styles.skill__picture}>
        <img src={technology.image} alt={technology.name} />
      </picture>
      <figcaption className={styles.skill__caption}>{technology.name}</figcaption>
    </figure>
  );
};
export default Skill;
