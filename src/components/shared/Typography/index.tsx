import React from 'react';
import { Colors } from 'styles/colors';

import styles from './styles.module.scss';

interface ITypography extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  asComponent?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'span'
  fontSize?: number;
  fontWeight?: number;
  color?: Colors;
}

export const Typography: React.FC<ITypography> = ({ children, asComponent = 'p', variant = 300, fontSize, fontWeight, color = 'black', style, className = '', ...rest }) => {
  const CustomTag = asComponent;


  const customStyles = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: fontSize !== null ? fontSize : undefined,
    fontWeight: fontWeight !== null ? fontWeight : undefined,
    lineHeight: '120%',
    ...style
  };

  return <CustomTag style={customStyles} className={`${className} ${styles[color]} ${styles[`s-${variant}`]}`}>{children}</CustomTag>;
};
