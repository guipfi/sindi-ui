import styles from './styles.module.scss';

export const WhatsApp = () => (
  <img 
    className={styles.whats} 
    src='/images/logo-whats.svg' 
    alt="Ir para WhatsApp"
    onClick={() => window.open('https://wa.me/5511976797009', '_blank')}
  />
);