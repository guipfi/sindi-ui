import styles from './styles.module.scss';

interface IShortcut extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: 'black' | 'pink';
  icon: React.ReactNode;
}

export const Shortcut: React.FC<IShortcut> = ({
  children,
  icon = null,
  color = 'black',
  ...rest
}) => (
  <a className={`${styles.btn} ${styles[color]}`} {...rest}>
    {icon && <i className={styles.icon}>{icon}</i>}
    {children}
  </a>
);
