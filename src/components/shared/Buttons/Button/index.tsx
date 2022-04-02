import { Typography } from 'components/shared/Typography';
import styles from './styles.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text';
  size?: 'normal' | 'small'
  icon?: React.ReactNode;
  color?: 'black' | 'pink';
  fullWidth?: boolean;
}

export const Button: React.FC<IButton> = ({ children, variant = 'filled', size = 'normal', icon = null, color = 'black', fullWidth = false, ...rest }) => (
  <button 
    className={`${styles.btn} ${styles[variant]} ${styles[size]} ${styles[color]} ${fullWidth ? styles.full : ''}`}
    {...rest}
  >
    {icon && <i className={styles.icon}>{icon}</i>}
    {children}
  </button>
);