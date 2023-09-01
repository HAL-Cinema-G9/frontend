import { css } from '@emotion/react';

const styles = {
  container: css`
    display: flex;
    position: fixed;
    z-index: 8; //8である理由はない
    height: 100vh;
    width: 100vw;
    background-color: white;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  list: css`
    padding: 10px;
    text-align: center;
    font-size: 3rem;
    color: black;
  `,
};

const MenuModal = () => {
  return (
    <div css={styles.container}>
      <p css={styles.list}>TOP</p>
      <p css={styles.list}>SHCEDULE</p>
      <p css={styles.list}>MOVIE</p>
      <p css={styles.list}>INFORMATION</p>
      <p css={styles.list}>PRICE</p>
      <p css={styles.list}>LOGIN</p>
    </div>
  );
};

export default MenuModal;
