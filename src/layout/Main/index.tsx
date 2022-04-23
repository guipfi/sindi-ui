import React from 'react';

import styles from './styles.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
};

export default Layout;
