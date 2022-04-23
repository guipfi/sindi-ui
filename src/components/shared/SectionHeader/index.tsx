import styles from './styles.module.scss';
import { Typography } from '../Typography';
import { Header } from '../Header';
import { SectionTitle } from '../SectionTitle';

interface ISectionHeader extends React.HTMLAttributes<HTMLDivElement> {
  background?: 'pink' | 'black';
  title: string;
  backUrl?: string;
}

export const SectionHeader: React.FC<ISectionHeader> = ({ background = 'pink', title = '', backUrl = '/' }) => (
  <>
    <div className={styles.stretchBg}></div>
    <section className={`${styles.content} ${styles[background]}`}>
      <Header background={background} />
      <SectionTitle color='white' backUrl={backUrl} size='small'>{title}</SectionTitle>
    </section>
  </>
);
