import { css } from '@emotion/react';

const styles = {
  container: css`
    width: 100%;
    padding-top: 300px;

    text-align: center;

    background-color: black;
    color: white;
  `,
  header: css`
    font-size: 3rem;
  `,
};

const Header = () => {
  return (
    <div css={styles.container}>
      <p css={styles.header}>TITLE</p>
    </div>
  );
};

export default Header;
