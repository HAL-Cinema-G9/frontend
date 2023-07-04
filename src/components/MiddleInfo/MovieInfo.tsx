import { css } from '@emotion/react';

const styles = {
  leftContent_box: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: dimgray;
  `,
  header: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 60%;
    margin-right: auto;
    background-color: lightgray;
  `,
  descriptionBox: css`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 50%;
    background-color: lightgray;
  `,
  descriptionTitle: css`
    height: 30%;
    width: 100%;
    background-color: darkgray;
  `,
  description: css`
    height: 70%;
    width: 100%;
    background-color: dimgray;
  `,
  movieImage: css`
    height: 400px;
    width: 50%;
    background-color: lightgray;
  `,
};

const MovieInfo = () => {
  return (
    <div>
      <div css={styles.leftContent_box}>
        <div css={styles.header}>HEADER</div>
      </div>
      <div css={styles.leftContent_box}>
        <div css={styles.descriptionBox}>
          <div css={styles.descriptionTitle}>TITLE</div>
          <div css={styles.description}>DESCRIPTION</div>
        </div>

        <div css={styles.movieImage}>IMAGE</div>
      </div>
      <div css={styles.leftContent_box}>
        <div css={styles.movieImage}>IMAGE</div>

        <div css={styles.descriptionBox}>
          <div css={styles.descriptionTitle}>TITLE</div>
          <div css={styles.description}>DESCRIPTION</div>
        </div>
      </div>
      <div css={styles.leftContent_box}>
        <div css={styles.descriptionBox}>
          <div css={styles.descriptionTitle}>TITLE</div>
          <div css={styles.description}>DESCRIPTION</div>
        </div>

        <div css={styles.movieImage}>IMAGE</div>
      </div>
    </div>
  );
};

export default MovieInfo;
