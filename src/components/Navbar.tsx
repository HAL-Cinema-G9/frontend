import { css } from '@emotion/react';

const styles = {
  container: css`
    height: 100px;
    width: 100%;

    display: flex;

    background-color: gray;
  `,
  menu: css`
    background-color: red;
  `,
  logo: css`
    background-color: blue;
    margin: 0 auto;
  `,
  account: css`
    background-color: red;
  `,
  search: css`
    background-color: blue;
  `,
};

const Navbar = () => {
  return (
    <div css={styles.container}>
      <div css={styles.menu}>burger</div>
      <div css={styles.logo}>HALCINEMA</div>
      <div css={styles.account}>account</div>
      <div css={styles.search}>search</div>
    </div>
  );
};

export default Navbar;
