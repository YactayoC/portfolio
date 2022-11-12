import Head from 'next/head';
import { FC } from 'react';

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

      <main>
        <div>{children}</div>
      </main>
    </>
  );
};
export default PortfolioLayout;
