import { css } from '@emotion/react';

const styles = {
  movieListContainer: css`
    background-color: #524160;
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
  `,
  movieWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  titleWrapper: css`
    background-color: #555;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      padding: 10px 20px;
      color: #fff;
    }
    p {
      padding: 10px 20px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
  `,
  scheduleWrapper: css`
    display: flex;
    align-items: center;
    gap: 50px;
  `,
  screenInfo: css`
    background-color: #fff;
    padding: 10px 20px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      color: #555;
    }
  `,
  timeInfo: css`
    background-color: #fff;
    padding: 10px 20px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  time: css`
    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: left;
    }
    p {
      font-size: 1rem;
      color: #555;
      text-align: right;
    }
  `,
  buyBtn: css`
    margin-top: 20px;
    padding: 5px 10px;
    background-color: #5a5aa7;
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 18px;
      font-weight: bold;
      background-color: white;
      color: #5a5aa7;
      padding: 3px 5px;
    }
    p {
      flex: 1;
      font-size: 14px;
      color: #fff;
      text-align: center;
    }
  `,
};

const MovieList = () => {
  return (
    <div css={styles.movieListContainer}>
      <div css={styles.movieWrapper}>
        <div css={styles.titleWrapper}>
          <h2>映画タイトル</h2>
          <p>作品詳細へ</p>
        </div>
        <div css={styles.scheduleWrapper}>
          <div css={styles.screenInfo}>
            <h2>スクリーン1</h2>
            <p>150分</p>
          </div>
          <div css={styles.timeInfo}>
            <div css={styles.time}>
              <h3>10:50</h3>
              <p>~14:50</p>
            </div>
            <div css={styles.buyBtn}>
              <span>&#9675;</span>
              <p>購入</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
