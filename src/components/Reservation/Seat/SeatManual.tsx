import { css } from '@emotion/react';

const styles = {
  container: css`
    width: 100%;
    padding: 20px;
    color: #212121;
  `,
  seatManualWrapper: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10px 0;
    border: 1px solid #bdbdbd;
    padding: 20px;
    border-radius: 10px;
  `,

  seatDescription: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  selectColor: css`
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #ff0000;
    border: 1px solid #000;
    border-radius: 2px;
    margin-right: 10px;
  `,
  availableColor: css`
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #333;
    border: 1px solid #000;
    border-radius: 2px;
    margin-right: 10px;
  `,
  blankColor: css`
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 2px;
    margin-right: 10px;
  `,
};

const SeatManual = () => {
  return (
    <div css={styles.container}>
      <h4>アイコン説明</h4>
      <div css={styles.seatManualWrapper}>
        <p css={styles.seatDescription}>
          <span css={styles.blankColor}></span>
          <span>空席</span>
        </p>
        <p css={styles.seatDescription}>
          <span css={styles.selectColor}></span>
          <span>選択した席</span>
        </p>
        <p css={styles.seatDescription}>
          <span css={styles.availableColor}></span>
          <span>購入済み/販売対象外</span>
        </p>
      </div>
    </div>
  );
};

export default SeatManual;
