import { css } from '@emotion/react';

const styles = {
  container: css`
    width: 100%;
    background-color: black;
    text-align: center;
    color: white;
  `,
  footerBlock: css`
    font-size: 1rem;
  `,
};

const Footer = () => {
  return (
    <div css={styles.container}>
      <p css={styles.footerBlock}>Footer</p>
    </div>
  );
};

export default Footer;
