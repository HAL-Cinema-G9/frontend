import { css } from '@emotion/react';
import ShopInfo from './MiddleInfo/ShopInfo';
import MovieInfo from './MiddleInfo/MovieInfo';

const styles = {
  middleContent_container: css`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 90%;
    margin: 0 auto;
    background-color: gray;
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

const MiddleInfo = () => {
  return (
    <div css={styles.middleContent_container}>
      <div css={styles.leftLayout}>
        <MovieInfo />
      </div>

      <div css={styles.rightLayout}>
        <ShopInfo />
      </div>
    </div>
  );
};

export default MiddleInfo;
