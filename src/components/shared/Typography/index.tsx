import { Colors } from 'styles/colors';

import styles from './styles.module.scss';

interface ITypography extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'subtitle' | 'small' | 'xsmall' 
  fontSize?: number;
  fontWeight?: number;
  color?: Colors;
}

export const Typography: React.FC<ITypography> = ({ children, variant = 'body', fontSize = '1rem', fontWeight, color = 'black', style, ...rest }) => {
  const customStyles = {
    fontSize: fontSize !== null ? `${fontSize}rem` : undefined,
    fontWeight: fontWeight !== null ? fontWeight : undefined,
    ...style
  };

  if(variant === 'h1') return <h1 style={customStyles} className={`${styles.baseFont} ${styles[color]} ${styles[variant]}`}>{children}</h1>;
  if(variant === 'h2') return <h2 style={customStyles} className={`${styles.baseFont} ${styles[color]} ${styles[variant]}`}>{children}</h2>;
  if(variant === 'h3') return <h3 style={customStyles} className={`${styles.baseFont} ${styles[color]} ${styles[variant]}`}>{children}</h3>;

  return <p style={customStyles} className={`${styles.baseFont} ${styles[color]} ${styles[variant]}`}>{children}</p>;
};
