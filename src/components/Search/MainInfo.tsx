import { css } from '@emotion/react';

const styles = {
  container: css`
    display: flex;
    justify-content: center;

    background-color: gray;
  `,
  movieImage: css`
    height: 800px;
    width: 550px;
    margin: 50px 50px;

    background-color: black;
  `,
  padding: css`
    height: 800px;
    width: 550px;
    margin: 50px 50px;

    background-color: white;
  `,
};

const MainInfo = () => {
  return (
    <div>
      <div css={styles.container}>
        <div css={styles.movieImage}></div>
        <div css={styles.padding}></div>
      </div>
      <div css={styles.container}>
        <div css={styles.padding}></div>
        <div css={styles.movieImage}></div>
      </div>
    </div>
  );
};

export default MainInfo;
