import { Schedule } from '@/types/apiTypes';
import { endMovieTime } from '@/utils/endMovieTime';
import { startMovieTime } from '@/utils/startMovieTime';
import { css } from '@emotion/react';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    color: #212121;
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
  // formattedDate: 例 2023年7月26日（水）15:20∼17:35
  const scheduleDate = new Date(schedule.date);
  const year = scheduleDate.getFullYear();
  const month = (scheduleDate.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const date = scheduleDate
    .getDate()
    .toString()
    .padStart(2, '0');

  const formattedDate = `${year}年${month}月${date}日（水）${startMovieTime(
    scheduleDate
  )}~${endMovieTime(
    scheduleDate,
    schedule.movie.duration
  )}`;

  return (
    <div css={styles.container}>
      <p css={styles.header}>ご購入内容</p>
      <div css={styles.main}>
        <p>作品</p>
        <h3>{schedule.movie.title}</h3>
        <p>日時</p>
        <h3>{formattedDate}</h3>
      </div>
    </div>
  );
};

export default PurchaseCard;
