import { css } from '@emotion/react';

const styles = {
  container: css`
    height: 100vh;
    width: 100vw;
    background-color: white;
    text-align: center;
  `,
  list: css`
    font-size: 3rem;
    color: black;
  `,
};

const MenuModal = () => {
  return (
    <div css={styles.container}>
      <p css={styles.list}>DATE</p>
      <p css={styles.list}>DESCRIPTION</p>
    </div>
  );
};

export default MenuModal;
