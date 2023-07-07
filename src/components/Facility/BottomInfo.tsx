import { css } from '@emotion/react';

const styles = {
  middleContent_container: css`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background-color: black;
  `,
  leftLayout: css`
    flex: 1;
    background-color: red;
  `,
  rightLayout: css`
    flex: 1;
    background-color: red;
  `,
};

const BottomInfo = () => {
  return (
    <div css={styles.middleContent_container}>
      <div css={styles.leftLayout}>
        
      </div>

      <div css={styles.rightLayout}>
        
      </div>
    </div>
  );
};

export default BottomInfo;