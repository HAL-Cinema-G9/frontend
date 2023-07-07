import { css } from '@emotion/react';

const styles = {
  container: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 700px;
    width: 100%;
    background-color: lightblue;
  `,
  item: css`
    height: 80%;
    width: 25%;
    background-color: lightgray;
  `,
};

const TopInfo = () => {
  return (
    <div css={styles.container}>
      <div css={styles.item}>映画</div>
      <div css={styles.item}>映画</div>
      <div css={styles.item}>映画</div>
    </div>
  );
};

export default TopInfo;
