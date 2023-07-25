import { Schedule } from '@/types/apiTypes';
import { css } from '@emotion/react';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    border: 1px solid #ccc;
  `,
  header: css`
    background-color: #ccc;
    width: 100%;
    padding: 10px;
  `,
  main: css`
    padding: 10px;
  `,
};

type Props = {
  schedule: Schedule;
};

const PurchaseCard = ({ schedule }: Props) => {
  return (
    <div css={styles.container}>
      <p css={styles.header}>ご購入内容</p>
      <div css={styles.main}>
        <p>作品</p>
        <h3>{schedule.movie.title}</h3>
        <p>日時</p>
        <h3>{schedule.date.toString()}</h3>
      </div>
    </div>
  );
};

export default PurchaseCard;
