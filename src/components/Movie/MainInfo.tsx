import { css } from '@emotion/react';

const styles = {
  container: css`
    display: flex;
    justify-content: center;

    background-color: gray;
  `,
  movieImage: css`
    height: 500px;
    width: 350px;
    margin: 50px 100px;

    background-color: black;
  `,
  padding: css`
    height: 500px;
    width: 350px;
    margin: 50px 100px;

    background-color: white;
  `,
};

const MainInfo = () => {
  return (
    <div>
      <div css={styles.container}>
        <div css={styles.padding}></div>
        <div css={styles.movieImage}></div>
      </div>
      <div css={styles.container}>
        <div css={styles.movieImage}></div>
        <div css={styles.padding}></div>
      </div>
    </div>
  );
};

export default MainInfo;
