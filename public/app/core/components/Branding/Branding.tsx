import React, { FC } from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const LoginLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/grafana_icon.svg" alt="哥让发呢" />;
};

const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  const theme = useTheme();
  const background = css`
    background: url(public/img/login_background_${theme.isDark ? 'dark' : 'light'}.svg);
    background-size: cover;
  `;

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/grafana_icon.svg" alt="哥让发呢" />;
};

const LoginBoxBackground = () => {
  const theme = useTheme();
  return css`
    background: ${theme.isLight ? 'rgba(6, 30, 200, 0.1 )' : 'rgba(18, 28, 41, 0.65)'};
    background-size: cover;
  `;
};

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static LoginBoxBackground = LoginBoxBackground;
  static AppTitle = '哥让发呢';
  static LoginTitle = '欢迎到哥让发呢';
  static GetLoginSubTitle = () => {
    const slogans = [
      '不要妨碍数据',
      '你的一块玻璃',
      'Built better一起建设得更好 together',
      'Democrat数据民主化ising data',
    ];
    const count = slogans.length;
    return slogans[Math.floor(Math.random() * count)];
  };
}
