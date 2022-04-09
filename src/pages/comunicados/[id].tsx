import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

const Comunicados: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      Comunicado {id}
    </div>
  );
};

export default Comunicados;
