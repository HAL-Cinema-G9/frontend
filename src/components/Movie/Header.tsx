import { css } from '@emotion/react';

const styles = {
  container: css`
    width: 100%;
    background-color: black;
    text-align: center;
    color: white;
  `,
  header: css`
    font-size: 3rem;
  `,
};

const Header = () => {
  return (
    <div css={styles.container}>
      <p css={styles.header}>DATE</p>
      <p css={styles.header}>DESCRIPTION</p>
    </div>
  );
};

export default Header;
