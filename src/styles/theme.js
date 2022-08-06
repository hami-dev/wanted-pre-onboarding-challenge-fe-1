import {css} from 'styled-components';

const defaultTheme = {
  black: '#00072E',
  white: '#ffffff',
  blue: '#0F71FA',
  red: '#EF403A',
  lightblue: '#26ACFF',
  gray: '#737373',
  lightgray: '#d1d6de',
  fonts: {
    title: css`
      font-size: 30px;
      line-height: 36pxpx;
      font-weight: 700;
    `,
    subTitle: css`
      font-size: 24px;
      line-height: 30px;
      font-weight: 400;
    `,
    body: css`
      font-size: 15px;
      line-height: 19px;
      font-weight: 400;
    `,
    description: css`
      font-size: 12px;
      line-height: 15px;
      font-weight: 400;
    `,
  },
};

export default defaultTheme;
