import Head from 'next/head';
import { FC } from 'react';

import { ButtonLanguage } from '../ui';
import styles from '@/styles/ui/ButtonLanguage.module.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

const PortfolioLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className={styles.buttonLanguage}>
        <div>{children}</div>
        <ButtonLanguage />
      </main>
    </>
  );
};

export default PortfolioLayout;
