import React from 'react';
import { Colors } from 'styles/colors';

import styles from './styles.module.scss';

interface ITypography extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'subtitle' | 'small' | 'xsmall' 
  fontSize?: number;
  fontWeight?: number;
  color?: Colors;
}

export const Typography: React.FC<ITypography> = ({ children, variant = 'body', fontSize, fontWeight, color = 'black', style, className, ...rest }) => {
  const customStyles = {
    fontSize: fontSize !== null ? fontSize : undefined,
    fontWeight: fontWeight !== null ? fontWeight : undefined,
    lineHeight: '120%',
    ...style
  };

  if(variant === 'h1') return <h1 {...rest} style={customStyles} className={`${styles[color]} ${styles[variant]}`}>{children}</h1>;
  if(variant === 'h2') return <h2 {...rest} style={customStyles} className={`${styles[color]} ${styles[variant]}`} >{children}</h2>;
  if(variant === 'h3') return <h3 {...rest} style={customStyles} className={`${styles[color]} ${styles[variant]}`} >{children}</h3>;

  return <p {...rest} style={customStyles} className={`${styles[color]} ${styles[variant]}`}>{children}</p>;
};
