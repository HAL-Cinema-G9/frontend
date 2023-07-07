import { css } from '@emotion/react';

const styles = {
  header: css`
    height: 200px;
    width: 100%;
    background-color: lightgray;
  `,
  menuImage: css`
    height: 730px;
    width: 100%;
    background-color: dimgray;
  `,
  menuTitle: css`
    height: 70px;
    width: 100%;
    background-color: lightgray;
  `,
  menuDescription: css`
    height: 300px;
    width: 100%;
    background-color: dimgray;
  `,
};

const ShopInfo = () => {
  return (
    <div>
      <div css={styles.header}>HEADER</div>
      <div css={styles.menuImage}>IMAGE</div>
      <div css={styles.menuTitle}>TITLE</div>
      <div css={styles.menuDescription}>DESCRIPTION</div>
    </div>
  );
};

export default ShopInfo;
