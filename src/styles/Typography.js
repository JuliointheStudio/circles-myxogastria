import { createGlobalStyle } from 'styled-components';

import styles from '~/styles/variables';

const { typography } = styles.base;

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-weight: ${typography.weight};
    font-style: ${typography.style};
    font-size: ${typography.size};
    font-family: ${typography.family}, sans-serif;

    line-height: ${typography.lineHeight};
  }

  p {
    margin: 0;
    padding: 0;

    + p {
      margin-top: 1.5rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;

    font-weight: ${typography.weightBold};
  }
`;
