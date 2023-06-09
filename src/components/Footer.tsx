import { css } from '@emotion/react';

const styles = {
  container: css`
    width: 90%;
    margin: 0 auto;
  `,
};

const Footer = () => {
  return (
    <div css={styles.container}>
      <p>Footer</p>
    </div>
  );
};

export default Footer;
