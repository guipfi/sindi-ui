import React from 'react';
import { Header } from 'components/shared';

import styles from './styles.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <main className={styles.container}>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
